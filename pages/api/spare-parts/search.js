import { data } from '../../../cache/spareparts';

// - path: http://localhost:3000/api/spare-parts/search?title=uszczelka&tags=''

function searchSpareParts(req, res) {
  console.log(req.query);
  return res.status(200).json(data);
}
export default searchSpareParts;
