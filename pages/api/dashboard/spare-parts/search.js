import { data } from '../../../../cache/spareparts';
/*
 *  endpoint: http://localhost:3000/api/dashboard/spare-parts/search?title=uszczelka&tags=pralnice,pralnicowirówki
 */

function searchSpareParts(req, res) {
  const { title, tags, page } = req.query;
  const LIMIT = 10;
  const queryTitle = title.trim().toLowerCase();
  const queryTags = tags
    ? tags.split(',').map((tag) => tag.trim().toLowerCase())
    : [];
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
  } else {
    filteredData = data.slice(LIMIT * (page - 1), LIMIT * page);
  }
  return res.status(200).json(filteredData);
}
export default searchSpareParts;
