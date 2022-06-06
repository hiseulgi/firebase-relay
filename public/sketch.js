// if viewportWidth width > 991
if (window.innerWidth > 991) {
    function setup() {
        var canvas = createCanvas(700, 620);
        canvas.position(380, 5);
        canvas.style('z-index', '-1');
    }

    function draw() {
        const batasAtas = 150;
        const batasBawah = 525;
        const batasMidAtas = 265;
        const batasMidBawah = 400;
        const PMT14 = 110;
        const PMT15 = 240;
        const PMT16 = 370;
        const PMT17 = 500;

        // garis atas bawah sg tebal
        strokeWeight(4);
        line(0, batasAtas, 600, batasAtas);
        line(0, batasBawah, 600, batasBawah);

        // garis PMT14
        strokeWeight(1);
        line(PMT14, batasAtas, PMT14, batasBawah);
        line(PMT14-50, batasAtas-30, PMT14-50, batasMidAtas);
        line(PMT14-50, batasMidBawah, PMT14-50, batasBawah+30);
        line(PMT14-50, batasMidBawah, PMT14, batasMidBawah);
        line(PMT14-50, batasMidAtas, PMT14, batasMidAtas);

        // garis PMT15
        strokeWeight(1);
        line(PMT15, batasAtas, PMT15, batasBawah);
        line(PMT15-50, batasAtas-30, PMT15-50, batasMidAtas);
        line(PMT15-50, batasMidBawah, PMT15-50, batasBawah+30);
        line(PMT15-50, batasMidBawah, PMT15, batasMidBawah);
        line(PMT15-50, batasMidAtas, PMT15, batasMidAtas);

        // garis PMT16
        strokeWeight(1);
        line(PMT16, batasAtas, PMT16, batasBawah);
        line(PMT16-50, batasAtas-30, PMT16-50, batasMidAtas);
        line(PMT16-50, batasMidBawah, PMT16-50, batasBawah+30);
        line(PMT16-50, batasMidBawah, PMT16, batasMidBawah);
        line(PMT16-50, batasMidAtas, PMT16, batasMidAtas);
        

        // garis PMT17
        strokeWeight(1);
        line(PMT17, batasAtas, PMT17, batasBawah);
        line(PMT17-50, batasAtas-30, PMT17-50, batasMidAtas);
        line(PMT17-50, batasMidBawah, PMT17-50, batasBawah+30);
        line(PMT17-50, batasMidBawah, PMT17, batasMidBawah);
        line(PMT17-50, batasMidAtas, PMT17, batasMidAtas);


        // TEXT
        // text kanan kiri
        textSize(18);
        text('BUS A', 600+20, 155);
        text('BUS B', 600+20, 530);

        // text kecil
        textSize(12);
        text('STG 2.0', PMT14-70, batasAtas-40);
        text('FUTURE', PMT14-70, batasBawah+50);

        text('GTG 2.3', PMT15-70, batasAtas-40);
        text('BAWEN II', PMT15-70, batasBawah+50);

        text('GTG 2.2', PMT16-70, batasAtas-40);
        text('BAWEN I', PMT16-70, batasBawah+50);

        text('GTG 2.1', PMT17-70, batasAtas-40);
        text('TRAFO PS', PMT17-70, batasBawah+50);
    }

}if (window.innerWidth < 991) {
    function setup() {
        var canvas = createCanvas(700, 620);
        canvas.position(0, 300);
        canvas.style('z-index', '-1');
    }

    function draw() {
        const batasAtas = 150;
        const batasBawah = 525;
        const batasMidAtas = 265;
        const batasMidBawah = 400;
        const PMT14 = 110;
        const PMT15 = 240;
        const PMT16 = 370;
        const PMT17 = 500;

        // garis atas bawah sg tebal
        strokeWeight(4);
        line(0, batasAtas, 600, batasAtas);
        line(0, batasBawah, 600, batasBawah);

        // garis PMT14
        strokeWeight(1);
        line(PMT14, batasAtas, PMT14, batasBawah);
        line(PMT14-50, batasAtas-30, PMT14-50, batasMidAtas);
        line(PMT14-50, batasMidBawah, PMT14-50, batasBawah+30);
        line(PMT14-50, batasMidBawah, PMT14, batasMidBawah);
        line(PMT14-50, batasMidAtas, PMT14, batasMidAtas);

        // garis PMT15
        strokeWeight(1);
        line(PMT15, batasAtas, PMT15, batasBawah);
        line(PMT15-50, batasAtas-30, PMT15-50, batasMidAtas);
        line(PMT15-50, batasMidBawah, PMT15-50, batasBawah+30);
        line(PMT15-50, batasMidBawah, PMT15, batasMidBawah);
        line(PMT15-50, batasMidAtas, PMT15, batasMidAtas);

        // garis PMT16
        strokeWeight(1);
        line(PMT16, batasAtas, PMT16, batasBawah);
        line(PMT16-50, batasAtas-30, PMT16-50, batasMidAtas);
        line(PMT16-50, batasMidBawah, PMT16-50, batasBawah+30);
        line(PMT16-50, batasMidBawah, PMT16, batasMidBawah);
        line(PMT16-50, batasMidAtas, PMT16, batasMidAtas);
        

        // garis PMT17
        strokeWeight(1);
        line(PMT17, batasAtas, PMT17, batasBawah);
        line(PMT17-50, batasAtas-30, PMT17-50, batasMidAtas);
        line(PMT17-50, batasMidBawah, PMT17-50, batasBawah+30);
        line(PMT17-50, batasMidBawah, PMT17, batasMidBawah);
        line(PMT17-50, batasMidAtas, PMT17, batasMidAtas);


        // TEXT
        // text kanan kiri
        textSize(18);
        text('BUS A', 600+20, 155);
        text('BUS B', 600+20, 530);

        // text kecil
        textSize(12);
        text('STG 2.0', PMT14-70, batasAtas-40);
        text('FUTURE', PMT14-70, batasBawah+50);

        text('GTG 2.3', PMT15-70, batasAtas-40);
        text('BAWEN II', PMT15-70, batasBawah+50);

        text('GTG 2.2', PMT16-70, batasAtas-40);
        text('BAWEN I', PMT16-70, batasBawah+50);

        text('GTG 2.1', PMT17-70, batasAtas-40);
        text('TRAFO PS', PMT17-70, batasBawah+50);
    }

}

