class Rope{
    constructor(bodyA,bodyB){
     
        var apt = {
            stiffness:0.4,
            length:10,
            bodyA:bodyA,
            bodyB:bodyB,
        }
        
        this.rope = constrant.create(apt);
        World.add(world,this.rope)

}

        display(){
            strokeWeight(3)
            line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
        }

}