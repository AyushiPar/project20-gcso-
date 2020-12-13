var fr,mr;
var obj1,obj2,obj3,obj4;
function setup() {
  createCanvas(1200,800);
  fr=createSprite(600, 400, 50, 100);
  mr=createSprite(100,700,100,50);
  fr.shapeColor="green";
  mr.shapeColor="green";
  
  obj1=createSprite(100,100,50,50);
  obj1.shapeColor="green";
  obj2=createSprite(200,100,50,50);
  obj2.shapeColor="green";
  obj3=createSprite(300,100,50,50);
  obj3.shapeColor="green";
  obj4=createSprite(400,100,50,50);
  obj4.shapeColor="green";

    mr.velocityY=-3;
    obj1.velocityY=+3;
}

function draw() {
  background(0);  
  //mr.x=World.mouseX;
  //mr.y=World.mouseY;
  //console.log(mr.x-fr.x);
  if(istouching(mr,obj1)===true){
   bounceoff(mr,obj1);
  }
  

  drawSprites();
}

