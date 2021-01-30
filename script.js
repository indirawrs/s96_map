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
  var oceanbreeze = [-74.076978, 40.586514];
  
  const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/indirawrs/ckkeiqmhc114317o2qxul0p2b',
        center: center, 
        zoom: 13
      
      });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav); 

    // [] Attach Popup to a Marker Instance
    // create the popup
  var popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'We spent our days walking through the park and making up songs to my ukulele playing.'
    );
    
    // create DOM element for the marker
  var el = document.createElement('div');
    el.id = 'marker';
        
    // create the Static Marker
  new mapboxgl.Marker(el)
    .setLngLat(oceanbreeze)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

    
  // [] Draggable Marker

    // create DOM element for the marker
    
  var popupA = new mapboxgl.Popup({ offset: 25 }).setText(
    'Drag Test.'
    );
  
  var marker = document.createElement('div');
    marker.id = 'marker'
    
  new mapboxgl.Marker(marker,{draggable: true}) 
      .setLngLat([-74.0070,40.7128])
      .setPopup(popupA)
      .addTo(map);
  
  

  function onDragEnd() {
    marker.setPopup(popupA)
    .addTo(map);
  }
    
    marker.on('dragend', onDragEnd);


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
