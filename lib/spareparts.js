import fs from "fs";
import path from "path";
import { spare_parts as data } from "../constants/spare_parts";

async function fetchSpareParts() {
  // for example: fetch data from database
  return data;
}
const SPARE_PARTS_CACHE_PATH = path.resolve(path.join(process.cwd(), "cache", "spareparts.js"));

export async function getSpareParts() {
  const data = await fetchSpareParts();
  try {
    const filledContent = `export const data = ${JSON.stringify(data)}`;
    fs.writeFileSync(SPARE_PARTS_CACHE_PATH, filledContent, "utf8");
    // console.log("Spare parts has been cached");
  } catch (error) {
    console.log(error.message);
    console.log("Spare parts cannot be cached!");
  }
  return data;
}
