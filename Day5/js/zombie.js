function Zombie(line, endPoint){

	var self = this;
	var styleClass = "zombie";
	var endPosition = endPoint;
	var position = 0;
	self.speed = 1;
	self.parentDiv = $('<div class=\"zombie\"></div>');
	self.barDiv = $('<div class=\"bar\">');
	self.healthDiv = $('<div class=\"health"\></div>');
	self.percent = $('<p></p>');
	self.startHealth = 50;
	self.myHealth = self.startHealth;
	self.parentDiv.append(self.barDiv);
	line.append(self.parentDiv);
	$('.bar').append(self.healthDiv, self.percent);
	//line.append(self.parentDiv);
	
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
	
	self.health = function(difference){
		
		var valuePercent = self.myHealth / self.startHealth * 100; 
		var diffPercent = difference * 100 / self.startHealth;
		
		if(self.myHealth > 0){
			
			self.myHealth -= difference;
			//value -= value*diffPercent;
			valuePercent -= diffPercent;
			
			$('.p').text(valuePercent + "%");
			$('.health').width(valuePercent + "%");
			
		} else{
			
			self.die();
			
		}
		
		
	}
	return self;
};
