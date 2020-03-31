var bird=function(game)
{

    this.game=game;
    this.images=[];
 
    this.img1Loaded=false;
    this.img2Loaded=false;
    this.img3Loaded=false;
    this.currentImage=null;
    this.currentImageIndex=0;
    this. currentFrame=0;
    this.x=50;
    this.y=0;
    this.speedY=0;
    this.giatoc=0.5;
    this.direction='down';
 
    self=this;
    this.init=function(){
        this.loadImages();


    }
    this.loadImages=function(){
        var img1=new Image();
        var img2=new Image();
        var img3=new Image();

        img1.onload=function(){
            self.img1Loaded=true;
            self.currentImage=img1;
            self.images.push(img1);

        }

        img2.onload=function(){
            self.img2Loaded=true;
             self.images.push(img2);

        }

        img3.onload=function(){
            self.img3Loaded=true;
            self.images.push(img3);

        }
        img1.src='bird1.png';
        img2.src='bird2.png';
        img3.src='bird3.png';

        
    }

    this.update=function(){
        if (!self.img1Loaded|| !self.img2Loaded || !self.img3Loaded){
            return;
        }
        
        self.currentFrame++;
        console.log('currentframe');
        if (self.currentFrame%5==0){
            self.changeImage();
            
        }
         //vận tốc rơi của con chim
        
        if(this.y<=360){
          if(this.direction=='down'){
        this.speedY+=this.giatoc;
        this.y+=this.speedY;
        }
        else{
            this.speedY-=this.giatoc;
        }
    }
        if(this.y>360) {this.y=360;}

        if(this.y>=360) 
           {this.game.gameover=true;}
          this. checkhitpipe();

        
         
       

        }
        this.checkhitpipe=function(){
            if(
                (this.x+30>this.game.pipe.x && 
                this.x<this.game.pipe.x+55)
                &&
                ((this.y<this.game.pipe.y-120)||
                (this.y+21>this.game.pipe.y)
            )
            )
            {this.game.gameover=true;}
        }
        this.flap=function(){
            if(this.game.gameover){return;}
            this.speedY=-5;}

        this.changeImage=function(){
            if(this.game.gameover){return;}
            if(this.currentImageIndex==2){
                this.currentImageIndex=0;
            } 
            else{
                this.currentImageIndex++;
            }
            this.currentImage=this.images[this.currentImageIndex];
        }

    
    this.draw=function(){
           if (self.img1Loaded&& self.img2Loaded && self.img3Loaded){
               self.game.context.drawImage(self.currentImage,this.x,this.y);}
           }
        
}


