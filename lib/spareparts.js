import fs from 'fs';
import path from 'path';
import { spare_parts as data } from '../constants/spare_parts';

async function fetchSpareParts() {
  // for example: fetch data from database
  return data;
}
const SPARE_PARTS_CACHE_PATH = path.resolve(
  path.join(process.cwd(), 'cache', 'spareparts.js')
);

export async function getSpareParts() {
  //   console.log(SPARE_PARTS_CACHE_PATH);
  const data = await fetchSpareParts();
  //   let cachedData;
  //   try {
  //     cachedData = JSON.parse(fs.readFileSync(SPARE_PARTS_CACHE_PATH, 'utf8'));
  //     // console.log(cachedData);
  //   } catch (error) {
  //     console.log(error.message);
  //     console.log('Spare parts cache not initialized');
  //   }
  //   if (!cachedData) {
  try {
    // const data = await fetchSpareParts();
    const filledContent = `export const data = ${JSON.stringify(data)}`;
    fs.writeFileSync(SPARE_PARTS_CACHE_PATH, filledContent, 'utf8');
    // cachedData = data;
    console.log('Spare parts has been cached');
  } catch (error) {
    console.log(error.message);
    console.log('Spare parts cannot be cached!');
  }
  return data;
}
