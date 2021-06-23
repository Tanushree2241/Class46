class Player {
    constructor() {
        this.spot = 0;
        this.playerName = null;
        this.dicenumber = 0;
        this.index = 1;
    }

    roll(){
      this.dicenumber = flow(random(1,6));
      var check = this.spot + this.dicenumber;
      if(check<=99){
          this.spot += this.dicenumber;
      }
    }

    getName(name) {
        this.playerName = name;

    }

    show(tiles,Player1,Player2){
        if(this.spot<=99){
            var current = tiles[this.spot];
            var center = current.getCenter();
            ellipse(center[0],center[1],32,32);
            
        }
    }
}