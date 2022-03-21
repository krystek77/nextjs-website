import path from "path";
import fs from "fs";
/*
 *  path: http://localhost:3000/api/posts/add
 */

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

async function requestHandler(req, res) {
  /*
   * {   fileName:"",
   *     data:{ title:"", info:"", date:"", image:"", tags:""},
   *     content:""
   * }
   */
  const { body } = req;
  //save to fileName.md in posts folder
  const fileName = body.fileName;
  const fullPath = path.join(POSTS_DIRECTORY, `${fileName}.md`);
  
  fs.writeFileSync(fullPath, JSON.stringify("HELLO WORLD"), { encoding: "utf8" });

  return res.status(201).json(body);
}
export default requestHandler;
