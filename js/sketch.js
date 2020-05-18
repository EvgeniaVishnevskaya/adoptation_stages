function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas");
    background(0);
}

function draw() {
    fill(0, 5);
    noStroke();
    rect(0, 0, windowWidth, windowHeight);

    dotX = random(0, width);
    dotY = random(0, height);
    colr = random(0, 255);
    colg = random(0, 0);
    colb = random(0, 255);


    noStroke();
    fill(colr,colg,colb, 100)
    ellipse(dotX, dotY,30,30);

    noStroke();
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
