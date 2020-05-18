function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas");
    background(0);
}
let ball ={
  x: 200,
  y: 300,
  xspeed: 15,
  yspeed: -14
}

function draw() {
  background(0);

  display();
  move();
  bounce()
}
function display() {
  fill(random(0, 255));
  ellipse (ball.x, ball.y, 240, 240);
}
function move(){
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

function bounce(){
  if (ball.x > width || ball.x <0){
    ball.xspeed = ball.xspeed * -1;
      }
  if (ball.y > height || ball.y < 0 ){
    ball.yspeed = ball.yspeed * -1;
      }
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
