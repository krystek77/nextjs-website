/*
 * endpoint: http://localhost:3000/api/category/get-models
 */
import { connectMongoDB } from 'utils/database';

export default async function getModels(req, res) {
  const { name } = req.body;
  try {
    const { database: db } = await connectMongoDB();
    const categories = db.collection('categories');
    const result = await categories
      .aggregate([
        { $match: { name: name } },
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
                  pipeline: [
                    {
                      $lookup: {
                        from: 'models',
                        localField: '_id',
                        foreignField: 'typeID',
                        as: 'models',
                      },
                    },
                    {
                      $project: {
                        _id: 0,
                        subCategoryID: 0,
                        list: 0,
                        label: 0,
                        features: 0,
                        controls: 0,
                        image: 0,
                      },
                    },
                  ],
                },
              },
              { $project: { _id: 0, categoryID: 0 } },
            ],
          },
        },
        { $project: { _id: 0, name: 0, title: 0, description: 0 } },
      ])
      .toArray();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
