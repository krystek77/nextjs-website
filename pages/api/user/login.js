/*
 *  endpoint: http://localhost:3000/api/user/login
 */
import { connectMongoDB } from '../../../utils/database';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function login(req, res) {
  const { email, password } = req.body;
  try {
    const { database: db } = await connectMongoDB();
    const usersCollection = db.collection('users');
    const existingUser = await usersCollection.findOne({ email: email });
    if (!existingUser)
      return res
        .status(404)
        .json({ message: `Użytkownik o email'u: ${email} nie istnieje.` });
    const isValidPassword = await bcryptjs.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword)
      return res.status(409).json({ message: `Niepoprawne hasło` });
    const access_token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role,
      },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      {
        expiresIn: 1200,
      }
    );

    return res.status(200).json({
      access_token: access_token,
      message: 'Logowanie zakończone powodzeniem',
    });
  } catch (error) {
    return res.status(500).json({
      message: `Coś poszło nie tak podczas logowania - ${error.message}`,
    });
  }
}
