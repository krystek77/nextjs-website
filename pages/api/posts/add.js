import fs from 'fs';
import path from 'path';
/*
 *  path: http://localhost:3000/api/posts/add
 */

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

async function requestHandler(req, res) {
  const { body } = req;
  // const fileName = body.fileName.trim().toLowerCase().replace(/\s/g, '-');
  const fileName = body.fileName
    .split(' ')
    .map((partFileName) => {
      const formattedPartFileName = partFileName
        .toLowerCase()
        .replace(/ó/g, 'o')
        .replace(/ę/g, 'e')
        .replace(/ó/g, 'o')
        .replace(/ą/g, 'a')
        .replace(/ć/g, 'c')
        .replace(/ś/g, 's')
        .replace(/ń/g, 'n')
        .replace(/ż/g, 'z')
        .replace(/ź/g, 'z')
        .replace(/\s+/g, '');
      return formattedPartFileName;
    })
    .filter((item) => item !== '')
    .join('-');
  const fullPath = path.join(POSTS_DIRECTORY, `${fileName}.md`);

  const fileContent = `---\n
  title: '${body.data.title}'
  date: '${body.data.date}'
  info: '${body.data.info}'
  image: '${body.data.image}'
  tags: '${body.data.tags}'\n---\n
  ${body.content}
  `;
  try {
    fs.writeFileSync(fullPath, fileContent, {
      encoding: 'utf8',
    });
  } catch (error) {
    return res.status(401).json({
      message: `Dodanie wiadomości nie powiodło się. ERROR: ${error.message}`,
    });
  }

  return res.status(201).json({ message: 'Wiadomość dodana pomyślnie' });
}
export default requestHandler;
