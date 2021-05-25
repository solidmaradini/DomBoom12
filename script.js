let padright1 = document.querySelector (".padright1");
let padright2 = document.querySelector (".padright2");
let padright3 = document.querySelector (".padright3");
let padcenter1 = document.querySelector (".padcenter1");
let padleft1 = document.querySelector (".padleft1");
let padleft2 = document.querySelector (".padleft2");
let padleft3 = document.querySelector (".padleft3");
let padcenter2 = document.querySelector (".padcenter2");


let sonidoBoom = new Audio("hitthedoomboom/boom.wav");
let sonidoClap = new Audio("hitthedoomboom/clap.wav");
let sonidoHihat = new Audio("hitthedoomboom/hihat.wav");
let sonidoKick = new Audio("hitthedoomboom/kick.wav");
let sonidoOpenhat = new Audio("hitthedoomboom/openhat.wav");
let sonidoRide = new Audio("hitthedoomboom/ride.wav");
let sonidoSnare = new Audio("hitthedoomboom/snare.wav");
let sonidoTink = new Audio("hitthedoomboom/tink.wav")
let sonidoTom = new Audio("hitthedoomboom/tom.wav");

padright1.addEventListener("click", function(){
    sonidoBoom.play();
    sonidoBoom.currentTime = 0;
});

padright2.addEventListener("click", function(){
    sonidoClap.play();
    sonidoClap.currentTime = 0;
});

padright3.addEventListener("click", function(){
    sonidoHihat.play();
    sonidoHihat.currentTime = 0;
});

padcenter1.addEventListener("click", function(){
    sonidoKick.play();
    sonidoKick.currentTime = 0;
});

padleft1.addEventListener("click", function(){
    sonidoOpenhat.play();
    sonidoOpenhat.currentTime = 0;
});


padleft2.addEventListener("click", function(){
    sonidoRide.play();
    sonidoRide.currentTime = 0;
});

padleft3.addEventListener("click", function(){
    sonidoSnare.play();
    sonidoSnare.currentTime = 0;
});


padcenter2.addEventListener("click", function(){
    sonidoTink.play();
    sonidoTink.currentTime = 0;
});


