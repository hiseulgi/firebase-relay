// if viewportWidth width > 991
if (window.innerWidth > 991) {
    function setup() {
        var canvas = createCanvas(500, 620);
        canvas.position(432, 5);
        canvas.style('z-index', '-1');
    }
    
    function draw() {
        strokeWeight(4);
        line(40, 150, 400, 150);
        line(40, 525, 400, 525);
    
        strokeWeight(1);
        line(200, 150, 200, 525);
        line(300, 150, 300, 525);
    
        // garis vertikal pinggir
        line(150, 125, 150, 265);
        line(350, 125, 350, 265);
        line(150, 550, 150, 410);
        line(350, 550, 350, 410);
    
        // garis horizont
        line(150, 265, 200, 265);
        line(350, 265, 300, 265);
        line(150, 410, 200, 410);
        line(350, 410, 300, 410);
    
        // text
        textSize(18);
        text('BUS A', 410, 155);
        text('BUS B', 410, 530);
    
        textSize(12);
        text('UNIT 1', 135, 120);
        text('UNIT 2', 335, 120);
        text('TRAFO 1', 125, 565);
        text('TRAFO 2', 325, 565);
    }
    
}
