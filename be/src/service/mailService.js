import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

// Config Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "capybuk@gmail.com",
    pass: "kqeiimopnbdqrlwj",
  }
});

const sendResetPasswordEmail = async (email, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const resetLink = `http://localhost:5173/forget-password/reset-password/${token}`;

  const mailOptions = {
    from: "capybuk@gmail.com",
    to: email,
    subject: 'Reset Your Password',
    html:`
    <div>
      <h3>Password Reset Request</h3>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
    </div>
  `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Reset password email sent: ' + resetLink);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export { sendResetPasswordEmail };
