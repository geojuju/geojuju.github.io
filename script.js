	var map;
	require(["esri/map", "dojo/domReady!"], function(Map) {
  		map = new Map("mapDiv", {
    		center: [-97.7115, 30.2705],
    		zoom: 12,
    		basemap: "gray-vector"
  		});
	});
	var mapid="fe9ef6970821469284403bfc72209e4b"
	var mapDeferred = esri.arcgis.utils.createMap(mapid, "map", {
  		mapOptions: {
    		slider: true,
    		nav:false
  }
});

