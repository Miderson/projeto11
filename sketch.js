function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200,0,90);
  fill(255);
  circle(200, 200, 200);
  fill(0);
  circle(150, 170, 30);
  
  line(50,20,350,20);
  triangle(200,200,300,200,250,100)
  circle(mouseX, mouseY, 50)
  if(mouseIsPressed) {
    consele.log(mouseX,mouseY)
  }
}
