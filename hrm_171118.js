

// set up initial parameters
var startlat = 57.18842;            
var startlng = -3.82869;
var startzoom = 7;
var map;
var reset2 = new google.maps.LatLng(57.18842,-3.82869);
var markers = [];
var adUnit;
var infoWindow = new google.maps.InfoWindow;
var zoom = 7;
var legend_width = '120px';

var location_column = 'geometry';

var selectArea = {
  'SELECT AN AREA TO VIEW >>>>': [{"value":"empty" }
  ],
  'Scotland': [{"value":"Scotland" }
  ],
  'North of England': [{"value":"North of England" }
  ],
  'Central England (East)': [{"value":"central-east" }
  ],
  'Wales and Central England (West)': [{"value":"wales-central" }
  ],
  'South East England': [{ "value":"south-east" }
  ],
  'South West England': [{ "value":"south-west" }
  ],
   'All': [{ "value":"all" }
  ]
  
  }

var map, layer;
var baseIconShadow = 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png';
var baseIconShadow2 = 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png';

var customIcons = {
  
  
    googleplus:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_googleplus.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    twitter:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_twitter.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    facebook:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_facebook.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    blogs:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_blogs.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    intamap:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_intamap.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    news:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_news.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    youtube:   {
    icon: 'http://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_youtube.png',
    shadow: 'http://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    flickr:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_flickr.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },
    
    tripadvisor:   {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_sm/sm_hrm_22/icon_hrm_sm_22_tripadvisor.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
    },



  standardgauge: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_standard_gauge.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },
  narrowgauge: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_narrow_gauge.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },
  miniature: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_miniature_railway.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },
  museum: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_museum.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },

  railwaymaps: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_railmaps.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },

  accommodation: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_accommodation.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },

  railcams: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_railcams.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },

  railblogs: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_blognews.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },

 societies: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_wa/icon_hrm_wa_railassoc.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },

    
  services: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_na/icon_hrm_na_railvideos.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  },

  sponsor: {
    icon: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/hrm_gold/icon_hrm_sr_gold.png',
    shadow: 'https://www.heritagerailwaysmap.co.uk/hrm_icons/icon_shadow.png'
  }

};

// temporary storage of locations while building location list
var locString = "";
var locStringArray = [];

// set up object to keep track of which xmlids (doorcode in gs speak)
// are stored in which position of markers array
var mapOfMarkerIdsToArrayPosition = {'mkrs': {'xmlid000': 'put marker.id here'}};

// temporary storage of marker while adding click to location list items
var mrk;

function initialize() {
    
    var latlng = new google.maps.LatLng(startlat, startlng);
    var myoptions = {
         zoom: startzoom,
         center: latlng,
		 mapTypeControl: true,
		 tilt:0,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    panControl: false,
	
	
	scrollwheel: true,
    streetViewControl: false, 
     zoomControl: true,
          zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
          },

         mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
    {
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ]
        
    };// end myoptions
	
	

    map = new google.maps.Map(document.getElementById("map-hrm"), myoptions);
	
	
	
	// add Custom Control to map
	  function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'CLICK HERE TO RECENTRE THIS MAP';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'CLICK <B>HERE</b> TO RESET THIS MAP';
  controlUI.appendChild(controlText);

  
  controlUI.addEventListener('click', function() {
    map.setCenter(reset2); 
	map.setZoom(15);
	 infoWindow.close();
	
  });

}
  
  // Create a DIV to hold the control and call HomeControl()
  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
  

 


     var adUnit;
    // get xml, parse it, and create markers (from google article code
    // as below but put into initialise rather than search function
     downloadUrl('/hrm_xml/hrm_gsb_291118.xml', function(data) {
 var xml = parseXml(data);
       var markerNodes = xml.documentElement.getElementsByTagName("marker");
	   
	   var customIcon;
       var customIconShadow = baseIconShadow2; //same shadow as normal for now but may change in future
	   
    //var bounds = new google.maps.LatLngBounds();
       for (var i = 0; i < markerNodes.length; i++) {
         var name = markerNodes[i].getAttribute("name");
         var address = markerNodes[i].getAttribute("address");
         var town = markerNodes[i].getAttribute("town");
         var postcode = markerNodes[i].getAttribute("postcode");
         var phone = markerNodes[i].getAttribute("phone");
         var email = markerNodes[i].getAttribute("email");
		 
		
         var directions = markerNodes[i].getAttribute("directions");
          
         var doorcode = markerNodes[i].getAttribute("doorcode");
         var url = markerNodes[i].getAttribute("url");
         //console.log(doorcode);
         //console.log(address);
         var lat = markerNodes[i].getAttribute("lat");
         var lng = markerNodes[i].getAttribute("long");
         var latlng = new google.maps.LatLng(
              parseFloat(lat),
              parseFloat(lng));
          //var testLat = markerNodes[i].getAttribute("name");
          //var category = markerNodes[i].getAttribute("category");
          var xmlCategory = markerNodes[i].getAttribute("category");
          var customIcon = markerNodes[i].getAttribute("custom-icon");
          if (customIcon == "") {
            var icon = customIcons[xmlCategory] || {};
          } else {
            var icon = {
              icon: customIcon,
              shadow: customIconShadow
            };
          };
		  
		  
		  
		  
		  var image = markerNodes[i].getAttribute("image");
             
             // set variables for infowindow packages 
        var gsb = markerNodes[i].getAttribute("g-s-b");
        var goldImage = markerNodes[i].getAttribute("gold-image");
        var goldImageURL = markerNodes[i].getAttribute("gold-image-link");
        var goldInfo = markerNodes[i].getAttribute("gold-info");
          

          // keep track of where in array this marker will be stored
          mapOfMarkerIdsToArrayPosition.mkrs[doorcode] = i;

          // test this works...
          //console.log(mapOfMarkerIdsToArrayPosition.mkrs[doorcode]);

        createMarker(latlng, name, icon, xmlCategory, doorcode, address, town, postcode, phone, email, lat, lng, url, directions, image, gsb, goldImage, goldImageURL, goldInfo);
        //console.log(doorcode);
        
       
        // add info to list for search panel
        locString = '<li data-location=' + name + '" id="' + doorcode +'">' + name + '<\/li>';
        locStringArray.push(locString);


       } // end for
        locStringArray.sort();
        $('#dataList').html(locStringArray.join(''));
        $("#dataList > li").live("click", function(){
            // get id of list item
            // use id to get marker via map of markers and from that
            // lat, lng, and tab contents
            mkr = markers[mapOfMarkerIdsToArrayPosition.mkrs[$(this).attr('id')]];
           reset_map(mkr.lat, mkr.lng, 15, 'offset')




            mkr.setVisible(true);
            infoWindow.setContent(mkr.html);
            infoWindow.open(map, mkr);
         });
         
// Generated by CoffeeScript 1.4.0
(function() {
  var checkAndSetParams, checkQueryString, hasErrors, locExists, qsArray, qsParams, qsZoom, queryString, setErrors, setMap, zoomExists, qsLoc, qsLocOK;

  queryString = location.search;

  qsArray = [];

  hasErrors = false;

  qsParams = {};

  qsZoom = 17;

  qsLoc = {};

  qsLocOK = false;

  locExists = false;

  zoomExists = false;

  checkQueryString = function() {
    var name, value, x, _i, _len;
    if (queryString.length > 0) {
      // remove terminal hash character if firing js command in browser has added it
      if (queryString.charAt(queryString.length - 1) === "#") {
        queryString.slice(0, -1);
      }
      //console.log(queryString);
      qsArray = queryString.replace('?', '').split('&');
      for (_i = 0, _len = qsArray.length; _i < _len; _i++) {
        x = qsArray[_i];
        name = x.split('=')[0];
        value = x.split('=')[1];
        qsParams[name] = value;
      }
      return checkAndSetParams();
    }
  };

  checkAndSetParams = function() {
    // abort if we have more params than we expect
    var key, m, _i, _len, _ref;
    if (qsArray.length > 2) {
      setErrors();
    }
    for (key in qsParams) {
      if (key === "loc") {
        locExists = true;
      }
      if (key === "z") {
        zoomExists = true;
      }
    }
    if (zoomExists) {
      qsZoom = parseInt(qsParams.z);
    }




    if (locExists) {
      _ref = window.markers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        m = _ref[_i];
        if (qsParams.loc === m.doorcode) {
            // console.log(m.lat);
            // console.log(qsLoc.lat);
            qsLoc = m;
            
            

            
            //qsLoc.lng = m.long;
            //console.log(qsLoc.lat);
            qsLocOK = true;
          
            break;
			
			
        }
      }
    } else {
      setErrors();
    }
    if (!qsLocOK) {setErrors();};
    if (!hasErrors) {
      return setMap();
    }
  };

  setErrors = function() {
    return hasErrors = true;
  };
  
 
  setMap = function() {
var ll;
ll = new google.maps.LatLng(qsLoc.lat, qsLoc.lng);
window.map.setCenter(ll);
window.map.setZoom(qsZoom);
window.infoWindow.setContent(qsLoc.html);
window.infoWindow.open(window.map, qsLoc);

  
  // test this /////
document.getElementById('section4').scrollIntoView(true);
// end test

return $('#show-all').trigger('click');
};

  checkQueryString();

}).call(this);
////////////////// end querystring parsing //////////////////////


         
         
         

     });// end downloadUrl


    //jquery stuff
    $('.sponsor').click(function(){
        var currentSponsor = this.id;
        showSponsorOnMap(currentSponsor)
        });

    //$('#key div').click(function(){

    $('.layer').click(function(){
        $(this).toggleClass("control-off");
        //added 1 july 2011, need to reset hide / show all menu status
        // amended 16 aug 2011 to allow for extra control on / off classes
        $('#show-all').addClass('control-off1');
        $('#hide-all').addClass('control-off2');

        // get which control was clicked so can
        // filter correct category
        var clickedCategory = "none";

          switch ( this.id ) {
            
			case "standardgauge-control":
                clickedCategory = "standardgauge";
                break;
            case "narrowgauge-control":
                clickedCategory = "narrowgauge";
                break;
            case "miniature-control":
                clickedCategory = "miniature";
                break;
            case "museum-control":
                clickedCategory = "museum";
                break;

           case "accommodation-control":
                clickedCategory = "accommodation";
                break;

            case "railcams-control":
                clickedCategory = "railcams";
                break;

            case "railblogs-control":
                clickedCategory = "railblogs";
                break;

            case "railsocieties-control":
                clickedCategory = "societies";
                break;

             case "services-control":
                clickedCategory = "services";
                break;       

            default:
                clickedCategory = "none";
        }

        var tmp;
        for(var i = 0; i < markers.length; i++){
            tmp = markers[i];
            if ($(this).hasClass("control-off")){
                if (tmp.xml_cat == clickedCategory) {tmp.setVisible(false);}
            }
            else {
                if (tmp.xml_cat == clickedCategory) {tmp.setVisible(true);}
            }
        }

    });

    //clicking on show or hide all changes visual state of key icons
    //and change visual state of other show / hide all menu
    //and shows or hides all markers
    // except main sponsor marker.
    // main sponsor is always shown. this is hard coded for now and not DRY
   $('#show-all').click(function(){
            $('.layer').removeClass('control-off');
            $('#hide-all').addClass('control-off2');
            $('#show-all').removeClass('control-off1');
            var currentMarker;
            for(var i = 0; i < markers.length; i++){
                currentMarker = markers[i];
                currentMarker.setVisible(true);
            }
    });
    $('#hide-all').click(function(){
            $('.layer').addClass('control-off');
            $('#show-all').addClass('control-off1');
            $('#hide-all').removeClass('control-off2');
            var currentMarker;
            for(var i = 0; i < markers.length; i++){
                currentMarker = markers[i];
                
                     if (currentMarker.doorcode == 'strathspey-railway-aviemore'   ||  currentMarker.doorcode == 'boat-railway-station' || currentMarker.doorcode == 'glenbogle-broomhill-station' )

{ currentMarker.setVisible(true); }

else {currentMarker.setVisible(false); }

                        
			}

    });
	
	
 
 //jquery stuff
    $('.sponsor1').click(function(){
        var currentSponsor = this.id;
        showSponsorOnMap(currentSponsor)
});

  
init_selectmenu();
 

} //end initialise

// Initialize the drop-down menu
function init_selectmenu() {
  var selectmenu = document.getElementById('selector');
  for(selectedArea in selectArea) {
    var option = document.createElement('option');
    option.setAttribute('value', selectedArea);
    option.innerHTML = selectedArea;
    selectmenu.appendChild(option);
  }
   map.controls[google.maps.ControlPosition.LEFT_TOP].push(selectmenu);
}
  
function gotoArea(area) {
 switch (area) {
            case "Scotland":
                reset_map(56.65622,-4.10888,7);
                break;
            case "North of England":
                reset_map(54.623705,-2.221618,8);
                break;
            case "Central England (East)":
                reset_map(52.681014,-0.333914,8);
                break;
            case "Wales and Central England (West)":
                reset_map(52.473632,-3.180746,8);
                break;
            case "South East England":
                reset_map(51.444377,-0.234450,8);
                break;
            case "South West England":
                reset_map(50.332869,-3.456683,8);
                break;
            case "All":
                reset_map(54.6,-2.6,5);
                break;
            default:
                reset_map(startlat,startlng,startzoom);
 }

}
  
  // a more general reset map function...
function reset_map(latitude, longitude, zoom, offset) {
    var o = 0.5; //or whatever the offset should be!
    if(!offset) {o = 0}; // if we don't ask for offset when calling
//the function, set it to zero
    var ll = new google.maps.LatLng(latitude, longitude - o); 
    // adjust the longitude with offset
    map.setCenter(ll);
    map.setZoom(zoom);
}

// Generate the content for the legend
function Legend(controlDiv, selectArea) {
  controlDiv.style.padding = '10px';
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = 'white';
  controlUI.style.borderStyle = 'none';
  controlUI.style.borderWidth = '1px';
  controlUI.style.width = legend_width;
  controlUI.title = 'Legend';
  controlDiv.appendChild(controlUI);
  var controlText = document.createElement('div');
  controlText.style.fontFamily = 'Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.paddingLeft = '4px';
  controlText.style.paddingRight = '4px';

  controlText.innerHTML = legendContent(selectArea);
  controlUI.appendChild(controlText);

    
  
  }

google.maps.event.addDomListener(window, 'load', initialize);


///////////////////////////////////////////////////////////
//// **  internet explorer only css scrollbar changes
$(document).ready(function() {
    if($.browser.msie){
     $('#dataContainersp').addClass('menu-ie');
     $('#areaContainer').addClass('menu-ie');
     $('#categoryContainer').addClass('menu-ie');
     $('#scratchpad').addClass('menu-ie');
    }else{
     $('#dataContainersp').addClass("menu-non-ie");
     $('#areaContainer').addClass("menu-non-ie");
     $('#categoryContainer').addClass("menu-non-ie");
     $('#scratchpad').addClass("menu-non-ie");
    };
});
///////////////////////end of ie scrollbar changes//////////


// code from google article on phpsqlsearch_v3
// http://code.google.com/apis/maps/articles/phpsqlsearch_v3.html

 function createMarker(latlng, name, icon, xmlCategory, doorcode, address, town, postcode, phone, email, lat, lng, url, directions, image, gsb, goldImage, goldImageURL, goldInfo) {
//console.log(icon);
        // set infowindow text depending on package level set in xml file
        //var gsb = package;
     var shortURL = url.slice(11);
        if (gsb == "gold") {
            var html = '<div class="infoWindow"><div id="iw-heading">' + name + '</div><div class="iwgold-image-top" id="image-left" style="background-image:url(\'http://www.heritagerailwaysmap.co.uk/hrm_iwi/' + image + '\')!important;" title="click to open website" onclick="openInfoWindowLink(\'' + url + '\',\'' + 'iw' + doorcode + 'a' + '\')" >   </div> <div class="iwgold-text-top" id="text-right"><b>Address:</b> ' + address + ', ' + town + ', ' + postcode + '<hr><b>Phone:</b> ' + phone + '<hr><b>Email: </b><a href="mailto:' + email + '">' + email + '</a><hr><b>Web:</b> <a title="click to view web site" onclick="openInfoWindowLink(\'' + url +'\',\'' + 'iw' + doorcode + '\')" >' + shortURL + '</a><hr><b>Lat:</b> ' + lat + '<br><b>Long:</b> ' + lng + '</div><div style="clear:both;">&nbsp;</div><div class="iwgold-image-lower" onclick="openInfoWindowLink(\'' + goldImageURL + '\',\'' + 'iw' + doorcode + 'b' + '\')" style="background-image:url(\'http://www.heritagerailwaysmap.co.uk/hrm_iwi/' + goldImage + '\')!important;" >  </div><div class="iwgold-text-lower">' + goldInfo + '</div><div style="clear:both;"><a title="repeatedly click on zoom in to view the location in more detail" onclick="javascript:map.setCenter(new google.maps.LatLng('+latlng.toUrlValue(6)+')); map.setZoom(parseInt(map.getZoom())+1);positionIcon();">Zoom In </a><a title="repeatedly click zoom out to view more of the area around the location" onclick="javascript:map.setCenter(new google.maps.LatLng('+latlng.toUrlValue(6)+')); map.setZoom(parseInt(map.getZoom())-1);positionIcon();">| Out  </a><a title="click reset to return to original map location" onClick="clickRestorePositionHandler()">| Reset</a></div></div>';
        } else if (gsb == "silver") {
            var html = '<div class="infoWindow"><div id="iw-heading"><b style="color:#666666;">' + name + '</style></b></div><div class="iwsilver-image-top" id="image-center" style="background-image:url(\'http://www.heritagerailwaysmap.co.uk/hrm_iwi/' + image + '\')!important;" >   </div><p style="line-height:0.1em"> <div class="iwsilver-text-top" id="text-center" style="border-style: solid; border-width: 0px;"><b style="color:#666666;">Phone:</style></b> ' + phone + '<p style="line-height:0.5em"></style></p><b style="color:#666666;">Address:</style></b> ' + address + ', ' + town + ' </div><p style="line-height:0.5em"></style></p><div class="iwgold-text-lower" style="border-style: solid; border-width: 0px;">' + goldInfo + '</div><div style="clear:both;"><a title="repeatedly click on zoom in to view the location in more detail" onclick="javascript:map.setCenter(new google.maps.LatLng('+latlng.toUrlValue(6)+')); map.setZoom(parseInt(map.getZoom())+1);positionIcon();">Zoom In </a><a title="repeatedly click zoom out to view more of the area around the location" onclick="javascript:map.setCenter(new google.maps.LatLng('+latlng.toUrlValue(6)+')); map.setZoom(parseInt(map.getZoom())-1);positionIcon();">| Out  </a><a title="click reset to return to original map location" onClick="clickRestorePositionHandler()">| Reset</a><p>  <a title="click on Directions and then input your location for Directions to locations" onclick="openInfoWindowLink3(\'' + directions +'\')" ><b> Directions </b></a></p></div></div>';
          } else {
            var html = '<div class="infoWindow"><div class="iwbronze" id="text-only" ><b style="color:#666666;">' + name + '</style></b><br /><p></p><b style="color:#666666;">Address:</style></b> ' + address + '<br />' + town + '<p></p><b style="color:#666666;">Phone:</style></b>  ' + phone + ' <p></p><b>Web:</b> <a title="click to view web site" onclick="openInfoWindowLink(\'' + url +'\',\'' + 'iw' + doorcode + '\')" >'+ shortURL + '</a></div><div style="clear:both;"><a title="repeatedly click on zoom in to view the location in more detail" onclick="javascript:map.setCenter(new google.maps.LatLng('+latlng.toUrlValue(6)+')); map.setZoom(parseInt(map.getZoom())+1);positionIcon();">Zoom In </a><a title="repeatedly click zoom out to view more of the area around the location" onclick="javascript:map.setCenter(new google.maps.LatLng('+latlng.toUrlValue(6)+')); map.setZoom(parseInt(map.getZoom())-1);positionIcon();">| Out  </a><a title="click reset to return to original map location" onClick="clickRestorePositionHandler()">| Reset</a></div></div>';
			};
        
        
      var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        icon: icon.icon,
        shadow: icon.shadow,
        title: name, //this creates tooltip
        //category: category
      });
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });

      //if (xmlCategory != "owner" && xmlCategory != "fire_rescue" && xmlCategory != "police" && xmlCategory != "air_abn_abz" && xmlCategory != "rail_abn_dyc" && xmlCategory != "rail_abn_abd") {
        //marker.setVisible(false);
      //}

      marker.doorcode = doorcode;
      //console.log(doorcode);
      marker.xml_cat = xmlCategory;
      marker.lat = lat;
      marker.lng = lng;
      marker.html = html;
      marker.url = url;

      markers.push(marker);
      //console.log(marker.url);
    }


    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request.responseText, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function parseXml(str) {
      if (window.ActiveXObject) {
        var doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.loadXML(str);
        return doc;
      } else if (window.DOMParser) {
        return (new DOMParser).parseFromString(str, 'text/xml');
      }
    }

    function doNothing() {}


// end of code from google article



// reset map
function clickRestorePositionHandler() {
    var reset;
    reset = new google.maps.LatLng(startlat, startlng);
    map.setCenter(reset);
    map.setZoom(startzoom);
    //map.closeInfoWindow();
    infoWindow.close();
}
//end reset map


// a more general reset map function...
function reset_map(latitude, longitude, zoom, offset) {
    var o = -0.5; //or whatever the offset should be!
    if(!offset) {o = 0}; // if we don't ask for offset when calling
//the function, set it to zero
    var ll = new google.maps.LatLng(latitude, longitude - o); 
    // adjust the longitude with offset
    map.setCenter(ll);
    map.setZoom(zoom);
}
// end general reset map function

// function called by switch area control
// decides what parameters to pass onto reset_map





//jquery stuff

// start map links from images

 $('#sponsor1').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "strathspey-railway-aviemore";
  showSponsorOnMap2(currentSponsor)
        });
        
                                                                     
 $('#sponsor2').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "keith-railway-dufftown";
  showSponsorOnMap2(currentSponsor)
        });
        
   $('#sponsor3').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "royaldeeside-railway-crathes";
  showSponsorOnMap2(currentSponsor)
        });      
        
    $('#sponsor4').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "caledonian-railway-brechin";
  showSponsorOnMap2(currentSponsor)
        });     
        
     $('#sponsor5').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "worthvalley-railway-keighley";
  showSponsorOnMap2(currentSponsor)
        });
        
     $('#sponsor6').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "severnvalley-railway-bewdley";
  showSponsorOnMap2(currentSponsor)
        });    
        
     $('#sponsor7').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "northnorfolk-railway-sheringham";
  showSponsorOnMap2(currentSponsor)
        });
        
   $('#sponsor8').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "midnorfolk-railway-dereham";
  showSponsorOnMap2(currentSponsor)
        });      
        
     $('#sponsor9').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "foxfield-railway-forsbrook";
  showSponsorOnMap2(currentSponsor)
        });    
        
     $('#sponsor10').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "wensleydale-railway-northallerton";
  showSponsorOnMap2(currentSponsor)
        });
        
      $('#sponsor11').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "churnetvalley-railway-cheddleton";
  showSponsorOnMap2(currentSponsor)
        }); 
     
     $('#sponsor12').click(function(){
  $.scrollTo($("#section4"), 1000);
  var currentSponsor = "themoors-railway-pickering";
  showSponsorOnMap2(currentSponsor)
        });       
        
       
                
 function showSponsorOnMap2(whichSponsor) {


    // go to marker and infowindow on map 
    // as identified by xml doorcode passed as argument

    // go through array of markers until find right one
    // then go map location and open infowindow
    // after which break out of for loop so that don't waste time searching
    // thro' loop when no longer needed
    var currentID = whichSponsor;
    for (var x = 0; x < markers.length; x++) {
        m = markers[x];
            if (currentID == m.doorcode) {
                // set map centre to lat long of sponsor and adjust zoom
                reset_map(m.lat, m.lng, 14, 'offset')

                // open sponsor's infowindow
                infoWindow.setContent(m.html);
                infoWindow.open(map, m);
            break; // 6 to 2500 ms without break, 4 to 7 ms with!
            }
    } // end for loop
    //console.timeEnd("start loop");
} // end function showSponsorOnMap2

  // end map links from images

function showMainSponsorOnMap() {
    // set which marker relates to this sponsor
    var currentID = "strathspey-railway-aviemore"
    // go through array of markers until find right one
    // then go to marker and infowindow on map
    // after which break out of for loop so that don't waste time searching
    // thro' loop when no longer needed
    for (var x = 0; x < markers.length; x++) {
        m = markers[x];
           if (currentID == m.doorcode) {
                    // set map centre to lat long of sponsor and adjust zoom
                    reset_map(m.lat, m.lng, 14, 'offset')
                    // open sponsor infowindow
                    infoWindow.setContent(m.html);
                    infoWindow.open(map, m);
                    break;
            }
            } // end for loop
} // end function showSponsorOnMap


function openInfoWindowLink(url,name){
window.open(url,name,'height=420,width=580,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
} // end openSponsorInfoWindowLink()



function openInfoWindowLink3(directions,name){
window.open(directions,name,'height=420,width=580,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,status=yes');
}

function positionIcon() {
//alert(map.getBounds());
//map.setCenter(new google.maps.LatLng(currentIconPos));
//map.setZoom(parseInt(map.getZoom()+1));
var bounds = map.getBounds();

var southWest = bounds.getSouthWest();

var northEast = bounds.getNorthEast();

var lngSpan = northEast.lng() - southWest.lng();

var latSpan = northEast.lat() - southWest.lat();
var latTop = northEast.lat();
var latOffset = latSpan / 10;

var newLat = latTop - latOffset;

var lngOffset = lngSpan / 2.3;
var lngCentre = northEast.lng();
var newLng = lngCentre - lngOffset;

var newPos = new google.maps.LatLng(newLat,newLng);

map.panTo(newPos);
}





function mailpage()
{
mail_str = "mailto:?subject=Check out the " + document.title;
mail_str += "&body= I thought you might be interested in the " + document.title;
mail_str += ". You can view it at, " + location.href;
location.href = mail_str;
}


/////////////////////////=====================////////////////



////////// help highlight fade in and out /////////////////
$(document).ready(function() {
$('#help-highlight').fadeIn('fast', function() {
$(this).delay(1800).fadeOut(12500);
}); 
});// end ready function
////////// end help highlighter fade in and out /////////////////


////////// search panel //////////////////

$(document).ready(function() {
    $('#menusp').css('opacity',0.90);
}); // end of ready / set menu opacity


//// ** search by filtering dataList
$(document).ready(function() {
    jQuery.expr[':'].contains = function(a,i,m){
        return jQuery(a).text().toLowerCase().indexOf(m[3].toLowerCase())>=0;
    };
    $('#filterBox').keyup(function(event){
        var searchString = this.value;
    	searchString = searchString.toLowerCase();
	    if (searchString != ''){
	        $('#dataList>li').hide();
	        $('#dataList>li:contains(' + searchString + ')').show();
	    }
	    else{$('#dataListsp>li').show();};
    }); // end keyup function
});// end ready function

// disable form submit so that hitting return does not force page refresh
$(document).ready(function() {
    $('#searchForm').submit (function(){
    	return false;
    });
});


// move label into search input box and remove / add as input gets / loses focus
$(document).ready(function() {
var filterText = $('#filterLabel').remove().text();
$('#filterBox').addClass('placeholder').val(filterText).focus(function(){
if (this.value == filterText) {
$(this).removeClass('placeholder').addClass('searchTextsp').val('');
}; // end if
}).blur(function(){// end focus function and start blur...
	if (this.value == '') {
	$(this).addClass('placeholder').removeClass('searchText').val(filterText);
}; // end if
});// end blur function
});// end ready function



////////// end search panel ///////////////



//////////////////////////////================////////////////


function PopupCenter(pageURL, title,w,h) {
var left = (screen.width/2)-(w/2);
var top = (screen.height/2)-(h/2);
var targetWin = window.open (pageURL, title, 'toolbar=yes, location=no, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 