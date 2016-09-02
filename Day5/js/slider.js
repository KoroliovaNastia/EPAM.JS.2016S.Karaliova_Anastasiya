var zombiesType = [Zombie.Michael, Zombie.Strong];
var zombies = [];
var endPoint = 860;
var timer;

$(function(){

	$('#btnGenerate').on("click", createZombie);
	$('#btnSlowUp').on("click", slowUp);
	$('#btnGrowOld').on("click", growOld);
	$('#btnExplode').on("click", explode);
	
	timerGenerate = setInterval(generateZombies, 6000);
	timerMove = setInterval(moveZombies, 100);
});

function createZombie(){

	var $randLine = $('.field-line').eq(random(0, 5));
	var randType = random(0, zombiesType.length);
	var randZombie = zombiesType[randType];
	var zombie = new randZombie($randLine, endPoint);
	zombie.subscribe(gameOver);
	zombies.push(zombie);
	
};

function generateZombies(){
	
	createZombie();
	
}

function moveZombies(){

	for(var i = 0; i < zombies.length; i++ ){
	
		zombies[i].doMove();
	
	};

};

function random(min, max){

    return Math.floor((Math.random()*max)+min);
	
};

function gameOver(){

	clearTimeout(timerGenerate);
	clearTimeout(timerMove);
    for(var i = 0; i < zombies.length; i++){
		
        zombies[i].die(false);
    }
	
    zombies = [];
	$(".game-over").css("display", "block");

}

function slowUp(){
	
	for (var i = 0; i < zombies.length; i++ ){
			
			zombies[i].mySpeed = zombies[i].slowSpeed; 
			
		}
	
	timerMove = setInterval(moveZombies ,100)
	clearInterval(timerGenerate);
	
	setTimeout(function(){
		
		clearInterval(timerMove);
		for (var i = 0; i < zombies.length; i++ ){
			
			zombies[i].mySpeed = zombies[i].speed; 
			
		}
		
		timerGenerate = setInterval(generateZombies, 6000);
		
	}, 10000)
	
	freezBtn($('#btnSlowUp'), slowUp);
}

function growOld(){
	
	var timerId = setInterval(function(){
		
		for(var i = 0; i < zombies.length; i++){
			
			zombies[i].health(1);
			
		}
		
	},1000)
	
	clearInterval(timerGenerate);
	
	setTimeout(function(){
		
		clearInterval(timerId);
		timerGenerate = setInterval(generateZombies, 6000);
		
	}, 10000)
	
	freezBtn($('#btnGrowOld'), growOld);
	
	if(! $("div").is(".zombie")){
		
		gameOver();
		
	}
}

function explode(){
	
	for(var i = 0; i < zombies.length; i++){
			
		zombies[i].health(15);
			
	}
	
	if(! $("div").is(".zombie")){
		
		gameOver();
		
	}
}

function freezBtn(btn, func){
	
	
	btn.off("click");
	btn.css({"color": "lightgrey", "cursor": "default"});
	setTimeout(function(){
		
		btn.on("click", func);
		btn.css({"color": "black", "cursor": "pointer"});
		
	}, 10000)
}