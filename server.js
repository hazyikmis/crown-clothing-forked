const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

/*
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
*/

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //incoming requests & outgoing responses converted to json
app.use(bodyParser.urlencoded({ extended: true })); //all urls made sure valid, not using ambiguous characters

app.use(cors()); //allows access to server from same server/different port

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server is running on port: " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
