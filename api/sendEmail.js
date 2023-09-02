import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { name, email, message } = req.body;

    const content = {
      to: "joricha01@gmail.com",
      from: "joricha01@gmail.com",
      subject: `Message du portfolio de ${name}`,
      text: message,
      html: `<h1>Nouveau message de ${name}</h1>
         <p><strong>Email :</strong> ${email}</p>
         <h2>Message :</h2>
         <p>${message}</p>`,
    };

    try {
      await sgMail.send(content);
      res.status(200).json({ message: "Message envoyé avec succès" });
    } catch (error) {
      console.log("ERROR", error);
      res.status(400).send("Erreur lors de l'envoi du message");
    }
  } else {
    res.status(400).send("Méthode non prise en charge");
  }
}
