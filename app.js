const express = require("express");
const server = express();

server.use(express.static("public"));

const b_res = require("./server/bar/restaurant");
server.use(b_res);

const w_trail = require("./server/walkingtrail/walkingtrail_path");
server.use("/walkingtrail", w_trail);

server.listen(3000, () => {
  console.log("listenign at http://localhost:3000");
});
