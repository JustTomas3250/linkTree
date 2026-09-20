var keys = {
    "d": false,
    "a": false,
    "w": false,
    "s": false,
    "ArrowLeft": false,
    "ArrowRight": false
}

var pohybLevaInt;
var pohybPravaInt;
var pohybVpredInt;
var pohybVzadInt;
var otocitVlevoInt;
var otocitVpravoInt;

document.addEventListener('keydown', function(event){
    switch(event.key){
        case "d":
            if(!keys["d"]){
                pohybPravaInt = setInterval(pohybPrava, 20);
                keys["d"] = true;
            }
            break;
        case "a":
            if(!keys["a"]){
                pohybLevaInt = setInterval(pohybLeva, 20);
                keys["a"] = true;
            }
            break;
        case "w":
            if(!keys["w"]){
                pohybVpredInt = setInterval(pohybVpred, 20);
                keys["w"] = true;
            }
            break;
        case "s":
            if(!keys["s"]){
                pohybVzadInt = setInterval(pohybVzad, 20);
                keys["s"] = true;
            }
            break;
        case "ArrowLeft":
            if(!keys["ArrowLeft"]){
                otocitVlevoInt = setInterval(otocitVlevo, 20);
                keys["ArrowLeft"] = true;
            }
            break;
        case "ArrowRight":
            if(!keys["ArrowRight"]){
                otocitVpravoInt = setInterval(otocitVpravo, 20);
                keys["ArrowRight"] = true;
            }
            break;
    }
}, false);

document.addEventListener('keyup', function(event){
    switch(event.key){
        case "d":
            clearInterval(pohybPravaInt);
            keys["d"] = false;
            break;
        case "a":
            clearInterval(pohybLevaInt);
            keys["a"] = false;
            break;
        case "w":
            clearInterval(pohybVpredInt);
            keys["w"] = false;
            break;
        case "s":
            clearInterval(pohybVzadInt);
            keys["s"] = false;
            break;
        case "ArrowLeft":
            clearInterval(otocitVlevoInt);
            keys["ArrowLeft"] = false;
            break;
        case "ArrowRight":
            clearInterval(otocitVpravoInt);
            keys["ArrowRight"] = false;
            break;
    }
}, false);

function pohybVpred(){
    let x = Math.cos(otoceni * (Math.PI / 180)) * rPohyb;
    let y = Math.sin(otoceni * (Math.PI / 180)) * rPohyb;
    if(collision(x, y)){
        coords[0] += x;
        coords[1] += y;
    }
}

function pohybVzad(){
    let x = -Math.cos(otoceni * (Math.PI / 180)) * rPohyb;
    let y = -Math.sin(otoceni * (Math.PI / 180)) * rPohyb;
    if(collision(x, y)){
        coords[0] += x;
        coords[1] += y;
    }
}

function pohybLeva(){
    let x = Math.sin(otoceni * (Math.PI / 180)) * rPohyb;
    let y = -Math.cos(otoceni * (Math.PI / 180)) * rPohyb;
    if(collision(x, y)){
        coords[0] += x;
        coords[1] += y;
    }
}

function pohybPrava(){
    let x = -Math.sin(otoceni * (Math.PI / 180)) * rPohyb;
    let y = Math.cos(otoceni * (Math.PI / 180)) * rPohyb;
    if(collision(x, y)){
        coords[0] += x;
        coords[1] += y;
    }
}

function collision(x, y){
    if(mapa[parseInt(coords[0] + x)][parseInt(coords[1] + y)] != 0){
        return false;
    }
    return true;
}

function otocitVlevo(){
    if(otoceni <= 0)
        otoceni = 355;
    else otoceni -= 3;
}

function otocitVpravo(){
    if(otoceni >= 360)
        otoceni -= 355;
    else otoceni += 3;
}