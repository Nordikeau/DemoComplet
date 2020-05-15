 //WMS ADRESSE QUÉBEC
		
		// LOCAL
		var aq1 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Route locale [150K - 25K]',
        transparent: true,
        format: 'image/png'
        })
		var aq2 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Route locale [25K - 10K]',
        transparent: true,
        format: 'image/png'
        })
		var aq3 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Route locale [10K - 1]',
        transparent: true,
        format: 'image/png'
        })
		
		// BRETELLE
		var aq4 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Bretelle [3K - 1]',
        transparent: true,
        format: 'image/png'
        })
		var aq5 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Bretelle [13K - 3K]',
        transparent: true,
        format: 'image/png'
        })
		var aq6 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Bretelle [150K - 13K]',
        transparent: true,
        format: 'image/png'
        })
		
		// COLLECTRICE
		var aq7 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Collectrice [10K - 1]',
        transparent: true,
        format: 'image/png'
        })
		var aq8 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Collectrice [75K - 10K]',
        transparent: true,
        format: 'image/png'
        })
		var aq9 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Collectrice [350K - 75K]',
        transparent: true,
        format: 'image/png'
        })
		var aq10 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Collectrice [650K - 350K]',
        transparent: true,
        format: 'image/png'
        })
		var aq11 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Régionale  [25K - 1]',
        transparent: true,
        format: 'image/png'
        })
		var aq12 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Régionale  [250K - 25K]',
        transparent: true,
        format: 'image/png'
        })
		var aq13 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Régionale [1.5M - 250K]',
        transparent: true,
        format: 'image/png'
        })
		
		
		// NATIONAL
		var aq14 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Nationale [10K - 1]',
        transparent: true,
        format: 'image/png'
        })
		var aq15 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Nationale [25K - 10K]',
        transparent: true,
        format: 'image/png'
        })
		var aq16 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Nationale [40K - 25K]',
        transparent: true,
        format: 'image/png'
        })
		var aq17 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Nationale [25M - 40K]',
        transparent: true,
        format: 'image/png'
        })
		
		// AUTOROUTE
		var aq18 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Autoroute [8K - 1]',
        transparent: true,
        format: 'image/png'
        })
		var aq19 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Autoroute [50K - 8K]',
        transparent: true,
        format: 'image/png'
        })
		var aq20 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Autoroute [750K - 50K]',
        transparent: true,
        format: 'image/png'
        })
		var aq21 = L.tileLayer.wms('https://servicescarto.mern.gouv.qc.ca/pes/services/Territoire/AQreseau_WMS/MapServer/WMSServer', {
        layers: 'Autoroute [35M - 750K]',
        transparent: true,
        format: 'image/png'
        })
		
		
		
		
	
		var AQ = new L.layerGroup([aq1,aq2,aq3,aq4,aq5,aq6,aq7,aq8,aq9,aq10,aq11,aq12,aq13,aq14,aq15,aq16,aq17,aq18,aq19,aq20,aq21]);
		
		
		
		