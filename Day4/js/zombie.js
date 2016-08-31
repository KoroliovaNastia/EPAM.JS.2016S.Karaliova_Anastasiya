function Zombie(line, endPoint){

	var self = this;
	var styleClass = "zombie";
	var endPosition = endPoint;
	var position = 0;
	self.speed = 1;
	// var $myLine = line;
	self.parentDiv = $('<div class=\"zombie\"></div>');
	line.append(self.parentDiv);
	
	self.doMove = function(){
	
		position += self.speed;
	
		if(position < 200){
	
		self.parentDiv.animate({ right: position + "px" });
		
		 } else {
		
			 self.endGame();
		
		 };
	
	 };
	 
	self.die = function(){
	 
		self.parentDiv.remove();
	 
	 };
	
	self.subscribe = function(gameOver){
		
		self.endGame = gameOver;
		
	}
	return self;
};

// Zombie.prototype.doMove = function(){

	// // doMove: function(){
	
		// $('.zombie').animate({ "right": "-=1px" });
	
	// // },

	// // die: function(){
	
		// // self.parentDiv.remove();
			
	// // }
// };
