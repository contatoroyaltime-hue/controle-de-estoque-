document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Close the menu if clicking outside of it
    document.addEventListener('click', function(event) {
        var isClickInside = document.querySelector('.sidebar').contains(event.target);
        var isHamburger = document.querySelector('.hamburger-menu').contains(event.target);

        if (!isClickInside && !isHamburger) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    });