const express = require("express");
//const { query, response } = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const b_res = express.Router();
/*
var client_id = "CLIENT_ID";
var client_secret = "CLIENT_SECRET";*/

dotenv.config();

b_res.use(cors());
/*b_res.use(express.json());
b_res.use(express.urlencoded({ extended: false }));
/*
b_res.post("/restaurant", async (req, res) => {
  query = req.body.query;

  var api_url =
    "https://openapi.naver.com/v1/datalab/search?query=" + encodeURI(query);
  var options = {
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Clinet-Secret": client_secret,
    },
  };

  await axios
    .get(api_url, options)
    .then((res) => {
      if (res.status === 200) {
        items = response.addTrailers.items;
        items.map((x) => {
          x.title = x.title.replace(/<b>/g, "");
          x.title = x.title.replace(/<\/b>/g, "");
          x.description = x.description.replace(/<b>/g, "");
          x.description = x.description.replace(/<\/b>/g, "");
        });

        res.render("result", { items: items });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("Hello");
});*/

b_res.get("/data", async (req, res) => {
  try {
    const request_body = {
      startDate: "2017-10-01",
      endDate: "2020-10-30",
      timeUnit: "month",
      keywordGroups: [
        { groupName: "치킨", keywords: ["BBQ", "BHC", "교촌치킨"] },
        { groupName: "떡볶이", keywords: ["엽기떡볶이", "신전떡볶이", "배떡"] },
      ],
    };
    const url = "https://openapi.naver.com/v1/datalab/search";
    const headers = {
      "Content-Type": "application/json",
      "X-Naver-Client-Id": process.env.CLIENT_ID,
      "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
    };
    const result = await axios.post(url, request_body, {
      headers: headers,
    });
    console.log(result.data);
    return res.json(result.data);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

module.exports = b_res;
