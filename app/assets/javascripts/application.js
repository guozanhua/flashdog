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
//= require jquery.turbolinks
//= require jquery_ujs
//= require jquery.dropotron.min.js
//= require jquery.scrolly.min.js
//= require jquery.validate
//= require jquery.remodal.min.js
//= require skel.min.js
//= require skel-layers.min.js
//= require init.js
//= require turbolinks
//= require_self

function submitButtonEnable(){
  $(conformation_cb).on( 'click', function() {
    if ($(submit_request).attr('disabled') == 'disabled') {
      $(submit_request).removeAttr('disabled');
    } else {
      $(submit_request).attr('disabled','disabled')
    }  
  });
}  

function drawMaps(){
    var moscowLatlng = new google.maps.LatLng(55.765425, 37.530741);
    var moscowOptions = {
        zoom: 13,
        center: moscowLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP}
    var moscowMap = new google.maps.Map(document.getElementById("moscow_map_canvas"), moscowOptions); 
    var moscowMarker = new google.maps.Marker({
      position: moscowLatlng,
      map: moscowMap
    });

    var pekinLatlng = new google.maps.LatLng(39.970501, 116.394941);
    var pekinOptions = {
        zoom: 13,
        center: pekinLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP}
    var pekinMap = new google.maps.Map(document.getElementById("pekin_map_canvas"), pekinOptions); 
    var pekinMarker = new google.maps.Marker({
      position: pekinLatlng,
      map: pekinMap
    });

    var shenzhenLatlng = new google.maps.LatLng(22.537933, 114.116502);
    var shenzhenOptions = {
        zoom: 13,
        center: shenzhenLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP}
    var shenzhenMap = new google.maps.Map(document.getElementById("shenzhen_map_canvas"), shenzhenOptions); 
    var shenzhenMarker = new google.maps.Marker({
      position: shenzhenLatlng,
      map: shenzhenMap
    });
}     

function scrollToRequest(){
  $("html, body").animate({scrollTop:$('#cta').position().top}, '1000', 'swing');
}

function validateRequest(){
  $('#request').validate({
  rules: {
    info: {required: true},
    quantity: {number: true, required: true},
    destination_city: {required: true},
    customer_name: {required: true},
    customer_email: {email: true,required: true},
    customer_phone: {required: true}
  },
  messages: {
    info: {required: "Что привезти то?"},
    quantity: {number:'Количество не корректно', required: "А сколько везти?"},
    destination_city: {required: "А город то какой?"},
    customer_name: {required: "Как звать?"},
    customer_email: {email: "E-mail не корректен",required: "Почту дашь?"},
    customer_phone: {required: "Телефончик оставь"}
  },
  onfocusout: true,
  onkeyup: false,
  onclick: false,
  onsubmit: true
  });
}