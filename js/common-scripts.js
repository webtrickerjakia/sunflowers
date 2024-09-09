
(function($){
	$(function(){


        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });



        $('.sub-nav > a').click(function(e) {
            e.preventDefault();  // Prevent the default link behavior
      
            // Slide toggle the next 'ul' (submenu) under the clicked '.sub-nav > a'
            $(this).next('ul').slideToggle();
      
            // Hide all other submenus
            $('.sub-nav ul').not($(this).next('ul')).slideUp();
          });





	})// End ready function.

	

    

})(jQuery)

