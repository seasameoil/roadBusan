const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const w_trail = express.Router();

w_trail.get('/Gangseo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/gangseo-gu.html'))
  })
  w_trail.get('/Saha-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/saha-gu.html'))
  })
  w_trail.get('/Seo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/seo-gu.html'))
  })
  w_trail.get('/Jung-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/jung-gu.html'))
  })
  w_trail.get('/Dong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/dong-gu.html'))
  })
  w_trail.get('/Nam-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/nam-gu.html'))
  })
  w_trail.get('/Yeongdo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/yeongdo-gu.html'))
  })
  w_trail.get('/Busanjin-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/busanjin-gu.html'))
  })
  w_trail.get('/Yeonje-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/yeonje-gu.html'))
  })
  w_trail.get('/Sasang-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/sasang-gu.html'))
  })
  w_trail.get('/Haeundae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/haeundae-gu.html'))
  })
  w_trail.get('/Dongnae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/dongnae-gu.html'))
  })
  w_trail.get('/Buk-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/buk-gu.html'))
  })
  w_trail.get('/Geumjeong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/geumjeong-gu.html'))
  })
  w_trail.get('/Gijang-gun', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/gijang-gun.html'))
  })
  w_trail.get('/Suyeong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/suyoeng-gu.html'))
  })

module.exports = w_trail;