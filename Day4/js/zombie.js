function Zombie(line, endPoint){

	var self = this;
	var styleClass = "zombie";
	var endPosition = endPoint;
	var position = 0;
	self.speed = 1;
	self.parentDiv = $('<div class=\"zombie\"></div>');
	line.append(self.parentDiv);
	
	self.doMove = function(){
	
		position += self.speed;
	
		if(position < endPosition){
	
		self.parentDiv.css("right", position );
		
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
