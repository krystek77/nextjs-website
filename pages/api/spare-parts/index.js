import { spare_parts } from '../../../constants/spare_parts';

//GET /api/spareParts
function requestHandler(req, res) {
  return res.status(200).json(spare_parts);
}

export default requestHandler;
