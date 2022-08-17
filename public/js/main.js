const map = document.querySelector("#mapdiv");

setTimeout(() => {
  map.classList.remove("no");
}, 1200);

$("#logo").animate(
  {
    width: "10vw",
    height: "7vh",
    marginLeft: "3vw",
    marginTop: "-8vh",
  },
  1500
);

$(function () {
  $("#map").rwdImageMaps();
  $("#map").maphilight({
    strokeColor: "00b050",
    strokeWidth: 4,
    strokeOpacity: 0.4,
    fillColor: "00b050",
    fillOpacity: 0.4,
    singleSelect: true,
  });
});

/* <script>
      type="text/javascript"
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=	b11350e62dc8426b36de65e17fc7b3b5"
    </script>
    <script>
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(35.17944, 129.07556),
        level: 3,
      };
      var map = new kakao.maps.Map(container, options);
    </script> 카카오맵 API 주석처리 */
