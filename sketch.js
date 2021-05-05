var bgImg;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");

    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,650,100,100);
    cat.addImage("cat4.png",catImg4);
    cat.scale = 0.2;

    mouse = createSprite(200,650,100,100);
    mouse.addImage("mouse4.png",mouseImg4);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseHappy",mouseImg1);
        mouse.changeAnimation("mouseHappy");

        cat.addAnimation("catHappy",catImg1);
        cat.changeAnimation("catHappy");


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
        cat.velocityX = -3;

    }
    

}
