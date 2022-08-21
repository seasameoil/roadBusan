const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const path_restaurant = express.Router();

path_restaurant.get('/Gangseo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/restaurant/html/restaurant/gangseo-gu-restaurant.html'))
  })
  path_restaurant.get('/Saha-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/saha-gu-restaurant.html'))
  })
  path_restaurant.get('/Seo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/seo-gu-restaurant.html'))
  })
  path_restaurant.get('/Jung-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/jung-gu-restaurant.html'))
  })
  path_restaurant.get('/Dong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/dong-gu-restaurant.html'))
  })
  path_restaurant.get('/Nam-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/nam-gu-restaurant.html'))
  })
  path_restaurant.get('/Yeongdo-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/yeongdo-gu-restaurant.html'))
  })
  path_restaurant.get('/Busanjin-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/busanjin-gu-restaurant.html'))
  })
  path_restaurant.get('/Yeonje-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/yeonje-gu-restaurant.html'))
  })
  path_restaurant.get('/Sasang-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/sasang-gu-restaurant.html'))
  })
  path_restaurant.get('/Haeundae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/haeundae-gu-restaurant.html'))
  })
  path_restaurant.get('/Dongnae-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/dongnae-gu-restaurant.html'))
  })
  path_restaurant.get('/Buk-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/buk-gu-restaurant.html'))
  })
  path_restaurant.get('/Geumjeong-gun', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/geumjeong-gu-restaurant.html'))
  })
  path_restaurant.get('/Gijang-gun', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/gijang-gun-restaurant.html'))
  })
  path_restaurant.get('/Suyeong-gu', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/html/restaurant/suyoeng-gu-restaurant.html'))
  })

module.exports = path_restaurant;