'use strict';

// var socket = io.connect('http://192.168.0.121:4000');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');  

function initializeCanvas(width, height){    
    canvas.width = width;
    canvas.height = height;    
}


function drawCarrom(){    
    var img = new Image();
    img.src = './assets/carrom-board.png';
    img.addEventListener('load', function(){
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }, false);    
}

function drawGotti(gottiConfig){
    if(gottiConfig){
        for(let i=0; i<gottiConfig.t1.num; i++){
                            
        }
        for(let i=0; i<gottiConfig.t2.num; i++){
            
        }
    }
}

initializeCanvas(window.innerWidth/2.5, window.innerWidth/2.5);
drawCarrom();
drawGotti({
    t1: {
        color: 'yellow',
        radius: 10,
        num: 10
    },
    t2: {
        color: 'blue',
        radius: 10,
        num: 10
    },
    striker: {
        color: 'pink',
        radius: 20
    }
});