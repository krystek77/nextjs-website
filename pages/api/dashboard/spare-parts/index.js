import { spare_parts } from '../../../../constants/spare_parts';
/*
 *  path: http://localhost:3000/api/dashboard/spare-parts
 */

//GET /api/spareParts
function requestHandler(req, res) {
  console.log('FROM API routes - /api/spare-parts');
  return res.status(200).json(spare_parts);
}

export default requestHandler;
