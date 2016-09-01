var zombiesType = [Zombie.Michael, Zombie.Strong];
var zombies = [];
var endPoint = 860;
var timer;

$(function(){

	$('#btnGenerate').on("click", createZombie);
	$('#btnSlowUp').on("click", slowUp);
	$('#btnGrowOld').on("click", growOld);
	$('#btnExplode').on("click", explode);
	
	timer = setInterval(moveZombies, 100);
});

function createZombie(){

	var $randLine = $('.field-line').eq(random(0, 5));
	var randType = random(0, zombiesType.length);
	var randZombie = zombiesType[randType];
	//$randLine.append('<div class=\"zombie michael\"></div>');

	var zombie = new randZombie($randLine, endPoint);
	zombie.subscribe(gameOver);
	zombies.push(zombie);
	// zombie.type = $randZombie;
	// zombie.addClass($ranZombie);
	
};

function moveZombies(){

	for(var i = 0; i < zombies.length; i++ ){
	
		zombies[i].doMove();
	
	};

};

function random(min, max){

    return Math.floor((Math.random()*max)+min);
	
};

function gameOver(){

	clearTimeout(timer);
    for(var i = 0; i < zombies.length; i++){
        zombies[i].die(false);
    }
    zombies = [];
$(".game-over").css("display", "block");

}

function slowUp(){
	
	
	
}

function growOld(){
	
	var timerId = setInterval(function(){
		
		for(var i = 0; i < zombies.length; i++){
			
			zombies[i].health(1);
			
		}
		
	},1000)
	
	setTimeout(function(){
		
		clearInterval(timerId);
		
	}, 10000)
}

function explode(){
	
	
	
}