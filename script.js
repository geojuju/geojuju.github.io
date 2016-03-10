require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "dojo/domReady!"
  ],
  function(
    FeatureLayer,
    Map
    
  ) {
  		var featureLayer = new FeatureLayer("https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer");

    map.addLayer(featureLayer);
	});
  		var map = new Map("mapDiv", {
    		center: [-97.7115, 30.2705],
    		zoom: 12,
    		basemap: "gray-vector"
  		});
  	
