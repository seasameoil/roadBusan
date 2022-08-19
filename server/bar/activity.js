const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const request = require("request");
const app = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.get("/activity", async (req, res) => {
  var url =
    "https://openapi.naver.com/v1/search/local.json?display=5&start=1&sort=random&query=" +
    encodeURI(req.query.query);
  //URL 확인
  //sconsole.log("==============================\n" + url);

  var options = {
    url: url,
    headers: {
      "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
    },
  };

  request.get(options, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      res.writeHead(200, { "Context-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

module.exports = app;
