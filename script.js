
//Carrusel
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");

    // Cards
    const ratings = document.querySelectorAll(".rating");

    ratings.forEach(rating => {
        let stars = rating.querySelectorAll("i");
        let selectedRating = 0;

        stars.forEach(star => {
            star.addEventListener("mouseover", function() {
                highlightStars(stars, this.dataset.value);
            });

            star.addEventListener("click", function() {
                selectedRating = this.dataset.value;
                highlightStars(stars, selectedRating, true);
            });
        });

        rating.addEventListener("mouseleave", function() {
            highlightStars(stars, selectedRating);
        });
    });

    function highlightStars(stars, value, fixed = false) {
        stars.forEach(star => {
            let starValue = parseInt(star.dataset.value);
            let selectedValue = parseInt(value);

            if (starValue <= selectedValue) {
                star.classList.add("bi-star-fill");
                star.classList.remove("bi-star");
            } else {
                star.classList.add("bi-star");
                star.classList.remove("bi-star-fill");
            }
        });
    }

});

