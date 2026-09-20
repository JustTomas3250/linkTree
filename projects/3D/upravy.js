var vykreslovani = 2;
var barvaPodlahy = "#550000";
var barvaStropu = "black";
var fov = 60;
var scale = 500;
var rPohyb = 0.05;

tlacitkaProstredi();

function setVykreslovani(a){
    vykreslovani = a;
}

function setBarvaPodlahy(){
    barvaPodlahy = document.querySelector("#barvaPodlahy").value;
}

function setBarvaStropu(){
    barvaStropu = document.querySelector("#barvaStropu").value;
}

function tlacitkaProstredi(){
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let out = '<input type="checkbox" onclick="setProstredi(' + i + ', ' + j + ')" id="r' + i + 's' + j + '"';
            if(i == 0 || i == 9 || j == 0 || j == 9)
                out += "disabled ";
            if(mapa[i][j] == 1)
                out += "checked";
            out += ">";

            document.querySelector("#prostredi").innerHTML += out;
        }
    }
}

function setProstredi(x, y){
    let val = 0;
    if(document.querySelector("#r" + x + "s" + y).checked)
        val = 1;
    mapa[x][y] = val;
}

function setFOV(){
    fov = document.querySelector("#fov").value;
}

function setScale(){
    scale = document.querySelector("#scale").value;
}

function setRPohyb(){
    rPohyb = document.querySelector("#rPohyb").value / 100;
}