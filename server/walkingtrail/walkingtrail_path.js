const express = require("express");
const app = express();
app.use(express.static("public"));
const w_trail = express.Router();

w_trail.get("/Gangseo-gu", (req, res) => {
  res.send("강서구 산책로 페이지 입니다.");
});
w_trail.get("/Saha-gu", (req, res) => {
  res.send("사하구 산책로 페이지 입니다.");
});
w_trail.get("/Seo-gu", (req, res) => {
  res.sendfile("/public/test.html");
});
w_trail.get("/Jung-gu", (req, res) => {
  res.send(
    '<img src="/image/testimage.png" width="100%" height="auto" > <a href="/">home</a>'
  );
});
w_trail.get("/Dong-gu", (req, res) => {
  res.sendFile("/public/test.html");
});
w_trail.get("/Nam-gu", (req, res) => {
  res.send("남구 산책로 페이지 입니다.");
});
w_trail.get("/Yeongdo-gu", (req, res) => {
  res.send("영도구 산책로 페이지 입니다.");
});
w_trail.get("/Busanjin-gu", (req, res) => {
  res.send("부산진구 산책로 페이지 입니다.");
});
w_trail.get("/Yeonje-gu", (req, res) => {
  res.send("연제구 산책로 페이지 입니다.");
});
w_trail.get("/Sasang-gu", (req, res) => {
  res.send("사상구 산책로 페이지 입니다.");
});
w_trail.get("/Haeundae-gu", (req, res) => {
  res.send("해운대구 산책로 페이지 입니다.");
});
w_trail.get("/Dongnae-gu", (req, res) => {
  res.send("동래구 산책로 페이지 입니다.");
});
w_trail.get("/Buk-gu", (req, res) => {
  res.send("북구 산책로 페이지 입니다.");
});
w_trail.get("/Geumjeong-gu", (req, res) => {
  res.send("금정구 산책로 페이지 입니다.");
});
w_trail.get("/Gijang-gun", (req, res) => {
  res.send("기장군 산책로 페이지 입니다.");
});
w_trail.get("/Suyeong-gu", (req, res) => {
  res.send("수영구 산책로 페이지 입니다.");
});

module.exports = w_trail;
