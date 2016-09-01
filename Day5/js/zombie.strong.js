Zombie.Strong = function(line){

	var parent = Zombie.call(this, line, endPoint);
	parent.parentDiv.addClass('strong');
	parent.mySpeed = 1.5;
	parent.speed = parent.mySpeed;
};