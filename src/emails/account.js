const sgmail = require("@sendgrid/mail");

sgmail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgmail.send({
    to: email,
    from: "gur79tub@gmail.com",
    subject: "Welcome to my hood",
    text: `Yoo ${name} feel free to say anything`
  });
};

const sendCancelationEmail = (email, name) => {
  sgmail.send({
    to: email,
    from: "gur79tub@gmail.com",
    subject: "we will miss you",
    text: `Goodbye ${name} `
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
