"use strict";var navigation=document.querySelector("nav"),headerSection=document.querySelector("header");window.addEventListener("scroll",function(){window.pageYOffset>headerSection.clientHeight?navigation.classList=["floating_header"]:navigation.classList=[]});var links,buttons,players,lastPlayed,scroll=new SmoothScroll('a[href*="#"]',{speed:500,speedAsDuration:!0}),settings={trackHover:!0,trackClick:!0,trackButtons:!0,newTab:!0},sounds=["204844","204849","204918","204959","205008","205021","205026","205033","205044","205053","205102","205106"];function trackElements(e,t){Array.prototype.slice.call(document.querySelectorAll(t)).forEach(function(e){settings.trackClick&&e.addEventListener("click",function(){playRandomSound()}),settings.trackHover&&(e.addEventListener("mouseenter",function(){playRandomSound()}),e.addEventListener("mouseleave",function(){stopSound(lastPlayed)}),e.addEventListener("touchmove",function(){stopSound(lastPlayed)})),settings.newTab&&e.setAttribute("target","_blank")})}function fetchAudio(e,t){fetch(e).then(function(e){e.status}).catch(function(e){console.error("Damn it! Error loading the sound file :( ",e)})}function fetchAndGeneratePlayer(){sound,sound;sounds.forEach(function(e){fetchAudio(e,"mp3"),fetchAudio(e,"ogg")})}function generateAudioPlayer(e){var t=document.createElement("audio"),n=document.createElement("source"),o=document.createElement("source"),r="./sounds/mp3/"+e+".mp3",a="./sounds/ogg/"+e+".ogg";t.setAttribute("preload",!0),t.style.display="none",n.setAttribute("type","audio/mpeg"),o.setAttribute("type","audio/ogg"),n.setAttribute("src",r),o.setAttribute("src",a),n.addEventListener("error",function(){console.error("😶 D'oh! The mp3 file "+n.src+" is wrong!")}),o.addEventListener("error",function(){console.error("😶 D'oh! The ogg file "+o.src+" is wrong!")}),t.appendChild(n),t.appendChild(o),document.body.appendChild(t),t.controls=!1,t.load()}function playSound(e){e&&(0!==e.currentTime&&(e.currentTime=0),e.play())}function stopSound(e){e&&0!==e.currentTime&&(e.pause(),e.currentTime=0)}function randomNum(e,t){return Math.floor(Math.random()*(t-e+1))+e}function addPlayers(){sounds.forEach(function(e){generateAudioPlayer(e)}),players=Array.prototype.slice.call(document.querySelectorAll("audio"))}function playRandomSound(){var e=randomNum(0,players.length-1),t=players[e];playSound(t),lastPlayed=t}function initiateOperationFart(){addPlayers(),trackElements("links","a"),settings.trackButtons&&trackElements("buttons","button")}initiateOperationFart();