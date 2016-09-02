Zombie.Michael = function(line, endPoint){

	var parent = Zombie.apply(this, arguments);
	parent.mySpeed = 1;
	parent.speed = parent.mySpeed;
	parent.startHealth = 70;
	parent.myHealth = parent.startHealth;
	parent.parentDiv.addClass('michael');
	parent.healthParagraph.text(this.myHealth + "/" + this.startHealth)
};

