mapboxgl.accessToken = 'pk.eyJ1IjoiaW5kaXJhd3JzIiwiYSI6ImNra2ZzaXZ1bTA4cGkyeG8yZDA5YjRxYTIifQ.bZ1eiCVjpnkba5KgxSZPRg';
navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, { 
        enableHighAccuracy: true
    })      

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
    //setupMap([-73.9070,40.7128])

}

function errorLocation(){
    setupMap([-73.9070,40.7128])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/indirawrs/ckkeiqmhc114317o2qxul0p2b',
        center: center, 
        zoom: 5
      });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav); 
//this is just a test from the tutorial
    /*var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
      });
      
      map.addControl(directions, 'top-left');
 */     
}

//this is the adding markers from the custom demo DIDN'T WORK :(
/*
var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
      
    }]
    
  };
  // add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });
*/
