class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
      this.title = createElement('h2');
      this.reset = createButton('reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Laberinto encantado");
      this.title.position(displayWidth/2 - 50, 0);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-300,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        //this.button.hide();
        this.button.position(displayWidth/2 + 30, displayHeight/2 + 50);
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("¡Hola " + player.name + "! /n ayuda a el gato mistico a cruzar el laberinto para poder /n sefs")
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      })
    }
  }