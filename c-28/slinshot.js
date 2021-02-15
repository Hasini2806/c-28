class slingshot {
    constructor (bodyA,pointB) {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
    
        }
        
       this.body = Constrained.create(options);
       this.pointB=pointB;
        World.add(world,this.body);
    
    }
    fly(){
this.body.bodyA = null
    }

    display(){
        if(this.body.bodyA){
        var pointA= this.body.bodyA.position
        var pointB=this.pointB
        stroke("blue")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
     }
    }
    
}