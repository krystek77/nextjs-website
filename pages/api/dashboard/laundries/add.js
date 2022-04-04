import { connectMongoDB } from '../../../../utils/database';

/*
 *  path: http://localhost:3000/api/dashboard/laundries/add
 */

export default async function addLaundry(req, res) {
  const { body: data } = req;
  try {
    const { database: db, client } = await connectMongoDB();
    const galleryColection = db.collection('gallery');
    await galleryColection.insertOne(data);
    return res.status(201).json({ message: 'Pralnia została dodana' });
  } catch (error) {
    return res.json({ message: error.message });
  }
}
