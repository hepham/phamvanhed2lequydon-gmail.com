var bg =function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.x=0;

    var self= this;

    
 this.init = function(){
       this.loadImage();

    }
    this.loadImage =function(){
      this.image=new Image();
     this.image.onload = function(){
         self.loaded = true;

      }
    this.image.src='bg.jpg';
    }
    
    this.update=function(){
        if(this.game.gameover){
            return;
        }
        this.x--;
        if(this.x==-250){
            this.x=0;
       }
        
    }
    
    this.draw=function(){
       if(self.loaded==false){
            return;
        } 

        self.game.context.drawImage(this.image,this.x,0);
        self.game.context.drawImage(this.image,this.x+250,0);

      
    }
}