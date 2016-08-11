var firstType = 0;
var secondType = 0;
var thirdType = 0;

for (var i = 0; i < data.length; i++){
	
	
	if(data[i].hasOwnProperty("getCount1")){
		
		firstType += data[i].getCount1();
	
	} else if(data[i].hasOwnProperty("getCount2")){
	
		secondType += data[i].getCount2();
	
	} else if(data[i].hasOwnProperty("getCount3")){
	
		thirdType += data[i].getCount3();
	
	}
	
}

console.log("count %d = %d", 1, firstType);
console.log("count %d = %d", 2, secondType);
console.log("count %d = %d", 3, thirdType);