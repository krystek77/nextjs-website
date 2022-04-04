import { connectMongoDB } from '../../../../utils/database';

/*
 * ENDPOINT: http://localhost:3000/api/dashboard/products/add-parameter
 */
const COLLECTION_NAME = 'parameters';

export default async function addParameter(req, res) {
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
            required: ['name', 'unit'],
            properties: {
              name: {
                bsonType: 'string',
                pattern: '^[a-zA-Z0-9ąćęłńóśźżĄĘŁŃÓŚŹŻ\\s\\.-]{5,}$',
                description:
                  'Nazwa musi być ciągiem znaków o długości co najmniej 5 i jest wymagana',
              },
              unit: {
                enum: [
                  '-',
                  'kg',
                  'mm',
                  'litrów',
                  'kW',
                  'kWh',
                  'obr./min.',
                  'm3',
                  'dm3',
                  'dB(A)',
                  'bar',
                  'mbar',
                  'kPa',
                  'cal',
                  'litrów / minutę',
                  'litrów / sekundę',
                  'gramów / minutę',
                  'm3 / godzinę',
                  'kg / godzinę',
                  'metrów / minutę',
                  '0C',
                ],
                description:
                  'Jednostka może być tylko jedną z wartości wyliczeniowych i jest wymagana',
              },
            },
          },
        },
      });
    }
    const parameters = db.collection(COLLECTION_NAME);
    const isDocument = await parameters.findOne({
      name: data.name,
      unit: data.unit,
    });
    if (isDocument) {
      return res.status(409).json({
        message: `Parametr o nazwie: [${data.name}] i jednostce: [${data.unit}] już istnieje.`,
      });
    }
    await parameters.insertOne(data);
    return res.status(201).json({ message: 'Parametr dodany' });
  } catch (error) {
    return res.json({
      message: `${error.message}. Error code: ${error.code}`,
    });
  }
}
