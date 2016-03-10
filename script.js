require([
        "esri/map",
        "esri/layers/FeatureLayer",
        "dojo/domReady!"
    ],
    function(
        Map,
        FeatureLayer
    ) {
        map = new Map("map", {
            basemap: "gray",
            center: [-97.7410, 30.2652],
            zoom: 13
        });
        var featureLayer = new FeatureLayer("https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer");

        map.addLayer(featureLayer);
    });
