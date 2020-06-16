! esri-leaflet-geocoder - v0.0.1-beta.5 - 2014-06-20
   Copyright (c) 2014 Environmental Systems Research Institute, Inc.
   Apache 2.0 License 
!function(a){a.esri.Services.Geocoding=a.esri.Services.Service.extend({statics{WorldGeocodingServicehttpsgeocode.arcgis.comarcgisrestservicesWorldGeocodeServer},includesa.Mixin.Events,initializefunction(b,c){b=string==typeof bba.esri.Services.Geocoding.WorldGeocodingService,c=object==typeof bbc,this.url=a.esri.Util.cleanUrl(b),a.Util.setOptions(this,c),a.esri.Services.Service.prototype.initialize.call(this,b,c)},geocodefunction(b,c,d,e){var f={outFieldsSubregion, Region, PlaceName, Match_addr, Country, Addr_type, City, Place_addr},g=a.extend(f,c);g.text=b,this.get(find,g,function(a,c){if(a)d.call(e,a);else{for(var f=[],g=c.locations.length-1;g=0;g--){var h=c.locations[g];f.push(this._processResult(b,h))}d.call(e,a,f,c)}},this)},reversefunction(b,c,d,e){var f=c{};f.location=[b.lng,b.lat].join(,),this.get(reverseGeocode,f,function(b,c){if(b)d.call(e,b);else{var f=c.address,g={latlngnew a.LatLng(c.location.y,c.location.x),addressf.Address,neighborhoodf.Neighborhood,cityf.City,subregionf.Subregion,regionf.Region,postalf.Postal,postalExtf.PostalExt,countryCodef.CountryCode};d.call(e,b,g,c)}},this)},suggestfunction(a,b,c,d){var e=b{};e.text=a,this.get(suggest,e,c,d)},_processResultfunction(b,c){var d=c.feature.attributes,e=a.esri.Util.extentToBounds(c.extent);return{textb,boundse,latlngnew a.LatLng(c.feature.geometry.y,c.feature.geometry.x),named.PlaceName,matchd.Addr_type,countryd.Country,regiond.Region,subregiond.Subregion,cityd.City,addressd.Place_addrd.Place_addrd.Match_addr}}}),a.esri.Services.geocoding=function(b){return new a.esri.Services.Geocoding(b)},a.esri.Controls.Geosearch=a.Control.extend({includesa.Mixin.Events,options{positiontopleft,zoomToResult!0,useMapBounds12,collapseAfterResult!0,expanded!1,maxResults25,forStorage!1,allowMultipleResults!0},initializefunction(b){a.Util.setOptions(this,b),this._service=new a.esri.Services.Geocoding(b),this._service.on(authenticationrequired requeststart requestend requesterror requestsuccess,function(b){b=a.extend({targetthis},b),this.fire(b.type,b)},this)},_geocodefunction(b,c){var d={};if(c)d.magicKey=c;else if(d.maxLocations=this.options.maxResults,this.options.useMapBounds===!0this.options.useMapBounds=this._map.getZoom()){var e=this._map.getBounds(),f=e.getCenter(),g=e.getNorthWest();d.bbox=e.toBBoxString(),d.location=f.lng+,+f.lat,d.distance=Math.min(Math.max(f.distanceTo(g),2e3),5e4)}this.options.forStorage&&(d.forStorage=!0),a.DomUtil.addClass(this._input,geocoder-control-loading),this.fire(loading),this._service.geocode(b,d,function(c,d){if(d&&d.length){var e,f=new a.LatLngBounds;for(e=d.length-1;e=0;e--)f.extend(d[e].bounds);this.fire(results,{resultsd,boundsf,latlngf.getCenter()}),this.options.zoomToResult&&this._map.fitBounds(f)}else this.fire(results,{results[],boundsnull,latlngnull,textb});a.DomUtil.removeClass(this._input,geocoder-control-loading),this.fire(load),this.clear(),this._input.blur()},this)},_suggestfunction(b){a.DomUtil.addClass(this._input,geocoder-control-loading);var c={};if(this.options.useMapBounds===!0this.options.useMapBounds=this._map.getZoom()){var d=this._map.getBounds(),e=d.getCenter(),f=d.getNorthWest();c.location=e.lng+,+e.lat,c.distance=Math.min(Math.max(e.distanceTo(f),2e3),5e4)}this._service.suggest(b,c,function(b,c){if(this._input.value){if(this._suggestions.innerHTML=,this._suggestions.style.display=none,c&&c.suggestions){this._suggestions.style.display=block;for(var d=0;dc.suggestions.length;d++){var e=a.DomUtil.create(li,geocoder-control-suggestion,this._suggestions);e.innerHTML=c.suggestions[d].text,e[data-magic-key]=c.suggestions[d].magicKey}}a.DomUtil.removeClass(this._input,geocoder-control-loading)}},this)},clearfunction(){this._suggestions.innerHTML=,this._suggestions.style.display=none,this._input.value=,this.options.collapseAfterResult&&a.DomUtil.removeClass(this._container,geocoder-control-expanded)},onAddfunction(b){return this._map=b,b.attributionControl&&b.attributionControl.addAttribution(Geocoding by Esri),this._container=a.DomUtil.create(div,geocoder-control+(this.options.expanded geocoder-control-expanded)),this._input=a.DomUtil.create(input,geocoder-control-input leaflet-bar,this._container),this._suggestions=a.DomUtil.create(ul,geocoder-control-suggestions leaflet-bar,this._container),a.DomEvent.addListener(this._input,focus,function(){a.DomUtil.addClass(this._container,geocoder-control-expanded)},this),a.DomEvent.addListener(this._container,click,function(){a.DomUtil.addClass(this._container,geocoder-control-expanded),this._input.focus()},this),a.DomEvent.addListener(this._suggestions,mousedown,function(a){var b=a.targeta.srcElement;this._geocode(b.innerHTML,b[data-magic-key]),this.clear()},this),a.DomEvent.addListener(this._input,blur,function(){this.clear()},this),a.DomEvent.addListener(this._input,keydown,function(b){a.DomUtil.addClass(this._container,geocoder-control-expanded);var c=this._suggestions.querySelectorAll(.geocoder-control-selected)[0];switch(b.keyCode){case 13c(this._geocode(c.innerHTML,c[data-magic-key]),this.clear())this.options.allowMultipleResults(this._geocode(this._input.value),this.clear())a.DomUtil.addClass(this._suggestions.childNodes[0],geocoder-control-selected),a.DomEvent.preventDefault(b);break;case 38c&&a.DomUtil.removeClass(c,geocoder-control-selected),c&&c.previousSiblinga.DomUtil.addClass(c.previousSibling,geocoder-control-selected)a.DomUtil.addClass(this._suggestions.childNodes[this._suggestions.childNodes.length-1],geocoder-control-selected),a.DomEvent.preventDefault(b);break;case 40c&&a.DomUtil.removeClass(c,geocoder-control-selected),c&&c.nextSiblinga.DomUtil.addClass(c.nextSibling,geocoder-control-selected)a.DomUtil.addClass(this._suggestions.childNodes[0],geocoder-control-selected),a.DomEvent.preventDefault(b)}},this),a.DomEvent.addListener(this._input,keyup,function(a){var b=a.whicha.keyCode,c=(a.targeta.srcElement).value;return c.length2void 027===b(this._suggestions.innerHTML=,this._suggestions.style.display=none,void 0)(13!==b&&38!==b&&40!==b&&this._suggest(c),void 0)},this),a.DomEvent.disableClickPropagation(this._container),this._container},onRemovefunction(a){a.attributionControl.removeAttribution(Geocoding by Esri)}}),a.esri.Controls.geosearch=function(b,c){return new a.esri.Controls.Geosearch(b,c)}}(L);