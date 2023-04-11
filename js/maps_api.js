'use strict'

function initMap() {
    const center = new google.maps.LatLng(46.96, 32.00);
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "ff4693d72d74108",
        zoom: 14,
        center: center,
      }
    );

    const imgMarker = './img/pin.svg';
    new google.maps.Marker({
        position: center, 
        icon: imgMarker,
        map: map,
        opacity: 0.7,
        width: '12px'
    });
  }

  window.initMap = initMap;
  