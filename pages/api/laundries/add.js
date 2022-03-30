import { connectMongoDB } from '../../../utils/database';

export default async function addLaundry(req, res) {
  const { body: data } = req;
  try {
    const { database: db, client } = await connectMongoDB();
    const galleryColection = db.collection('gallery');
    await galleryColection.insertOne(data);
    client.close();
    return res.status(201).json({ message: 'Pralnia została dodana' });
  } catch (error) {
    return res.json({ message: error.message });
  }
}
