const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "regionalnewsapp2025@gmail.com",
    pass: "mgbiegefpfbosrsk",
  },
});

exports.sendMail = async (receiverEmail, subject, body) => {
  await transporter.sendMail({
    from: "regionalnewsapp2025",
    to: receiverEmail,
    subject: subject,
    html: body,
  });
};
