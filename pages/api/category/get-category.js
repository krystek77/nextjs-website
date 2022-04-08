/*
 * endpoint: http://localhost:3000/api/category/get-category
 */
import { connectMongoDB } from 'utils/database';

export default async function getNodels(req, res) {
  const { name } = req.body;
  try {
    const { database: db } = await connectMongoDB();
    const categories = db.collection('categories');
    const result = await categories
      .aggregate([
        {
          $lookup: {
            from: 'subcategories',
            localField: '_id',
            foreignField: 'categoryID',
            as: 'subcategories',
            pipeline: [
              {
                $lookup: {
                  from: 'types',
                  localField: '_id',
                  foreignField: 'subCategoryID',
                  as: 'types',
                },
              },
            ],
          },
        },
        { $match: { name } },
      ])
      .toArray();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
