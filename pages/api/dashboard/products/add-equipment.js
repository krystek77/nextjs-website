/*
 * endpoint http://localhost:3000/api/dashboard/products/add-equipment
 */
import { ObjectId } from 'mongodb';
import { connectMongoDB } from 'utils/database';
export default async function addEquipment(req, res) {
  const model = req.body;
  const typeID = ObjectId(model.typeID);
  model.typeID = typeID;
  try {
    const { database: db } = await connectMongoDB();
    const modelsCollection = db.collection('models');
    await modelsCollection.insertOne(model);
    return res.status(201).json({ message: 'Model dodany pomyślnie' });
  } catch (error) {
    return res.status(400).json({
      message: `Coś poszło nie tak podczas dodawania modelu: ${error.message}. Kod błędu:${error.code}`,
    });
  }
}
