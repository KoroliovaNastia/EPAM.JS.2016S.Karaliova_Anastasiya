Zombie.Michael = function(line, endPoint){

	var parent = Zombie.call(this, line, endPoint);
	parent.parentDiv.addClass('michael');
	parent.startHealth = 70;
	parent.mySpeed = 1;
	parent.speed = parent.mySpeed;
};

