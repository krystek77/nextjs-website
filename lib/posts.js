import path from 'path';
import fs, { readdirSync } from 'fs';
import markdown from 'gray-matter';
import html from 'remark-html';
import { remark } from 'remark';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

export function getPosts() {
  const fileNames = readdirSync(POSTS_DIRECTORY, { encoding: 'utf8' });
  const result = fileNames.map((item) => {
    const id = item.replace(/.md$/, '');
    const pathToFile = path.join(POSTS_DIRECTORY, item);
    const contentFile = fs.readFileSync(pathToFile, { encoding: 'utf8' });
    const markDown = markdown(contentFile);
    return {
      id,
      ...markDown.data,
    };
  });
  return result.sort(({ date: b }, { date: a }) => {
    return new Date(...a.split('-')) - new Date(...b.split('-'));
  });
}

export async function getPost(postID) {
  const pathToFile = path.join(POSTS_DIRECTORY, `${postID}.md`);
  const fileName = fs.readFileSync(pathToFile, { encoding: 'utf8' });
  const id = fileName.replace(/.md$/, '');
  const markDown = markdown(fileName);
  const processedContent = await remark().use(html).process(markDown.content);
  const contentHTML = processedContent.toString();
  return {
    id,
    ...markDown.data,
    content: contentHTML,
  };
}
