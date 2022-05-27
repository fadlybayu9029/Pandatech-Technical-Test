require("dotenv").config();
const express = require("express");
const app = express();
const { SpotifyControllers } = require("./Controllers");

const port = process.env.PORT || 3000

app.use(express.json());

app.post('/getToken', SpotifyControllers.createToken)
app.get('/tracks/:title', SpotifyControllers.seeSong)


module.exports = app;