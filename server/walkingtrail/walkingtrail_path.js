const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const w_trail = express.Router();

w_trail.get('/Gangseo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/gangseo-gu-walkingtrail.html'))
  })
  w_trail.get('/Saha-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/saha-gu-walkingtrail.html'))
  })
  w_trail.get('/Seo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/seo-gu-walkingtrail.html'))
  })
  w_trail.get('/Jung-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/jung-gu-walkingtrail.html'))
  })
  w_trail.get('/Dong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/dong-gu-walkingtrail.html'))
  })
  w_trail.get('/Nam-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/nam-gu-walkingtrail.html'))
  })
  w_trail.get('/Yeongdo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/yeongdo-gu-walkingtrail.html'))
  })
  w_trail.get('/Busanjin-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/busanjin-gu-walkingtrail.html'))
  })
  w_trail.get('/Yeonje-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/yeonje-gu-walkingtrail.html'))
  })
  w_trail.get('/Sasang-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/sasang-gu-walkingtrail.html'))
  })
  w_trail.get('/Haeundae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/haeundae-gu-walkingtrail.html'))
  })
  w_trail.get('/Dongnae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/dongnae-gu-walkingtrail.html'))
  })
  w_trail.get('/Buk-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/buk-gu-walkingtrail.html'))
  })
  w_trail.get('/Geumjeong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/geumjeong-gu-walkingtrail.html'))
  })
  w_trail.get('/Gijang-gun', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/gijang-gun-walkingtrail.html'))
  })
  w_trail.get('/Suyeong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/walkingtrail/suyoeng-gu-walkingtrail.html'))
  })

module.exports = w_trail;