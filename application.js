$(document).ready( function() {
    // Your JavaScript here
    
  var counter = 0;

  
  $('#next_frame').on('click', function(){
		if (counter === 2) {
	  	$('.frames').animate({
	  		right: '0%'
	  	}, 100);
	  	counter = 0;
	  }
	  else {
			$('.frames').animate({
	  		right: '+=100%'
	  	}, 100);
	  	counter++;
		}
  })



	$('#previous_frame').on('click', function(){
    

		if (counter === 0) {
	    $('.frames').animate({
	    	right: '200%'
	    }, 100);
	    counter = 2;
		} 

		else {
	    $('.frames').animate({
	    	right: '-=100%'
	    }, 100);
	    counter--;
	  }

  })
});