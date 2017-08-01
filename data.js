

var map = L.map('map').setView([-20.877, 55.432], 10);


//Desactivation du zoom de la souris
map.scrollWheelZoom.disable();




map.on('click', function(){
  if (map.scrollWheelZoom.disable()){
    map.scrollWheelZoom.enable();
  }else if (map.scrollWheelZoom.enable()){
    window.map.scrollWheelZoom.disable(),false;
  }
});
window.addEventListener('click',map.scrollWheelZoom.disable(),false);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {minZoom :10 , maxZoom : 14, 
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//marquage des points d'interet

//mise en place des pop-up



// quadrilater.bindPopup("Exemple de texte").openPopup();
// prima.bindPopup("Exemple de texte").openPopup();



$(document).ready(function(){
  $('#case1').click(function(){
   var atelier = L.marker([-20.897, 55.542]).addTo(map);
   var prima =  L.marker([-20.897, 55.492]).addTo(map);
  
//pop-up 
atelier.on('mouseover', function (e) {
  L.popup().setLatLng(e.latlng)
  .setContent('Passage sur une habitation')
  .openOn(map);
});
atelier.on('mouseout', function (e) {
  L.popup().closePopup();
});
//pop-up
$('.chiffre').css('color', 'green')
   $('button').css('background-color', 'green')
$('.trait').css('background-color', 'green') 
$('.habitation').show();
})

  $('#case2').click(function(){
L.marker([-21.027367, 55.268663]).addTo(map);
L.marker([-20.905148, 55.500322]).addTo(map);

    $('.habitation').hide();
    $('.logement').show();
    $('button').css('background-color','#9ac9ea')
    $('.chiffre').css('color', '#9ac9ea')
    $('.trait').css('background-color', '#9ac9ea') 
 
  })
});

$('#case3').click(function(){
  L.marker([-20.931442, 55.298157]).addTo(map);
L.marker([-20.932090, 55.294954]).addTo(map); 
$('.chiffre').css('color', '#56534e')
$('button').css('background-color','#56534e')
$('.trait').css('background-color', '#56534e') 
})
//ingenierie
$('#case4').click(function(){
    L.marker([-20.887, 55.442]).addTo(map);
L.marker([-20.877, 55.452]).addTo(map); 
 $('.chiffre').css('color', '#4baf9a')
 $('button').css('background-color', '#4baf9a') 
 $('.trait').css('background-color', '#4baf9a') 
})




