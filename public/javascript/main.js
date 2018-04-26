function startMap () {
  // Store Ironhack's coordinates
  const dogPark1 = { lat: 41.389346, lng: 2.180464 };

  // Map initialization
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: dogPark1
  });

  // Add a marker for Ironhack Barcelona
  const dogPark1Marker = new google.maps.Marker({
    position: {
      lat: dogPark1.lat,
      lng: dogPark1.lng
    },
    map: map,
    title: 'Barcelona Campus'
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const user_location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // Center map with user location
      map.setCenter(user_location);

      // Add a marker for your user location
      const dogPark1Marker = new google.maps.Marker({
        position: {
          lat: user_location.lat,
          lng: user_location.lng
        },
        map: map,
        title: 'You are here'
      });
    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }
}

startMap();
