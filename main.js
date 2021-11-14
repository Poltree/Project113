function setup(){
canvas = createCanvas(720,720);
canvas.center();
camera = createCapture(VIDEO);
camera.hide();
color_tint = "";
}
function preload(){

}
function draw(){
fill(255,0,0)
circle(100,100,100,100)
fill(0,255,0)
rect(75,150,50,400)
fill(255,0,0)
circle(100,600,100,100)
fill(0,255,0)
rect(150,575,400,50)
fill(255,0,0)
circle(600,600,100,100)
fill(0,255,0)
rect(575,150,50,400)
fill(255,0,0)
circle(600,100,100,100)
fill(0,255,0)
rect(150,75,400,50)
    image(camera,240,240,240,240);

}

function take_snapshot(){
save("imagemadewithp5.png");
}