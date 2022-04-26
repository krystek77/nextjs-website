/**
 * POST: /api/category/add-category
 */
import fs from "fs";
import path from "path";
import { connectMongoDB } from "utils/database";

const OPL_DIRECTORY = path.join(process.cwd(), "pages", "urzadzenia-pralnia");
const VEND_DIRECTORY = path.join(process.cwd(), "pages", "urzadzenia-pralnia-samoobslugowa");

export default async function addCategory(req, res) {
  const { name, title, description, image, path, label } = req.body;
  const { database: db } = await connectMongoDB();
  const NAME = "pralnicowirówków";
  const vend = true;
  const categoryCollection = db.collection("categories");
  const MAIN_DIRECTORY = vend ? `${VEND_DIRECTORY}/${NAME}` : `${OPL_DIRECTORY}/${NAME}`;
  try {
    const result = await categoryCollection.findOne({ name: NAME });
    if (result) return res.status(200).json({ message: `Kategoria o podanej nazwie ${NAME} już istnieje` });
    fs.mkdir(MAIN_DIRECTORY, (error) => {
      if (error) {
        throw new Error(error.message);
      }
      console.log("Directory created successfully!");
      return res.status(201).json("Katalog utworzony pomyślnie");
    });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}
