function Zombie(line){

	var self = this;
	var styleClass = "zombie";
	// var $myLine = line;
	this.parentDiv = $('<div class=\"zombie\"></div>');
	line.append(parentDiv);
	
	// this.doMove = function(){
	
		// $('.zombie').animate({ "right": "-=1px" });
	
	// };

	return self;
};

Zombie.prototype = {

	doMove: function(){
	
		$('.zombie').animate({ "right": "-=1px" });
	
	},

	die: function(){
	
		self.parentDiv.remove();
			
	}
};
