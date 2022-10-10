// Transitions for elements with the "hidden" class

const hiddenElements = document.querySelectorAll('.hidden');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

// Burger menu functionality

function showMobileNavItems() {
    var x = document.getElementById("items");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}