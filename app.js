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

//Mobile menu functionality

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Alert the user when a message is sent

function sendMessageAlert() {
    alert("Thank you for your message! \n Please use the Form Submit verification to continue. \n  Once verified, I will get back to you as soon as possible!");
}

// Toggle theme 

function toggleTheme() {
    console.log("toggleTheme");
    //Check if the the html element has the class "dark-theme"
    if (document.documentElement.classList.contains("dark-theme")) {
        //If it does, remove the class
        document.documentElement.classList.remove("dark-theme");
        //And add the light-theme class
        document.documentElement.classList.add("light-theme");
    }
}