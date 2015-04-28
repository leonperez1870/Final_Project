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


var map;

function initialize() {
  var mapOptions = {
    zoom: 12
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

google.maps.event.addDomListener(window, 'load', initialize);


$.each(data.markers, function (i, marker_data) {
         var marker = new google.maps.Marker({
             position: new google.maps.LatLng(marker_data.latitude, marker_data.longitude),
             map: map,
             title: marker_data.title,
          });
     }).click(function () {
         $('map-canvas').gmap('openInfoWindow', {
             'address': marker_data.address
         }, this);
     });



















// var markersArray = [];
// var NY_LAT = 40.7413515;
// var NY_LNG = -74.0004462;
// var QUERY_DELAY = 400;
// var inactive = false;

// $(document).ready(function() {
//   // initialize the map on load
//   initialize();
// });

// /**
//  * Initializes the map and some events on page load
//  */
// var initialize = function() {
//   // Define some options for the map
//   var mapOptions = {
//     center: new google.maps.LatLng(NY_LAT, NY_LNG),
//     zoom: 12,

//     // hide controls
//     panControl: true,
//     streetViewControl: false,

//     // reconfigure the zoom controls
//     zoomControl: true,
//     zoomControlOptions: {
//       position: google.maps.ControlPosition.RIGHT_TOP,
//       style: google.maps.ZoomControlStyle.SMALL
//     }
//   };

//   // create a new Google map with the options in the map element
//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// }

// google.maps.event.addDomListener(window, 'load', initialize);
// //markers from JSON
// $.getJSON('', function (data) {
//     $.each(data.markers, function (i, marker_data) {
//         var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(marker_data.latitude, marker_data.longitude),
//             map: map,
//             title: marker_data.title,
//         });
//     }).click(function () {
//         $('map-canvas').gmap('openInfoWindow', {
//             'address': marker_data.address
//         }, this);
//     });
// });

// /**
//  * Capture the specific business objects within a closure for setTimeout
//  * or else it'll execute only on the last business in the array
//  *
//  * param: i - the index the business was at in the array, used to the
//  *            timeout delay
//  * param: map - the Google map object used for geocoding and marker placement
//  * param: business - the business object from the response
//  */
 // var capture = function(i, map, business) {
 //   setTimeout(function() {
 //     if (i === 15) {
 //       inactive = false;
 //     }

 //    $('@results').append(build_results_container(business));
 //     // get the geocoded address for the business's location
 //     geocode_address(map, business['name'], business['location']);
 //   }, QUERY_DELAY * i); // the delay on the timeout
 // };

// /**
//  * Builds the div that'll display the business result from the API
//  *
//  * param: business - object of the business response
//  */
// //var build_results_container = function(business) {
// //  return [
// //    '<div class="result">',
// //      '<img class="biz_img" src="', business['image_url'], '">',
// //      '<h5><a href="', business['url'] ,'" target="_blank">', business['name'], '</a></h5>',
// //      '<img src="', business['rating_img_url'], '">',
// //      '<p>', business['review_count'], ' reviews</p>',
// //      '<p class="clear-fix"></p>',
// //    '</div>'
// //  ].join('');
// //};

// /**
//  * Geocode the address from the business and drop a marker on it's
//  * location on the map
//  *
//  * param: map - the Google map object to drop a marker on
//  * param: name - the name of the business, used for when you hover
//  *               over the dropped marker
//  * param: location_object - an object of the businesses address
//  */
//  var geocode_address = function(map, name, location_object) {
//    var geocoder = new google.maps.Geocoder();

//    var address = [
//      location_object['address'][0],
//      location_object['city'],
//      location_object['country_code']
//    ].join(', ');

//    // geocode the address and get the lat/lng
//    geocoder.geocode({address: address}, function(results, status) {
//      if (status === google.maps.GeocoderStatus.OK) {

//        // create a marker and drop it on the name on the geocoded location
//        var marker = new google.maps.Marker({
//          animation: google.maps.Animation.DROP,
//          map: map,
//          position: results[0].geometry.location,
//          title: name
//        });

//        // save the marker object so we can delete it later
//        markersArray.push(marker);
//      } else {
//        console.log("Geocode was not successful for the following reason: " + status);
//      }
//    });
//  };

// // /**
// //  * Remove all of the markers from the map by setting them
// //  * to null
// //  */
//  var clearMarkers = function() {
//    markersArray.forEach(function(marker) {
//      marker.setMap(null);
//    });

//    markersArray = [];
//  };