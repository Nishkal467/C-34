class Fly {
    constructor(bodyA,pointB) 
      {
      
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10,
        }
        
        this.throw = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.throw);
        }
        fly(){
            this.throw.bodyA=null;
        }
        launch(bodyA){
            this.throw.bodyA=bodyA;
        }
        display(){

        }
    }