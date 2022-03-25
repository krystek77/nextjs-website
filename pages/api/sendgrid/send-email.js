import sendGrid from '@sendgrid/mail';
sendGrid.setApiKey(process.env.SEND_GRID_API_KEY);

/**
 * endpoint: http://localhost:3000/api/sendgrid/send-email
 */

export default async function sendEmail(req, res) {
  const { body: data } = req;
  const HTML = `<html lang="pl">
  <head>
    <meta charset="utf-8"/>
    <title>${data.reason}</title>
  </head>
  <body>
  <header>
      <h1 style="color:#001a23;margin:0px; font-size:20px;text-transform:uppercase;"><span style="font-weight:normal;font-size:14px;">Dotyczy:</span> ${data.reason}</h1>
      <p style="color:#001a23;font-size:20px;margin:0px;padding:0px;text-transform:uppercase;"><span style="font-weight:normal;font-size:14px;">Sektor:</span> <b>${data.market}</b></p>
  </header>
  <main">
    <h2 style="color:#001a23;">Dane nadawcy wiadomości</h2>
    <hr style="color:#001a23"/>
    <p style="margin:0px;"><span style="font-weight:400;">Imię: </span><b>${data.name}</b></p>
    <p style="margin:0px;"><span style="font-weight:400;">Nazwisko: </span><b>${data.lastName}</b></p>
    <p style="margin:0px;"><span style="font-weight:400;">Telefon kontaktowy: </span><b>${data.phone}</b></p>
    <p style="margin:0px;"><span style="font-weight:400;">Email: </span><a href="mailto:${data.email}"><b>${data.email}</b></a></p>
    <h2 style="color:#001a23;">Treść wiadomości</h2>
    <hr style="color:#001a23"/>
    <p style="font-size:18px;line=height:1.3;background-color:#f0fafa;margin:0px;font-weight:normal;">${data.message}</p>
    <hr style="color:#001a23"/>
    <p>Firma / instytucja: <b>${data.company}</b>, ${data.city}</p>
    <span>Z poważaniem, </span>
    <div><em>${data.name}</em><em> ${data.lastName}</em></div>
  </main>
  </body>
  </html>`;
  const TEXT = `Nowa wiadomość: ${data.reason}
  Dotyczy: ${data.reason}
  Sektor: ${data.market}
  Dane nadawcy wiadomości
  Imię: ${data.name}
  Nazwisko: ${data.lastName}
  Telefon kontaktowy: ${data.phone}
  Email: ${data.email}

  Treść wiadomości

  ${data.message}
  Firma / instytucja: ${data.company}, ${data.city}

  Z poważaniem,
  ${data.name} ${data.lastName}
`;

  const message = {
    to: 'k.wrona@pralma.pl',
    cc: {
      email: 'krystianwrona.kielce@gmail.com',
      name: 'Adresat kopii wiadomości',
    },
    bcc: {
      email: 'krystian.wrona77@gmail.com',
      name: 'Ukryty odbiorca kopii',
    },
    from: { email: 'k.wrona@pralma.pl', name: 'Ze strony PPUP Pralma' },
    subject: `TEMAT: ${data.reason}`,
    text: TEXT,
    html: HTML,
  };
  try {
    await sendGrid.send(message);
    return res.status(200).json({ message: 'Wiadomość wysłana pomyślnie' });
  } catch (error) {
    // console.log(error);
    if (error.code) {
      if (error.code === 403) {
        return res.status(403).json({
          message:
            'Wyslano już 100 maili tego dnia. Plan nie pozwala wysłać już dzisiaj wiadomości',
        });
      }
      if (error.code === 400) {
        return res.status(400).json({ message: 'Niepoprawne żądanie' });
      }
      return res.status(401).json({
        message: `Wysłanie wiadomości nie powiodło się`,
      });
    }
  }
}
