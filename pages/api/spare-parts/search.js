import { data } from "../../../cache/spareparts";
/*
 *  path: http://localhost:3000/api/spare-parts/search?title=uszczelka&tags=pralnice,pralnicowirówki
 */

function searchSpareParts(req, res) {
  const { title, tags } = req.query;
  const queryTitle = title.trim().toLowerCase();
  const queryTags = tags ? tags.split(",").map((tag) => tag.trim().toLowerCase()) : [];
  let filteredData = data;

  if (queryTitle || queryTags.length) {
    if (queryTitle && queryTags.length) {
      filteredData = data.filter((item) => {
        return (
          item.title.toLowerCase().includes(queryTitle) &&
          item.tags.some((tag) => {
            return queryTags.some((queryTag) => tag.includes(queryTag));
          })
        );
      });
    } else if (queryTitle) {
      filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(queryTitle);
      });
    } else {
      filteredData = data.filter((item) => {
        return item.tags.some((tag) => {
          return queryTags.some((queryTag) => tag.includes(queryTag));
        });
      });
    }
  }
  return res.status(200).json(filteredData);
}
export default searchSpareParts;
