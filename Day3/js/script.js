$(function(){
	changeState('.generate', true);
	changeState('.setColor', false);
	changeState('.reset', false);
});

function generate(){

	var $element = $('.blocks');
	var num = random(50, 100);

	for(var i = 0; i < num; i++){

		$element.append("<div class=\"block\">" + random(1, 100) + "</div>");

	}
	changeState('.generate', false);
	changeState('.setColor', true);
	changeState('.reset', true);
}
function setColor(){
	
	
	
	var colors = ['#f44336','#ff9800','#4caf50'];
	var colorUsed = {};
	var $divsToColor = $('.block');
	
	$divsToColor.each(function(){
	
		var $div = $(this);
		var number = parseInt($div.text());
		var randomColor = "white";
		
		if( number > 75){
		
			randomColor = colors[0];
			
		} else if(number > 50){
		
			randomColor = colors[1];
		
		} else if(number > 25){
		
			randomColor = colors[2];
		
		}
		
		$div.css('backgroundColor', randomColor);
	});
	
	changeState('.setColor', false);
}

function reset(){
	$('.block').remove();
	changeState('.generate', true);
	changeState('.setColor', false);
	changeState('.reset', false);
}

function changeState(button, state){

	var func;
	if ($(button).hasClass('generate')){
	
		func = generate;
	
	} else if($(button).hasClass('setColor')){
	
		func = setColor;
	
	} else if($(button).hasClass('reset')){
	
		func = reset;
	
	}
	if(state){
	
		$(button).removeClass("disabled");
		$(button).on("click", func);
		
	} else if(!state){
	
		$(button).addClass("disabled")
		$(button).off("click");
	}
}

function random(min, max){

    return Math.floor((Math.random()*max)+min);
	
}