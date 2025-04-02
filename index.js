document.addEventListener("DOMContentLoaded", function () {
    const bookGrid = document.querySelector(".book-grid");
    const bookCards = Array.from(document.querySelectorAll(".book-card"));

    function sortBooks(by) {
        let sortedBooks;
        if (by === "rating") {
            sortedBooks = bookCards.sort((a, b) => {
                let ratingA = parseFloat(a.querySelector(".rating span").textContent);
                let ratingB = parseFloat(b.querySelector(".rating span").textContent);
                return ratingB - ratingA; 
            });
        } else if (by === "alphabetical") {
            sortedBooks = bookCards.sort((a, b) => {
                let titleA = a.querySelector("h3 a").textContent.toLowerCase();
                let titleB = b.querySelector("h3 a").textContent.toLowerCase();
                return titleA.localeCompare(titleB); 
            });
        }

        bookGrid.innerHTML = "";
        sortedBooks.forEach(book => bookGrid.appendChild(book)); 
    }

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
});
