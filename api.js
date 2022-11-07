const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const multer = require('multer')
const fs = require('fs')
require("dotenv").config();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(bodyParser.json())

app.use(cors())
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.listen(5000, () => {
  console.log('server start on port 5000')
});

app.post("/users", (req, res) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sales.pushpmasale010@gmail.com',
      pass: 'hgtekujqsoyxcuos'
    }
  });

  var mailOptions = {
    from: 'sales.pushpmasale010@gmail.com',
    to: 'chinnijain168@gmail.com',
    subject: 'Contact Message - Pushp Brand',
    email: req.body.email,
    name: req.body.username,
    message: req.body.message,
    html: `
        <div style="padding:10px;border-style: ridge">
        <p>Greeting sir,</p>
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.username}</li>
            <li>Email: ${req.body.email}</li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `
  };
  if (req.body.email.length !== 0 & req.body.message.length !== 0 & req.body.username.length !== 0) {

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ status: true, respMesg: 'Mail not sent try again!' })
      }
      else {
        res.json({ status: true, respMesg: 'Mail Sent Successfully' })
      }

    });
  }
  else {
    res.json({ status: false, respMesg: "Please fill the  field carefully" })
  }
});

app.post("/send_form", (req, res) => {
 
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sales.pushpmasale010@gmail.com',
      pass: 'hgtekujqsoyxcuos'
    }
  });

  var mailOptions = {
    from: 'sales.pushpmasale010@gmail.com',
    to: 'chinnijain168@gmail.com',
    subject: 'Career Message - Pushp Brand',
    email: req.body.email,
    fname: req.body.firstname,
    lname: req.body.lastname,
    message: req.body.message,
    mobile: req.body.mobile,
    department: req.body.department,
    attachments: [
      {
        filename : req.files[0],
        // content:"application/pdf"
        

      },
    ],
    html: `
      <div style="padding:10px;border-style: ridge">
      <p>Greeting sir,</p>
      <p>You have a new career request.</p>
      <h3>Career Form Details</h3>
      <ul>
          <li>Name: ${req.body.firstname}  ${req.body.lastname}</li>
          <li>Mobile No: ${req.body.mobile}</li>
          <li>Email: ${req.body.email}</li>
          <li>Field: ${req.body.department}</li>
          <li>Message: ${req.body.message}</li>
      </ul>
      `
  };

  if (req.body.firstname.length !== 0 & req.body.lastname.length !== 0 & req.body.email.length !== 0 & req.body.department.length !== 0 & req.body.message.length !== 0) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ status: true, respMesg: 'Not sent try again!' })
      }
      else {
        res.json({ status: true, respMesg: 'Sent Successfully' })
      }

    });
  }
  else {
    res.json({ status: false, respMesg: "Please fill the  field carefully" })
  }
});

app.post("/user_query", (req, res) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sales.pushpmasale010@gmail.com',
      pass: 'hgtekujqsoyxcuos'
    }
  });

  var mailOptions = {
    from: 'sales.pushpmasale010@gmail.com',
    to: 'chinnijain168@gmail.com',
    subject: 'Query - Pushp Brand',
    query: req.body.query,

    html: `
        <div style="padding:10px;border-style: ridge">
        <p>Greeting sir,</p>
        <p>You have receive a user query</p>
       
            <h4>Query: ${req.body.query}</h4>
      
        `
  };
  if (req.body.query.length !== 0) {

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ status: true, respMesg: 'Query not sent' })
        console.log("Query not sent");
    
      }
      else {
        res.json({ status: true, respMesg: 'Query Sent Successfully' })
        console.log("Query Sent Successfully");
    
      }

    });
  }
  else {
    res.json({ status: false, respMesg: "Empty Query" })
    console.log("Empty Query");

   
  }
});