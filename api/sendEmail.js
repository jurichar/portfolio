const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, message } = req.body;

    const content = {
      to: "joricha01@gmail.com", // Ton email
      from: email, // Email de l'expéditeur
      subject: `Nouveau message de ${email}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await sgMail.send(content);
      res.status(200).send("Message envoyé avec succès");
    } catch (error) {
      console.log("ERROR", error);
      res.status(400).send("Erreur lors de l'envoi du message");
    }
  } else {
    res.status(400).send("Méthode non prise en charge");
  }
}
