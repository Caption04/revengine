const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/submit-form', async (req, res) => {
  const { name, email, phone, service } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kgkatunga04@gmail.com',
      pass: 'rscrpuozqpvtzxlt' 
    }
  });

  const adminMail = {
    from: 'kgkatunga04@gmail.com',
    to: 'kgkatunga04@gmail.com',  // your email
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`
  };

  try {
    await transporter.sendMail(adminMail);
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
