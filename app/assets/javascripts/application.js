// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

google.maps.event.addDomListener(window, 'load', initialize);
var geocoder;
var map;

function initialize() {
  var mapOptions = {
    zoom: 13
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Your Location'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

function getLocations() {

      $.getJSON("/json.json", function (json) {

          $.each(json["businesses"]["location"]["coordinate"], function(i, entry){
              addMarker(entry.location.latitude,entry.location.longitude);
          });
      });
  }

  function addMarker(lat,lng) {
          marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat,lng),
          map: map,
          });
          markersArray.push(marker);
  }




















      // $(document).ready(function() {
      //   $.getJSON('/json.json', function(json1) {
      //     $.each(json1, function(key, data) {
      //       var latLng = new google.maps.LatLng(data.latitude, data.longitude); 
      //       // Creating a marker and putting it on the map
      //       var marker = new google.maps.Marker({
      //           position: latLng,
      //           title: data.title
      //       });
      //       marker.setMap(map);
      //     });
      //   });
      // });





