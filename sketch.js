function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  colorMode(RGB);
  noStroke();
}

function draw() {
  background(200);

  var colR;
  var colG;
  var colB;




  //SHAPES

  var heilà = 50;


  for(var x = 0; x < ((width/100)*100); x+=heilà) {
  for(var y = 0; y < ((height/100)*100); y+=heilà){


      var hey = 20;


      if(mouseX > x - 40 && mouseX < x + 10 && mouseY > y - 40 && mouseY < y + 10){
        hey = hey*5;
      }
      else if(mouseX > x - 90 && mouseX < x + 60 && mouseY > y - 90 && mouseY < y + 60){
        hey = hey*4;
        }
        else if(mouseX > x - 140 && mouseX < x + 110 && mouseY > y - 140 && mouseY < y + 110){
          hey = hey*3;
          }
          else if(mouseX > x - 190 && mouseX < x + 160 && mouseY > y - 190 && mouseY < y + 160){
            hey = hey*2;
            }
            else if(mouseX > x - 240 && mouseX < x + 210 && mouseY > y - 240 && mouseY < y + 210){
              hey = hey;
              }
              else if(mouseX > x - 290 && mouseX < x + 260 && mouseY > y - 290 && mouseY < y + 260){
                hey = hey*0.5;
                }

      if (mouseX>(width/2) && mouseY<height/2) {
        var colR = 255;
        var colG = 0;
        var colB = 0;
      }
      else if (mouseX>(width/2) && mouseY>height/2) {
        var colR=0;
        var colG=255;
        var colB=0;
      }
      else if (mouseX<(width/2) && mouseY>height/2) {
        var colR=0;
        var colG=0;
        var colB=255;
      }
      else {
        var colR=255;
        var colG=255;
        var colB=255;
      }


      fill(colR,colG,colB);
      stroke(40);
      strokeWeight(1);

      ellipse(x, y, hey);

    }
  }
}
