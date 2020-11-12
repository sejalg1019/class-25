class Bird extends BaseClass { //extends means inheriting
  constructor(x,y){
    super(x,y,50,50); //passing the values onto the base class
    this.image = loadImage("sprites/bird.png"); //loading the image
  }
  display(){
    var pos = this.body.position; //setting the position
    pos.x = mouseX; //making the x move with the mouse
    pos.y = mouseY; //making the y move with the mouse
    super.display(); //display according to base class
  }
}