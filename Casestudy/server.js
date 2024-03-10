const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

/*mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
const reservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  fromLocation: String,
  toLocation: String,
  dateOfJourney: String,
  age: Number,
  gender: String,
});

const Reservation = mongoose.model('Reservation', reservationSchema);*/

/*const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
 
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
  // Once connected, you can start querying and displaying data from MongoDB
  Reservation.find({})
    .then(reservations => {
      console.log('Reservations:', reservations);
    })
    .catch(err => {
      console.error('Error fetching reservation:', err);
    });
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
 
// MongoDB Schema
const reservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  fromLocation: String,
  toLocation: String,
  dateOfJourney: String,
  age: Number,
  gender: String,
});
 
const Reservation = mongoose.model('Reservation', reservationSchema);
*/

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Muskan';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected');
    Retail.find({})
      .then(retails => {
        console.log('Retail:', retails);
      })
      .catch(err => {
        console.error('Error fetching reservations:', err);
      });
    });

    
const retailSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  username: String,
  password: String,
  confirmpassword: String,
  dateofbirth: Date,
});

const Retail = mongoose.model('Retail', retailSchema);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

/*app.post('/', (req, res) => {
  const { firstName, lastName, email, phoneNumber, username, password, confirmpassword, dateofbirth} = req.body;

  const newRetail = new Retail({
    firstName,
    lastName,
    email,
    phoneNumber,
    username,
    password,
    confirmpassword,
    dateofbirth,
  
  });

  newRetail.save()
    .then((savedRetail) => {
      console.log('Reservation saved:', savedRetail);
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Retail Shoping Website </title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: url('https://media.smallbiztrends.com/2013/10/Shopping-1.png');
                background-size: cover;
                display: flex; 
                align-items: center;
                justify-content: center;
                height: 100vh;
              }

              .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }

              h1 {
                color: #1e88e5;
              }

              .info-box {
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 15px;
                margin-top: 20px;
              }

              .info-box p {
                margin: 10px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Thank you for providing your information</h1>
              <div class="info-box">
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>UserName:</strong> ${username}</p>
                <p><strong>Date Of Birth:</strong> ${dateofbirth}</p>
               
              </div>
            </div>
          </body>
        </html>
      `);
    })
    .catch((error) => {
      console.error('Error saving register:', error);
      res.status(500).send('Internal Server Error');
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server run at port: ${PORT}`);
}); */

app.post('/', (req, res) => {
  const { firstName, lastName, email, phoneNumber, username, password, confirmpassword, dateofbirth} = req.body;

  const newRetail = new Retail({
    firstName,
    lastName,
    email,
    phoneNumber,
    username,
    password,
    confirmpassword,
    dateofbirth,
  });

  newRetail.save()
    .then((savedRetail) => {
      console.log('Reservation saved:', savedRetail);
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Retail Shopping Website</title>
            <link rel="stylesheet"
            href=
            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity=
            "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossorigin="anonymous"> 
  
            <style>
              body {
                margin: 0;
                padding: 0;
                background: url('https://media.smallbiztrends.com/2013/10/Shopping-1.png');
                background-size: cover;
                display: flex; 
                align-items: center;
                justify-content: center;
                height: 100vh;
              }

              .container {
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }

              h1 {
                color: #1e88e5;
              }

              .info-box {
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 15px;
                margin-top: 20px;
              }

              .info-box p {
                margin: 10px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Thank you for providing your information</h1>
              <div class="info-box">
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>UserName:</strong> ${username}</p>
                <p><strong>Date Of Birth:</strong> ${dateofbirth}</p>
                <div class="button-container">
                  <form action="/success" method="get">
                    <button type="submit" id="confirmButton" class="btn btn-success">Confirm</button>
                    </form>
                  <form action="/" method="get">
                    <button type="submit" id="resetButton" class="btn btn-danger" 
                    >Reset</button>
                    </form>
                  
                </div>
                
              </div>
            </div>
          </body>
        </html>
      `);
    })
    .catch((error) => {
      console.error('Error saving register:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Handle success route
app.get('/success', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Successful Submission</title>
        <style>
        .main{
          padding:20px;
          font-family: 'Helvetica', serif;
          box-shadow: 5px 5px 7px 5px #888888;
          width: 50%; /* change this value to adjust the form size */
            margin: 0 auto;
            padding: 20px;
            background-color: rgb(176, 176, 176);
            box-sizing: border-box;
          }
          .box {
            width: 100%;
            padding: 10px;
            margin-bottom: 5px;
            box-sizing: border-box;
          }
        
          #submitDetails {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
          }
        .main h1{
          font-size: 40px;
          text-align:center;
          font-family: 'Helvetica', serif;
          
        }
        input{
          font-family: 'Helvetica', serif;
          width: 100%;
          font-size: 20px;
          padding: 12px 20px;
          margin: 8px 0;
          border: none;
          border-bottom: 2px solid #767474;
        }
        input[type=submit] {
          font-family: 'Helvetica', serif;
          width: 100%;
          background-color: #767474;
          border: none;
          color: white;
          padding: 16px 32px;
          margin: 4px 2px;
          border-radius: 10px;
        }
        </style>

        <link rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
  crossorigin="anonymous">
      </head>
      <body style="background-color: lavender;">
      
    <br>
    <br>
    <br>
    <div class="container" style="position:relative; top:300px;" >
      <div class="row">
      <div class="col-md-3">
      </div>
      <div class="col-md-6 main" style="background-color: rgb(78, 241, 63);">
        <h1> Register Successful</h1>
      </div>
      <div class="col-md-3">
      </div>
      </div>
    </div>
  </body>
    </html>
  `);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server run at port: ${PORT}`);
});
