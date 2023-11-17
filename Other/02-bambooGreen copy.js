
// Box width
var bw = 400;// edge = 40 -> 10 cells
// Box height
var bh = 400;
// Padding
var p = 5;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawBoard(){
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "blue";
    context.stroke();
}


drawBoard();