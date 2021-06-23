class Form {
constructor() {
    this.button = createButton("Dice");
    this.diceNumber = createElement("h1");
    this.player1Spot = createElement("h2");
    this.player2Spot = createElement("h2");
}

display() {
  this.button.position(width+100,100);
  this.button.style('color', 'yellow');
  this.button.style('font-size', '100px');
  this.button.style('width', '220px');
  this.button.style('height', '200px');
  //this.button.style('background-color', 'green');

  this.button.mousePressed(()=>{ 
    this.diceNumber.html("1");
    this.diceNumber.position(width+500,50);
    this.diceNumber.style('font-size', '80px');

    this.player1Spot.html("Player1 : ");
    this.player1Spot.position(width+500,200);
    this.player1Spot.style('font-size', '30px');

    this.player2Spot.html("Player2 : ");
    this.player2Spot.position(width+500,250);
    this.player2Spot.style('font-size', '30px');
  });
}

}