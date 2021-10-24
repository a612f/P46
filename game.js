class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        /*player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }*/
        form = new Form();
        form.display();
      }
  
      edges = createEdgeSprites();
        wall1 = createSprite(600, 680, 40, 200);
	    wall1.shapeColor = "green";

	wall2 = createSprite(400, 400, 40, 200);
	wall2.shapeColor = "green";

	wall3 = createSprite(214, 284, 200, 40);
	wall3.shapeColor = "green";

	wall4 = createSprite(224, 144, 200, 40);
	wall4.shapeColor = "green";

	wall5 = createSprite(28, 144, 40, 200);
	wall5.shapeColor = "green";

	wall6 = createSprite(560, 217, 200, 40);
	wall6.shapeColor = "green";

	wall7 = createSprite(210, 568, 40, 200);
	wall7.shapeColor = "green";

	wall8 = createSprite(330, 648, 200, 40);
	wall8.shapeColor = "green";

	wall9 = createSprite(582, 176, 200, 40);
	wall9.shapeColor = "green";

	wall10 = createSprite(140, 64, 40, 200);
	wall10.shapeColor = "green";

	wall11 = createSprite(780, 640, 40, 200);
	wall11.shapeColor = "green";

	wall12 = createSprite(150, 470, 200, 40);
	wall12.shapeColor = "green";

	wall13 = createSprite(88, 720, 40, 200);
	wall13.shapeColor = "green";

	wall14 = createSprite(312, 132, 36, 140);
	wall14.shapeColor = "green";

	wall15 = createSprite(720, 310, 200, 40);
	wall15.shapeColor = "green";

	wall16 = createSprite(44, 370, 200, 30);
	wall16.shapeColor = "green";

	wall17 = createSprite(200, 780, 200, 40);
	wall17.shapeColor = "green";

	wall18 = createSprite(410, 100, 40, 200);
	wall18.shapeColor = "green";

	wall19 = createSprite(600, 20, 200, 40);
	wall19.shapeColor = "green";

	wall20 = createSprite(780, 100, 40, 200);
	wall20.shapeColor = "green";

	wall21 = createSprite(400, 545, 200, 20);
	wall21.shapeColor = "green";

	wall22 = createSprite(500, 300, 20, 120);
	wall22.shapeColor = "green";

	gato = createSprite(750,770,20,20);

	premio = createSprite(10,10);
    }
  
    play(){
      form.hide();
      background(0);

  	if(keyDown("up")) {
	gato.velocityX = 0;
	gato.velocityY = -2;
  	}
	if (keyDown("down")) {
	gato.velocityX = 0;
	gato.velocityY = 2;
  	}
	if (keyDown("left")) {
	gato.velocityX = -2;
	gato.velocityY = 0;
  	}
	if (keyDown("right")) {
	gato.velocityX = 2;
	gato.velocityY = 0;
  	}

	gato.collide(edges);
	gato.bounceOff(wall1);
	gato.bounceOff(wall3);
	gato.bounceOff(wall4);
	gato.bounceOff(wall6);
	gato.bounceOff(wall10);
	gato.bounceOff(wall12);
	gato.bounceOff(wall15);
	gato.bounceOff(wall16);
	gato.bounceOff(wall18);
	gato.bounceOff(wall20);
	gato.bounceOff(wall22);
	  
		
	if (gato.isTouching(wall5) || (gato.isTouching(wall7) || (gato.isTouching(wall8) || (gato.isTouching(wall9) || (gato.isTouching(wall11) || (gato.isTouching(wall13) || (gato.isTouching(wall14) || (gato.isTouching(wall17) || ((gato.isTouching(wall2) || gato.isTouching(wall19)) || gato.isTouching(wall21)))))))))) {
		gato.x = 795;
		gato.y = 795;
	}
		
	/*if (gato.isTouching(square)) {
		textSize(50);
		text("GANASTE", 140, 200);
	}*/

	textSize(16);
	text("INICIO", 750, 790);	

  drawSprites();
      /*Player.getPlayerInfo();
      player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
  
        image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance >3860){
        gameState = 2;
        player.rank += 1;
        Player.updateCarsAtEnd(player.rank);
      }
      drawSprites();*/
    }
  
    end(){
      console.log("GAME ENDED");
      console.log(player.rank);
    }
  }
  