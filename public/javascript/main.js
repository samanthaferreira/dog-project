function startMap () {
  // Store Ironhack's coordinates
  const dogPark1 = { lat: 41.3893, lng: 2.1804 };
  const dogPark2 = { lat: 41.3881, lng: 2.1860 };
  const dogPark3 = { lat: 41.3932, lng: 2.1835};
  const dogPark4 = { lat: 41.4001, lng: 2.1674};
  const dogPark5 = { lat: 41.4145, lng: 2.1527};
  const dogPark6 = {lat: 41.382862, lng: 2.192674};
  const dogPark7 = {lat: 41.407523, lng: 2.200871};

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
    title: 'Dog Park'
  });

  const dogPark2Marker = new google.maps.Marker({
    position: {
      lat: dogPark2.lat,
      lng: dogPark2.lng
    },

    map: map,
    title: 'Dog Park'
  });
  const dogPark3Marker = new google.maps.Marker({
    position: {
      lat: dogPark3.lat,
      lng: dogPark3.lng
    },

    map: map,
    title: 'Dog Park'
  });
  const dogPark4Marker = new google.maps.Marker({
    position: {
      lat: dogPark4.lat,
      lng: dogPark4.lng
    },

    map: map,
    title: 'Dog Park'
  });

  const dogPark5Marker = new google.maps.Marker({
    position: {
      lat: dogPark5.lat,
      lng: dogPark5.lng
    },

    map: map,
    title: 'Dog Park'
  });
  const dogPark6Marker = new google.maps.Marker({
    position: {
      lat: dogPark6.lat,
      lng: dogPark6.lng
    },

    map: map,
    title: 'Dog Park'
  });
  const dogPark7Marker = new google.maps.Marker({
    position: {
      lat: dogPark7.lat,
      lng: dogPark7.lng
    },

    map: map,
    title: 'Dog Park'
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
