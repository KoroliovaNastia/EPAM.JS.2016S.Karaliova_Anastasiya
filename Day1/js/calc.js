for(var i=0; i < data.length; i++){
	
	var item = Number(data[i]);
	
	if(data[i] == null || Number.isNaN(item) ||data[i] === undefined ){
	
		continue;
		
	}
	  else if(item == 0){
	
		data[i] = item + 10;
		
	}else if(item > 100){
	
		data[i] = item - 100;
		
	}else if(item < 100){
	
		data[i] = item + 100;
		
	}

}