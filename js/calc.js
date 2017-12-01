window.amountSaved = parseInt('0');
var amountGained;
var totalRevenue;

$(document).ready(function () {
	
$('body').on('click', '.btn-start-over', function(){
      $('#mcf').val('');
      $('#bud').val('');
      $('#tuition').val('');
      $('#students').val('');
      $('.page3').slideUp();
      $('.page1').slideDown();
  });		  	
	
	function numberWithCommas(x) {
          	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      	}
	
      $('body').on('click', '.btn-submit', function(){
          var mcf = $('#mcf').val();
          var bud = $('#bud').val();
          if(mcf == ''){
              alert('Please enter your maintainable acreage.');
              return false;
          }
          if(bud == ''){
              alert('Please enter your annual landscaping budget.');
              return false;
          }

          window.amountSaved = bud * 0.152;
          window.amountSaved = window.amountSaved.toFixed(0);
		  window.amountSaved = numberWithCommas(window.amountSaved);

          if(amountSaved == 'NaN'){
              alert('Please only enter a number value');
              return false;
          }

          $('.amount-saved').html('<p>You could save up to <span>$' + amountSaved + '<\/span> on your annual landscaping costs.');
          $('.page1').slideUp();
          $('.page-calculating').slideDown();
          setTimeout(function() {
              $('.page-calculating').slideUp();
              $('.page2').slideDown();
              $('html, body').animate({
		        scrollTop: $("#pageResult1").offset().top
		    	}, 1000);
           }, 1000); 
           
           //console.log(window.amountSaved);
      });
 
      $('body').on('click', '.btn-submit-002', function(){
          
          var admitted = $('#admitted').val();
          var students = $('#students').val();
          var tuition = $('#tuition').val();
          
          var admitted = admitted.replace(",", ""); //strip commas from input
          var students = students.replace(",", ""); //strip commas from input
          var tuition = tuition.replace(",", ""); //strip commas from input
          
          if(admitted == ''){
              alert('Please enter the percent of students admitted from all applicants.');
              return false;
          }
          if(students == ''){
              alert('Please enter your total number of enrolled students.');
              return false;
          }
          
           if(tuition == ''){
              alert('Please enter your average annual tuition.');
              return false;
          }
          
          //*** Old Code - calc for yield by number
          //var totalYield = (students / admitted) * 100;
          //var amountGained = totalYield + 3; //add 3 to final number as gain
          //amountGained = amountGained.toFixed(0);
		  //amountGained = numberWithCommas(amountGained);
		  //totalYield = totalYield.toFixed(0);
		  
          //console.log(admitted);
          //console.log(students);
          //console.log(totalYield);
          //console.log(amountGained);
          //*** End Old Code
          
          //calc yield by percent
          var amountYield = students / parseInt(admitted, 10) * 100; //get number of acceptance letters sent
          var amountYield = (students / amountYield) * 100; //get percent of people who enrolled who were accepted
          var amountYield = amountYield + 3;  //add 3 to final number as gain
          
          var students = students * .03;
          var totalIncome = students * tuition * .03;
          //var amountGained = totalIncome * .03; // not using
          
          //amountGained = amountGained.toFixed(0);
		  //amountGained = numberWithCommas(amountGained);
		  
		  totalIncome = totalIncome.toFixed(0);
		  totalIncome = numberWithCommas(totalIncome);
		  
		  console.log(totalIncome);
		  console.log(students);
          
          if(amountGained == 'NaN'){
              alert('Please only enter a number value');
              return false;
          }

          $('.amount-gained').html('<h2>You could increase tuition income by <span>$' + totalIncome + '<\/span> annually.<\/h2>');
          $('.page2').slideUp();
          $('.page-calculating').slideDown();
          setTimeout(function() {
              $('.page-calculating').slideUp();
              $('.page3').slideDown();
              $('html, body').animate({
		        scrollTop: $("#pageResult2").offset().top - 200
		    	}, 1000);
           }, 1000);
           
           //var gainedRaw = parseFloat(amountGained.replace(/,/g,''));
           //var savedRaw = parseFloat(window.amountSaved.replace(/,/g,''));
           //var totalRevenue = gainedRaw + savedRaw;
           //console.log(gainedRaw);
           //console.log(savedRaw);
           //console.log(numberWithCommas(totalRevenue));          
      });
 });
