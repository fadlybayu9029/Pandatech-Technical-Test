const qs = require("qs");
const axios = require("axios");
const clientId = process.env.ClientId;
const clientSecret = process.env.ClientSecret;
const initToken = Buffer.from(`${clientId}:${clientSecret}`, "utf-8").toString(
  "base64"
);

class SpotifyControllers {
  static async createToken(req, res) {
    try {
      const baseUrl = "https://accounts.spotify.com/api/token";
      const stringifyQs = qs.stringify({ grant_type: "client_credentials" });
      const result = await axios.post(baseUrl, stringifyQs, {
        headers: {
          Authorization: 'Basic ' + initToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return result.data.access_token
    } catch (error) {
      console.log(error);
    }
  }

  static async seeSong(req, res) {
    try {
      const title = req.params.title
      if(!title) {
        res.status(404).json({
          massage: `please write the title`
        })
      }
      const access_token = await SpotifyControllers.createToken()
      const keyToken = `Bearer ${access_token}`
      const url = `https://api.spotify.com/v1/search?q=${title}&type=track`
      const result = await axios.get(url, {
        headers: {
          Authorization: keyToken
        }
      })
      res.status(200).json(result.data)
    } catch (error) {
      res.status(500).json({
        massage: 'Internal Error'
      })
    }
  }
}

module.exports = {
  SpotifyControllers
}
