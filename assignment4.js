var brushProperties = {
    color: 'black',
    height: 5
}

var colorButtons = document.getElementsByClassName('color');
for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', pickColor);

}
var clickScreen = document.getElementById('displayscreen');
clickScreen.addEventListener('mousemove', startDrawing);


function pickColor(e) {
    brushProperties.color = e.target.id;

}

function startDrawing(e) {
    if (event.buttons == 1) {
        var paint = document.getElementById('displayscreen');
        var draw = document.createElement('div');
        paint.appendChild(draw);

        var x = e.clientX;
        var y = e.clientY;
        var canvasX = paint.getBoundingClientRect().x;
        var canvasY = paint.getBoundingClientRect().y;

        draw.style.height = "5px";
        draw.style.width = "5px";

        draw.style.backgroundColor = brushProperties.color;
        draw.style.left = (x - canvasX) + "px";
        draw.style.top = (y - canvasY) + "px";
        draw.style.position = "absolute";

    }

}

function bigger() {
    if (brushProperties.height < 50) {
        brushProperties.height = brushProperties + 3

    } else {
        brushProperties.height = brushProperties.height

    }
}

function smaller() {
    if (brushProperties.height > 5) {
        brushProperties.height = brushProperties.height - 4

    } else {
        brushProperties = brushProperties.height

    }
}





