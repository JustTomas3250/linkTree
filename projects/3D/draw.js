function vycistit(){
    //ctx.beginPath();
    ctx.fillStyle = barvaStropu;
    ctx.fillRect(0, 0, 600, 300);
    //ctx.fill();

    //ctx.beginPath();
    ctx.fillStyle = barvaPodlahy;
    ctx.fillRect(0, 300, 600, 300);
    //ctx.fill();
}

function stena(dist, pos, barva, naMape){
    let velikostObrazovky = 600;
    let scaleSt = scale;
    
    let velikostSteny = Math.min(velikostObrazovky, scaleSt / dist);
    let y1 = (velikostObrazovky / 2) - (velikostSteny / 2);
    let y2 = (velikostObrazovky / 2) + (velikostSteny / 2);

    ctx.beginPath();
    ctx.moveTo(pos * 2, y1);
    ctx.lineTo(pos * 2, y2);

    switch(vykreslovani){
        case 1:
            switch(barva){
                case 0: ctx.strokeStyle = "red"; break;
                case 1: ctx.strokeStyle = "green"; break;
                case 2: ctx.strokeStyle = "blue"; break;
                case 3: ctx.strokeStyle = "yellow"; break;
            }
            break;
        case 2:
            let b = 0;
            switch(barva){
                case 0: b = 200; break;
                case 1: b = 50; break;
                case 2: b = 150; break;
                case 3: b = 100; break;
            }

            ctx.strokeStyle = "rgb(" + b + ", " + b + ", " + b + ")";
            break;
        case 3:
            barva = Math.pow((maxView - dist) / maxView, 4) * 50;
            ctx.strokeStyle = "rgb(" + barva + ", " + barva + ", " + barva + ")";
            break;
    }
    
    ctx.lineWidth = 2;
    ctx.stroke();
}