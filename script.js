window.onload = function() {
   
    var myCarousel = document.getElementById('carouselExample');
    if (myCarousel) {
       
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000 
        });
    }

   
    var signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.onsubmit = function(event) {
          
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            
           
            if (!name.value || !email.value) {
                alert('Please fill in all fields!');
                event.preventDefault();
                return false;
            }
            
          
            if (!email.value.includes('@')) {
                alert('Please enter a valid email!');
                event.preventDefault();
                return false;
            }
            
     
            alert('Thanks for signing up, ' + name.value + '!');
            return true;
        };
    }
};
