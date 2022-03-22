import path from "path";
import fs, { readdirSync } from "fs";
import markdown from "gray-matter";
import html from "remark-html";
import { remark } from "remark";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

export function getPosts() {
  const fileNames = readdirSync(POSTS_DIRECTORY, { encoding: "utf8" });
  const result = fileNames.map((item) => {
    const id = item.replace(/.md$/, "");
    const pathToFile = path.join(POSTS_DIRECTORY, item);
    const contentFile = fs.readFileSync(pathToFile, { encoding: "utf8" });
    const markDown = markdown(contentFile);
    const tags = markDown.data.tags
      .toLowerCase()
      .split(",")
      .filter((tag) => tag !== "," && tag !== "")
      .map((tag) => tag.trim());
    return {
      id,
      ...markDown.data,
      tags,
    };
  });
  return result.sort(({ date: b }, { date: a }) => {
    return new Date(...a.split("-")) - new Date(...b.split("-"));
  });
}

export async function getPost(postID) {
  const pathToFile = path.join(POSTS_DIRECTORY, `${postID}.md`);
  const fileName = fs.readFileSync(pathToFile, { encoding: "utf8" });
  const id = fileName.replace(/.md$/, "");
  const markDown = markdown(fileName);
  const tags = markDown.data.tags
    .toLowerCase()
    .split(",")
    .filter((tag) => tag !== "," && tag !== "")
    .map((tag) => tag.trim());

  const processedContent = await remark().use(html).process(markDown.content);
  const contentHTML = processedContent.toString();
  return {
    id,
    ...markDown.data,
    tags,
    content: contentHTML,
  };
}
