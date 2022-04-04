import { spare_parts } from '../../../../constants/spare_parts';

/*
 *  path: http://localhost:3000/api/dashboard/spare-parts/1
 */

function requestHandler(req, res) {
  const { slug } = req.query;
  console.log('FROM API route - /api/spare-parts/[slug]');
  const sparePart = spare_parts.find((item) => item.partID === slug);
  return res.status(200).json(sparePart);
}
export default requestHandler;
