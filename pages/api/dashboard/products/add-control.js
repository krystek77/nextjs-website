/*
 * ENDPOINT http://localhost:3000/api/dashboard/products/add-control
 */
import { connectMongoDB } from '../../../../utils/database';
const COLLECTION_NAME = 'controls';

export default async function addControl(req, res) {
  const { body: data } = req;
  try {
    const { database: db } = await connectMongoDB();
    const collections = await db.listCollections().toArray();
    const isExists = collections.some(
      (collection) => collection.name === COLLECTION_NAME
    );

    if (!isExists) {
      await db.createCollection(COLLECTION_NAME, {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'image', 'list'],
            properties: {
              name: {
                bsonType: 'string',
                pattern: '^[a-zA-Z0-9ąćęłńóśźżĄĘŁŃÓŚŹŻ\\s\\.\\+-]{5,}$',
                description:
                  'Nazwa musi mieć co najmniej 5 znaków, może mieć kropki, spacje, myślniki, cyfry',
              },
              image: {
                bsonType: 'string',
                description: 'Obraz jest wymagany',
              },
              list: {
                bsonType: ['array'],
                uniqueItems: true,
                description: 'Lista musi mieć co najmniej jeden element',
                pattern: '^[a-zA-Z0-9ąćęłńóśźżĄĘŁŃÓŚŹŻ\\s\\.\\+,:-]{10,}$',
                items: {
                  bsonType: 'string',
                  description:
                    'Każdy łańcuch znaków musi być unikatowy i posiadać co najmniej 10 znaków. Może mieć kropki, spacje, myślniki i cyfry',
                },
              },
            },
          },
        },
      });
    }

    const controls = db.collection(COLLECTION_NAME);
    const isDocument = await controls.findOne({ name: data.name });

    if (isDocument) {
      return res.status(409).json({
        message: `Sterownik o nazwie: [${data.name}] już istnieje.`,
      });
    }
    await controls.insertOne(data);
    return res.status(201).json({ message: 'Sterownik dodany' });
  } catch (error) {
    return res.json({
      message: `${error.message}. Error code: ${error.code}`,
    });
  }
}
