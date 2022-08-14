const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const request = require("request");
const app = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.get("/data", async (req, res) => {
  //파라미터 확인
  /*const { query } = req.body;
  console.log(req.body); */

  var url =
    "https://openapi.naver.com/v1/search/blog?display=3&start=1&sort=sim&query=" +
    encodeURI(req.query.query);
  //URL 확인
  //console.log("==============================\n" + url);

  var options = {
    url: url,
    headers: {
      "X-Naver-Client-Id": process.env.CLIENT_ID,
      "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
    },
  };

  //request가 현재 deprecated 되었지만 axios 사용방법을 잘몰라 request 사용하기로 결정
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
