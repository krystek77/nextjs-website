
import sendGrid from "@sendgrid/mail";
sendGrid.setApiKey = process.env.SEND_GRID_API_KEY;
console.log(process.env.SEND_GRID_API_KEY);

/**
 * endpoint: http://localhost:3000/api/sendgrid/send-email
 */

const exampleData = {
  reason: "gwarancja",
  market: "stadniny koni, schroniska dla zwierząt",
  name: "Zdzisław Wrona",
  lastName: "Wro",
  phone: "+48413450561",
  city: "Kielce",
  company: "PPUP Pralma sp. z o.o.",
  email: "biuro@pralma.pl",
  message: "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
};

export default async function sendEmail(req, res) {
  //   const { body: data } = req;
  const message = {
    to: "k.wrona@pralma.pl",
    from: "k.wrona@pralma.pl",
    subject: exampleData.reason,
    text: `SOME TEXT from :${exampleData.email}`,
    html: `<h1></h1>Masz nową wiadomość od: ${exampleData.name}</h1>
    <p>${exampleData.message}</p>
    `,
  };
  try {
    await sendGrid.send(message);
    return res.status(200).json({ message: "Wiadomość wysłana pomyślnie" });
  } catch (error) {
    console.log(error);
  }
  return res.json(exampleData);
}
