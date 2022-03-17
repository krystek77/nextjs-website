import path from "path";
import fs, { readdirSync } from "fs";
import markdown from "gray-matter";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

export function getPosts() {
  const fileNames = readdirSync(POSTS_DIRECTORY, { encoding: "utf8" });
  const result = fileNames.map((item) => {
    const id = item.replace(/.md$/, "");
    const pathToFile = path.join(POSTS_DIRECTORY, item);
    const contentFile = fs.readFileSync(pathToFile, { encoding: "utf8" });
    const markDown = markdown(contentFile);
    return {
      id,
      ...markDown.data,
      content: markDown.content,
    };
  });
  return result;
}
