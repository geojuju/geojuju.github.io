	var map;
	require(["esri/map", "dojo/domReady!"], function(Map) {
  		map = new Map("mapDiv", {
    		center: [-97.7115, 30.2705],
    		zoom: 12,
    		basemap: "gray-vector"
  		});
