//ACTIONS1 DE LA SIDEBAR
        
		var action1;
		var layerp;
		var featureGroup = L.featureGroup();
		var idlo = [];
	
		
        function create(){
		bb = document.getElementById("proprio");
		action1 = bb.textContent;
		$('#proprioactif').html(action1);
		
		var data = cadd;
	    var cadproprio = new L.GeoJSON(data, {
		style: style3,
		filter: function(feature, layer) {
        return feature.properties.NM_PROPR == action1;
            }
			
			})
			var rrr = cadproprio._leaflet_id
			idlo.push(rrr);
			return cadproprio;
			}
		

		function style3(feature) {
        return {
        fillColor: 'yellow',
        fillOpacity: 0.3,
		weight: 0
        };
        }
        
		function rr2() {

        if (map.hasLayer(featureGroup)) {
        featureGroup.clearLayers();
		map.removeLayer(featureGroup);
		//delete testt[0]
            }
            else{
			     
			    var layerp = create();
				featureGroup.addLayer(layerp);
				featureGroup.addTo(map);
				console.log(idlo[0]);
				layer1 = idlo[0]
				document.getElementById("action1ht").className = "action1htc2";
				featureGroup.bringToBack();
            } ;
		};
		
		document.getElementById("box16").addEventListener('click', rr2);
		
		function bb1() {
        document.getElementById("action1ht").className = "action1htc";
		if (map.hasLayer(featureGroup)) {
        featureGroup.clearLayers();
		map.removeLayer(featureGroup);
		}
        };
		document.getElementById("close2").addEventListener("click", bb1);
	   
	   
	   
