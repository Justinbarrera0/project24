class Paper{

    constructor(x,y,radius){

    var options = {
        friction: 0.5,
        isStatic:false,
        density: 1.2,
        restitution: 0.3,
    }

this.body = Bodies.circle(x,y,70, options);
this.radius = 70;

World.add(world, this.body);

    }

display(){
    var pos = this.body.position;

push()
translate(pos.x,pos.y)

    ellipseMode(RADIUS)
    strokeWeight(4)
    stroke("green")
    fill(255)
    ellipse(0,0,this.raduis,this.radius)
    pop()
}





}