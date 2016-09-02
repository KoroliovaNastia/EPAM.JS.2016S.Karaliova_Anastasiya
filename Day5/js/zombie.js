function Zombie(line, endPoint){

	var self = this;
	var styleClass = "zombie";
	var endPosition = endPoint;
	var position = 0;
	self.slowSpeed = 0.5;
	self.speed = 0.5;
	self.mySpeed = self.speed;
	self.startHealth = 50;
	self.myHealth = self.startHealth;
	self.parentDiv = $('<div class=\"zombie\"></div>');
	self.barDiv = $('<div class=\"bar\"></div>');
	self.healthDiv = $('<div class=\"health"\></div>');
	self.healthParagraph = $('<p>'+ this.myHealth + "/" + this.startHealth + '</p>');
	self.healthDiv.append(self.healthParagraph);
	self.parentDiv.append(self.barDiv);
	self.barDiv.append(self.healthDiv);
	line.append(self.parentDiv);
	
	this.doMove = function(){
	
		position += self.mySpeed;
	
		if(position < endPosition){
	
		self.parentDiv.css("right", position );
		
		 } else {
		
			 self.endGame();
		
		 };
	
	 };
	 
	this.die = function(){
	 
		self.parentDiv.remove();
		self.endGame = function(){};
		
	 };
	
	this.subscribe = function(gameOver){
		
		self.endGame = gameOver;
		
	}
	
	this.health = function(difference){
		
		var valuePercent = self.myHealth / self.startHealth * 100; 
		var diffPercent = difference * 100 / self.startHealth;
		
		self.myHealth -= difference;
		valuePercent -= diffPercent;
		
		if(self.myHealth > 0){
			
			$('.health').width(valuePercent + "%");
			self.healthParagraph.text(self.myHealth + "/" + self.startHealth);
			
		} else{
			
			self.die();
			
		}
		
		
	}
	return self;
};
