function initMap() {
  // Six Flags Great America
  /*var geekplaces1 = {
    info: '<strong><h1>Six Flags Great America</h1></strong><p>Favorite rides: Hurricane Harbor, Whizzer, American Eagle, Viper, Dark Knight, and Justice League: Battle for Metropolis.</p>',
    lat: 42.372559,
    lng: -87.938236
    icon: 'geekbiticon.png'
  }; 

  // Bristol Renaissance Faire
  var geekplaces2 = {
    info: '<strong><h1>Brisol Renaissance Faire</h1></strong><p>Favorite places: Jousting, Mud Show, Barely Balanced, The Swordsmen, Moonie, great food, costumes, and The Fantasticals.</p>',
    lat: 42.4963589, 
    lng: -87.9583877
    icon: 'geekbiticon.png'
  }; 

  // Museum of Science and Industry
  var geekplaces3 = {
    info: '<strong><h1>Museum of Science and Industry</h1></strong><p>Favorite places: Tornado, Coal Mine, Fairy Castle, Trees Around the World, Revolution, Jurassic World, and Toy Master.</p>',
    lat: 41.7905766, 
    lng: -87.5852546
    icon: 'geekbiticon.png'
  };

  // Christkindlmarket
  var geekplaces4 = {
    info: '<strong><h1>Christkindlmarket</h1></strong><p>Favorite places: shopping, the great food, hot cider, ornaments, and caroling.</p>',
    lat: 41.8839693, 
    lng: -87.632672
    icon: 'geekbiticon.png'
  }; 

  // Navy Pier
  var geekplaces5 = {
    info: '<strong><h1>Navy Pier/h1></strong><p>Favorite places: Winter Wonderfest, ferris wheel, and the garden.</p>',
    lat: 41.8916244, 
    lng: -87.6116684
    icon: 'geekbiticon.png'
  };

  var locations = [
    [geekplaces1.info, geekplaces1.lat, geekplaces1.lng, 0],
    [geekplaces2.info, geekplaces2.lat, geekplaces2.lng, 1],
    [geekplaces3.info, geekplaces3.lat, geekplaces3.lng, 2],
    [geekplaces4.info, geekplaces4.lat, geekplaces4.lng, 3],
    [geekplaces5.info, geekplaces5.lat, geekplaces5.lng, 4],
  ];*/
  
  var geekplaces1 = {lat: 42.372559, lng: -87.938236};
  var geekplaces2 = {lat: 42.4963589, lng: -87.9583877};
  var geekplaces3 = {lat: 41.7905766, lng: -87.5852546};
  var geekplaces4 = {lat: 41.8839693, lng: -87.632672};
  var geekplaces5 = {lat: 41.8916244, lng: -87.6116684};
  
  
  var map = new google.maps.Map(document.getElementById('map', mapOptions), {
    zoom: 9,
    //center: {lat: 42.372559, lng: -87.938236}
    center: geekplaces1
  });
  
  var image = 'geekbiticon.png';
  /*var placeMarker = new google.maps.Marker({
    position: {lat: 42.372559,lng: -87.938236},
    map: map,
    //draggable: true,
    animation: google.maps.Animation.DROP,
    icon: image
  });*/
  
  var placeMarker1 = new google.maps.Marker({
    position: geekplaces1,
    map: map,
    //draggable: true,
    animation: google.maps.Animation.DROP,
    icon: image
  });
  
  var placeMarker2 = new google.maps.Marker({
    position: geekplaces2,
    map: map,
    //draggable: true,
    animation: google.maps.Animation.DROP,
    icon: image
  });
  
  var placeMarker3 = new google.maps.Marker({
    position: geekplaces3,
    map: map,
    //draggable: true,
    animation: google.maps.Animation.DROP,
    icon: image
  });
  
  var placeMarker4 = new google.maps.Marker({
    position: geekplaces4,
    map: map,
    //draggable: true,
    animation: google.maps.Animation.DROP,
    icon: image
  });
  
  var placeMarker5 = new google.maps.Marker({
    position: geekplaces5,
    map: map,
    //draggable: true,
    animation: google.maps.Animation.DROP,
    icon: image
  });
    
  var mapOptions = {
    center: new google.maps.LatLng(42.372559,-87.938236),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
    
  var infoString = '<strong><h1>Six Flags Great America</h1></strong><p>Favorite rides: Hurricane Harbor, Whizzer, American Eagle, Viper, Dark Knight, and Justice League: Battle for Metropolis.</p>';

  var infoWindow = new google.maps.InfoWindow({
      content: infoString
  	});
    
  //var infoWindow = new google.maps.InfoWindow({});
  
  //var placeMarker, i;
  
  /*for (i = 0; i < locations.length; i++) {
    placeMarker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });
    
    google.maps.event.addListener(placeMarker, 'click', (function (placeMarker, i) {
        infoWindow.setContent(locations[i][0]);
        infoWindow.open(map, placeMarker);
      )};*/
    
  google.maps.event.addListener(placeMarker1, 'mouseover', function(e) {
    infoWindow.open(map, placeMarker1);
  });
  
  /*marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 42.3704366, lng: -87.938236}
    //icon: 'geekbiticon.png'
  });*/
  placeMarker.addListener('click', toggleBounce);
}


google.maps.event.addDomListener(window, 'load', initMap);

function toggleBounce() {
  if (placeMarker.getAnimation() !== null) {
    placeMarker.setAnimation(null);
  } 
  
  else {
    placeMarker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
