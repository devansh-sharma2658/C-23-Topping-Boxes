class Box {
    constructor(x,y,width,height) {

        var body_option = {
            restitution : 1.0
        }        
        this.body = Bodies.rectangle(x,y,width,height,body_option);
        this.width = width;
        this.height = height;

        World.add(world,this.body)
    }

    display() {

    var pos =  this.body.position; 
    fill ("red");  
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height); 
    }
}