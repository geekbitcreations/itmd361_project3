function initMap()
{
  //var geek = document.getElementById('map');
  //var geekbitplaces = new google.maps.LatLng(42.3704366,-87.938236);
  //var geekplaces = {lat: 42.3704366, lng: -87.938236}
  
  var geekplaces1 = {lat: 42.3704366, lng: -87.938236}; // Six Flags Great America
  var geekplaces2 = {lat: 42.4963589, lng: -87.9583877}; // Bristol Renaissance Faire
  var geekplaces3 = {lat: 41.7905766, lng: -87.5852546}; // Museum of Science and Industry
  var geekplaces4 = {lat: 41.8839693, lng: -87.632672}; // Christkindlmarket
  var geekplaces5 = {lat: 41.8916244, lng: -87.6116684}; // Navy Pier
  
  var mapOptions = {
    //center: new google.maps.LatLng(42.3704366,-87.938236);,
    center: geekplaces1,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  //var geekMap = new google.maps.Map(geek, mapOptions);
  var map = new google.maps.Map(document.getElementById('map', mapOptions));

  var markerOptions = new google.maps.Marker({
    position: geekplaces1,
    //position: new google.maps.LatLng(42.3704366,-87.938236)
    map: map,
    animation: google.maps.Animation.BOUNCE,
    //icon: 'geekbiticon.png'
  });
    
  var marker = new google.maps.Marker(markerOptions);
  marker.setMap(map);

  //var infostring = '<h1>Six Flags Great America</h1><p>Best places here are Hurricane Harbor, the Whizzer, American Eagle, the Viper, Dark Knight, and Justice League.</p>';

  var infoWindowOptions = new google.maps.InfoWindow({
    content: '<h1>Six Flags Great America</h1>
    <p>Best places here are Hurricane Harbor, the Whizzer, American Eagle, the Viper, Dark Knight, and Justice League.</p>'
  });

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    
  google.maps.event.addListener(marker, 'click', function(e) {
    infoWindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);


/*<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYsouagwj_KvlqIJ8yFFGv2iV21YOm1-I&callback=initMap"
  type="text/javascript"></script>*/
  
/*<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYsouagwj_KvlqIJ8yFFGv2iV21YOm1-I&callback=initMap"
    async defer></script>*/
