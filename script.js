window.onload = function() {
    // Make sure the carousel works
    var myCarousel = document.getElementById('carouselExample');
    if (myCarousel) {
        // This makes the carousel automatically slide
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000 // Change slide every 3 seconds
        });
    }

    // Form validation for the signup page
    var signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.onsubmit = function(event) {
            // Get the form values
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            
            // Check if fields are empty
            if (!name.value || !email.value) {
                alert('Please fill in all fields!');
                event.preventDefault();
                return false;
            }
            
            // Check if email has @
            if (!email.value.includes('@')) {
                alert('Please enter a valid email!');
                event.preventDefault();
                return false;
            }
            
            // If everything is okay
            alert('Thanks for signing up, ' + name.value + '!');
            return true;
        };
    }
};
