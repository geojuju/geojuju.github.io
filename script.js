	var map;
	require(["esri/map", "dojo/domReady!", "esri/dijit/HomeButton",], function(Map, HomeButton) {
  		map = new Map("mapDiv", {
    		center: [-97.7115, 30.2705],
    		zoom: 12,
    		basemap: "gray-vector"
  		});
  		      var home = new HomeButton({
        map: map
      }, "HomeButton");
      home.startup();
	});

