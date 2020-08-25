class Chain{
    constructor(a,b){
        var options={
            bodyA:a,
            bodyB:b,
            length:10,
            stiffness:1
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var B=this.chain.bodyB.position;
        var A=this.chain.bodyA.position;
        strokeWeight(5)
        line(A.x,A.y,B.x,B.y);
    }
}