const express = require("express");
const server = express();

server.use(express.static("public"));

const b_res = require("./server/bar/restaurant");
server.use(b_res);
const b_activity = require("./server/bar/activity");
server.use(b_activity);

const w_trail = require("./server/walkingtrail/walkingtrail_path");
server.use("/walkingtrail", w_trail);
const path_activity = require("./server/activity/activity_path");
server.use("/activity",path_activity);
const path_restaurant = require("./server/restaurant/restaurant_path");
server.use("/restaurant",path_restaurant);

server.listen(3000, () => {
  console.log("listenign at http://localhost:3000");
});
