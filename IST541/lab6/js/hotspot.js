// JavaScript Document
$( function() {
   $("map area").click( function(){
  $('#myModal').modal("show");

      if ($(this).attr("id") == "Gas Pump Nozzle") {
         $("#feedback").css("color","black");
         $("#feedback").html("The green nozzle is for diesel fuel, used for diesel-powered vehicles.");
      }

      if ($(this).attr("id") == "Fuel Selector Buttons") {
         $("#feedback").css("color","black");
         $("#feedback").html("Fuel Selector Buttons, in cases where different types of fuel are offered, this button allows you to select the desired fuel grade.");
	   }

      if ($(this).attr("id") == "Keypad/Touchscreen") {
         $("#feedback").css("color","black");
         $("#feedback").html("Keypad/Touchscreen, some modern gas pumps are equipped with a keypad or touchscreen for inputting payment information or selecting fuel options.");
      }	   
	 if ($(this).attr("id") == "Receipt Printer") {
         $("#feedback").css("color","black");
         $("#feedback").html("Receipt Printer,after refueling, a receipt printer may provide you with a paper receipt for your transaction.");
      }
	    if ($(this).attr("id") == "Payment Terminal") {
         $("#feedback").css("color","black");
         $("#feedback").html("Payment Terminal, gas pumps have payment terminals for processing credit or debit card payments.");
      }
	   if ($(this).attr("id") == "Pump Nozzle 1") {
         $("#feedback").css("color","black");
         $("#feedback").html("The black nozzle is for gasoline (gas) fuel, suitable for most cars.");
      }
   });
}); //end main jQuery function
