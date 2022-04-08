import { connectMongoDB } from 'utils/database';

export async function getCategoryByName(name) {
  let items = [];
  try {
    const { database: db } = await connectMongoDB();
    const categories = db.collection('categories');
    items = await categories
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
    return items;
  } catch (error) {
    console.log(error.message);
  }
}
