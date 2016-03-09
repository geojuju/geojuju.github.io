      require([
        "dojo/parser",
        "dojo/ready",
        "dijit/layout/BorderContainer",
        "dijit/layout/ContentPane",
        "dojo/dom",
        "esri/map", 
        "esri/urlUtils",
        "esri/arcgis/utils",
        "esri/dijit/Legend",
        "esri/dijit/Scalebar",
        "dojo/domReady!"
      ], function(
        parser,
        ready,
        BorderContainer,
        ContentPane,
        dom,
        Map,
        urlUtils,
        arcgisUtils,
        Legend,
        Scalebar
      ) {
        ready(function(){

        parser.parse();

//if accessing webmap from a portal outside of ArcGIS Online, uncomment and replace path with portal URL
       //arcgisUtils.arcgisUrl = "https://pathto/portal/sharing/content/items";
        arcgisUtils.createMap("f254021669784a4484f0d341c14d672e","map").then(function(response){
          //update the app 
          dom.byId("title").innerHTML = response.itemInfo.item.title;
          dom.byId("subtitle").innerHTML = response.itemInfo.item.snippet;

          var map = response.map;



          //add the scalebar 
          var scalebar = new Scalebar({
            map: map,
            scalebarUnit: "english"
          });

          //add the legend. Note that we use the utility method getLegendLayers to get 
          //the layers to display in the legend from the createMap response.
          var legendLayers = arcgisUtils.getLegendLayers(response); 
          var legendDijit = new Legend({
            map: map,
            layerInfos: legendLayers
          },"legend");
          legendDijit.startup();


        });


        });

      });
