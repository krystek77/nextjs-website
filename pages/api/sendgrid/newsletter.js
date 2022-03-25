import client from "@sendgrid/client";
client.setApiKey(process.env.SEND_GRID_API_KEY);

export default async function newsletter(req, res) {
  const { body: email } = req;
  const data = {
    contacts: [
      {
        email: email,
      },
    ],
  };
  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
  };

  try {
    const response = await client.request(request);
    return res.status(201).json({ message: `Dziękujemy za subskrypcję ${response[1].job_id}` });
  } catch (error) {
    if (error.code) {
      if (error.code === 403) {
        return res.status(403).json({
          message: "Odmowa :(",
        });
      }
      if (error.code === 400) {
        return res.status(400).json({ message: "Niepoprawne żądanie" });
      }
      return res.status(401).json({
        message: `Subskrypcja nie powiodło się`,
      });
    }
  }
}
