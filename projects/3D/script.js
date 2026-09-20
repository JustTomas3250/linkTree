var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false; 

var maxView = 20;

var mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var coords = [1.5, 1.5];
var otoceni = 0;

var zk = [3.5, 3.5, "Images/zk.png"];

setInterval(generovani, 50);

function generovani(){
    vycistit();

    let krok = 0.001;


    //textura(zk, );

    for(let i = 0; i <= 300; i++){
        let deg = (fov / 300) * i - (fov / 2);
        let rad = (deg + otoceni) * (Math.PI / 180);
        let dx = Math.cos(rad);
        let dy = Math.sin(rad);

        let x = coords[0];
        let y = coords[1];

        let vzdalenost = maxView;
        let posledniHodnota = 0;
        let naMape = 0;
        for(let j = 0; j < maxView / krok; j++){
            x += dx * krok;
            y += dy * krok;

            if(mapa[parseInt(x)][parseInt(y)] == 1 || mapa[parseInt(x)][parseInt(y)] == 2){
                vzdalenost = (j * krok) * Math.cos(deg * (Math.PI / 180));
                naMape = mapa[parseInt(x)][parseInt(y)];
                break;
            }

            posledniHodnota = [x, y];

            if(j == (maxView / krok) - 1)
                posledniHodnota = 0;
        }
        
        stena(vzdalenost, i, barvaSteny(posledniHodnota), naMape);
    }
}

function barvaSteny(a){
    if(a == 0)
        return 4;
    let x = a[0] - Math.round(a[0]);
    let y = a[1] - Math.round(a[1]);

    if(Math.abs(x) < Math.abs(y)){
        if(x < 0)
            return 0;
        return 1;
    }
    if(y < 0)
        return 2;
    return 3;
}