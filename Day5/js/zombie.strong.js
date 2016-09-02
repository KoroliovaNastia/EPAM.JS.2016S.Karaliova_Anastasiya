Zombie.Strong = function(line){

	var parent = Zombie.apply(this, arguments);
	parent.parentDiv.addClass('strong');
	parent.mySpeed = 1.5;
	parent.speed = parent.mySpeed;
};