function init()
{
	// Bristol Renaissance Faire (42.4963589,-87.9583877), Six Flags Great America (42.3704366,-87.938236), 
  // Museum of Science and Industry (41.7905766,-87.5852546), Christkindlmarket (41.8839693,-87.632672),
  // Navy Pier (41.8916244,-87.6116684)
	var el = document.getElementById('hangouts');
	var geekbitplaces = new google.maps.LatLng(42.3704366,-87.938236);
	var mapOptions = {
		center: geekbitplaces,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var geekMap = new google.maps.Map(el, mapOptions);

	var geekpoint = new google.maps.Marker({
    position: myLocation,
		map: geekMap,
		animation: google.maps.Animation.BOUNCE,
		icon: '/images/geekbitlocator.png'
	});

	var contentString = '<h1>Bristol Renaissance Faire</h1>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(geekMap, geekpoint);
  	});


}
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYsouagwj_KvlqIJ8yFFGv2iV21YOm1-I&callback=initMap"
  type="text/javascript"></script>
  
google.maps.event.addDomListener(window, 'load', initMap);



// AIzaSyDYsouagwj_KvlqIJ8yFFGv2iV21YOm1-I