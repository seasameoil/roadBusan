const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const path_activity = express.Router();

path_activity.get('/Gangseo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/activity/html/activity/gangseo-gu-activity.html'))
  })
  path_activity.get('/Saha-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/saha-gu-activity.html'))
  })
  path_activity.get('/Seo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/seo-gu-activity.html'))
  })
  path_activity.get('/Jung-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/jung-gu-activity.html'))
  })
  path_activity.get('/Dong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/dong-gu-activity.html'))
  })
  path_activity.get('/Nam-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/nam-gu-activity.html'))
  })
  path_activity.get('/Yeongdo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/yeongdo-gu-activity.html'))
  })
  path_activity.get('/Busanjin-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/busanjin-gu-activity.html'))
  })
  path_activity.get('/Yeonje-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/yeonje-gu-activity.html'))
  })
  path_activity.get('/Sasang-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/sasang-gu-activity.html'))
  })
  path_activity.get('/Haeundae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/haeundae-gu-activity.html'))
  })
  path_activity.get('/Dongnae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/dongnae-gu-activity.html'))
  })
  path_activity.get('/Buk-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/buk-gu-activity.html'))
  })
  path_activity.get('/Geumjeong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/geumjeong-gu-activity.html'))
  })
  path_activity.get('/Gijang-gun', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/gijang-gun-activity.html'))
  })
  path_activity.get('/Suyeong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/activity/suyoeng-gu-activity.html'))
  })

module.exports = path_activity;