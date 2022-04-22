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
    // console.log(categories);
    return items;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getModels(name) {
  let items = [];
  try {
    const { database: db } = await connectMongoDB();
    const categories = db.collection('categories');
    items = await categories
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
    return items;
  } catch (error) {
    console.log(error.message);
  }
}
