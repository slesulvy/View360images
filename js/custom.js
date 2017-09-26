// Create viewer
/*viewer = pannellum.viewer('panorama', ﻿{
    "panorama": "http://localhost/4.jpg",
    "autoLoad": true,
    "showControls": false,
	"autoRotate": -2
});
*/
viewer = pannellum.viewer('panorama',{
    "default": {
        "firstScene": "circle",
        //"author": "Matthew Petroff",
		"autoLoad": true,
        "autoRotate": -2,
        "showControls": false,
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            //"title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "C:/wamp64/www/img/home.jpg",
            //"panorama": "http://192.168.124.1/img/home.jpg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
					"cssClass": "custom-hotspot",
					//"createTooltipFunc": hotspot,
                    "text": "Spring House or Dairy",
                    "sceneId": "garthen"
                },
                {
                    "pitch": -9.4,
                    "yaw": 222.6,
                    "type": "scene",
					"cssClass": "custom-hotspot",
					//"createTooltipFunc": hotspot,
                    "text": "Test",
                    "sceneId": "test"
                },
                {
                    "pitch": -0.9,
                    "yaw": 144.4,
                    "type": "scene",
					"cssClass": "custom-hotspot",
					//"createTooltipFunc": hotspot,
                    "text": "Library",
                    "sceneId": "library"
                }
            ]
        },

        "garthen": {
            "title": "garthen",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "http://localhost/img/img.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "cssClass": "custom-hotspot",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "test": {
            "title": "Test",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "http://localhost/img/img1.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "cssClass": "custom-hotspot",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },

        "library": {
            "title": "Library",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "http://localhost/img/hotel.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "cssClass": "custom-hotspot",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
        
    }
});

// Make buttons work
document.getElementById('pan-up').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function(e) {
    viewer.toggleFullscreen();
});

document.getElementById('stopAndStart').addEventListener('click', function(e) {
    var startNstop = document.getElementById('stopAndStart');
    if(startNstop.innerHTML == "stop"){
        viewer.stopAutoRotate();
        document.getElementById("stopAndStart").innerHTML="start";
    } else if(startNstop.innerHTML == "start"){
        viewer.startAutoRotate();
        document.getElementById("stopAndStart").innerHTML="stop";
    } 
});


// Switch to sceneId when we click on the li link in the left window 
document.getElementById('library').addEventListener('click', function(e) {
    viewer.loadScene('library');
    //autoRotate(true);
});

document.getElementById('test').addEventListener('click', function(e) {
    viewer.loadScene('test');
   // autoRotate(false);
});

document.getElementById('garthen').addEventListener('click', function(e) {
    viewer.loadScene('garthen');
   // autoRotate(false);
});
document.getElementById('home').addEventListener('click', function(e) {
    viewer.loadScene('circle');
   // autoRotate(false);
});

function autoRotate(condition){
    if(condition == true){
        viewer = pannellum.viewer('panorama', {
        "autoLoad": true,
        "autoRotate": -2,
        "showControls": false,
        "sceneFadeDuration": 1000
        });
    } else {
         viewer = pannellum.viewer('panorama', {
        "autoLoad": true,
        "showControls": false,
        "sceneFadeDuration": 1000
        });
    }
    
}
// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}