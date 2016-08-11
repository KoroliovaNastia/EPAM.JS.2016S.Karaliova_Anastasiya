var data = [];

for (var i = 0; i < 5; i++){
	
	var type = random(1, 3);
	
	var o = { };
	
	o.count = random(1, 10);
	
	o["getCount" + type] = function(){
		
			return this.count;
		
		};
	data[i] = o;
	
	console.log("type = %d, count = %d", type, data[i]["getCount" + type]());
}