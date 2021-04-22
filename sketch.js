var bgImg,;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    mouseImg1 = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");

    catImg1 = loadImage("cat1.png");
    catImg2 = loadImage("cat2.png");
    catImg3 = loadImage("cat3.png");
    catImg4 = loadImage("cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,650,50,50);
    cat.addImage("cat4.png",catImg4);

    mouse = createSprite(200,650,50,50);
    mouse.addImage("mouse4.png",mouseImg4);

}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseHappy",mouseImg1);
        mouse.changeAnimation("catHAppy",catImg1);

        cat.velocityX = 0;

    }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay =25

        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

    }
    

}
