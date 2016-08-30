var zombiesType = [Zombie.Michael, Zombie.Strong];
var zombies = [];

$(function(){

	$('#btnGenerate').on("click", createZombie);
	var timer = setInterval(moveZombies, 1000);

});

function createZombie(){

	var $randLine = $('.field-line').eq(random(0, 5));
	var randZombie = zombiesType[random(0, 1)];
	//$randLine.append('<div class=\"zombie michael\"></div>');

	var zombie = new randZombie($randLine);
	zombies.push(zombie);
	// zombie.type = $randZombie;
	// zombie.addClass($ranZombie);
	
}

function moveZombies(){

	for(var i = 0; i < zombies.length; i++ ){
	
		zombies[i].doMove();
	
	}

}

function random(min, max){

    return Math.floor((Math.random()*max)+min);
	
}

function generate(){

	setInterval(createZombie(), random(0, 5)*1000);
}