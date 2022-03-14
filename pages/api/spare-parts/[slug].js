import { spare_parts } from "../../../constants/spare_parts";

//GET /api/spare-parts/1
function requestHandler(req, res) {
  const { slug } = req.query;

  const sparePart = spare_parts.find((item) => item.partID === slug);
  return res.status(200).json(sparePart);
}
export default requestHandler;
