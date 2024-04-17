const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Load environment variables from .env file
dotenv.config();

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust the origin to match your development URL
  methods: 'POST',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Send email endpoint
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: 'connect@akirawebsolutions.com',
      subject: 'Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions, (err => {
      if(err){
        console.log("there was an error:", err)
      }
      else{
        console("Email has Sent!")
      }
    }));

    res.status(200).json({ message: 'Email sent successfully!' });
  }  catch (error) {
    console.error(error);
  
    // Check if the error is related to authentication (e.g., incorrect credentials)
    if (error.message.includes('authentication failed')) {
      res.status(401).json({ message: 'Authentication failed. Check your email credentials.' });
    } else {
      res.status(500).json({ message: 'Failed to send email.' });
    }
  }
  
});
//
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});