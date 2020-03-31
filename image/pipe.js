var pipe =function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x=300;
    this.y=200;


    var self= this;

    
 this.init = function(){
       this.loadImage();

    }
    this.loadImage =function(){
      this.image=new Image();
     this.image.onload = function(){
         self.loaded = true;

      }
    this.image.src='cot.png';
    }
    console.log('imageload');
    this.update=function(){
        if(this.game.gameover){
            return;
        }
        this.x-=2;
        if(this.x==-50){
            this.x=300;
            this.y=Math.floor(Math.random(0) * Math.floor(350));
       }
        
    }
    
    this.draw=function(){
       if(self.loaded==false){
            return;
        } 

        self.game.context.drawImage(this.image,this.x,this.y-100-250);
        self.game.context.drawImage(this.image,this.x,this.y);

      
    }
}