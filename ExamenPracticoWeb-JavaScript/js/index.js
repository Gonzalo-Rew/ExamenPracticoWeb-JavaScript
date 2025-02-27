document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("header").classList.add("visible");
    }, 2000); 


    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const ships = document.querySelectorAll(".nave");

        ships.forEach(ship => {
            const maxScroll = documentHeight - windowHeight;
            const scrollFactor = scrollPosition / maxScroll;
            let translateY;

            if (ship.id === "nave1") {
                translateY = -scrollFactor * (windowHeight * 2.0); // Faster movement for nave1
            } else if (ship.id === "nave2") {
                translateY = -scrollFactor * (windowHeight * 1.8); // Slower movement for nave2
            } else {
                translateY = -scrollFactor * (windowHeight * 2.1); // Default movement for other ships
            }

            // Ensure ships move smoothly and stay in sync with scroll
            ship.style.transform = `translateY(${translateY}px)`;
        });
    });

});