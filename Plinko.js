class Plinko{
    constructor(x, y) { 
    var options = {
         isStatic: true, 
         'restitution':0.8,
          'friction':0.3, 
          'density':1.0
        }
     this.body = Bodies.circle(x, y, 10,options); 
     this.radius = 60; 
    
      World.add(world, this.body);
    
   } 
      display(){ 
          var pos =this.body.position; 
          fill("red")
           circle(pos.x, pos.y,20); 
        

            
       }
    } 