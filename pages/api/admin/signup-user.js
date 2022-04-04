/*
 *  endpoint: http://localhost:3000/api/admin/signup-user
 */
import { connectMongoDB } from '../../../utils/database';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function signUpUser(req, res) {
  const { email, password, confirmationPassword, role } = req.body;
  try {
    const { database: db } = await connectMongoDB();
    const usersCollection = db.collection('users');
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: `Użytkownik o email'u: ${email} już istnieje.` });
    }
    if (password !== confirmationPassword) {
      return res.status(409).json({ message: `Hasła nie są takie same` });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = {
      email,
      password: hashedPassword,
      role,
    };
    const result = await usersCollection.insertOne(newUser);
    console.log(result);
    const access_token = jwt.sign(
      {
        id: result.insertedId,
        email: email,
        role: role,
      },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      {
        expiresIn: 1200,
      }
    );

    return res.status(201).json({
      access_token: access_token,
      message: `Konto użytkownika o email: ${email} założone pomyślnie`,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Coś poszło nie tak podczas zakładania konta użytkownika - ${error.message}`,
    });
  }
}
