class Tiles {
    constructor(x,y,wh,next,index) {
       this.x = x;
       this.y = y;
       this.wh = wh;
       this.next = next;
       this.index = index;
       
    }

    display() {
        if(this.index%2 ===0){
          fill("red");
        }else{
            fill("white");
        }
        rect(this.x , this.y , this.wh , this.wh);
        fill("black");
        textSize(50);
        text(this.next ,this.x+7 , this.y+50); 
    }

    getCenter() {
        var cx = this.x+this.wh/2;
        var cy = this.y+this.wh/2;
        return[cx,cy];
    }
}