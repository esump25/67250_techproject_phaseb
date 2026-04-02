var x = 5
var y = 7
var z = x + y 
console.log(z)
A = "Hello"
B = "world!"
var C = A + B
console.log(C)
function sumnPrint(x1, x2){
    var sum = x1 + x2
    console.log(sum)
}
sumnPrint(x, y);
sumnPrint(A, B);
if (C.length > z) {
    console.log(C)
    if (C.length < z) {
    console.log(z)
    }
} else {
    console.log("good job!")
}
L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];


function findBanana(item) {
    if (item == "Banana") {
        alert("Found the Banana!");
    }
}
//L1.forEach(findBanana);
//L2.forEach(findBanana);

//Beginning of the new code for increment 3
var now = new Date();
var hours = now.getHours();
function greeting(x) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        if (x < 5 || x >= 20) {
            greetingElement.innerHTML = "Good night from MonoMuse!";
        } else if (x < 12) {
            greetingElement.innerHTML = "Good morning from MonoMuse!";
        } else if (x < 18) {
            greetingElement.innerHTML = "Good afternoon from MonoMuse!";
        } else {
            greetingElement.innerHTML = "Good evening from MonoMuse!";
        }
    } 
}
greeting(hours);

function addYear(){
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        var existingText = yearElement.innerHTML;
        yearElement.innerHTML = currentYear + " " + existingText;
    }
}

function ActivateNav() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add('active');
        }
    });
}
ActivateNav();

$("#readMore").click(function(){
  $("#longIntro").show(); 
  $("#readLess").show();   
  $("#readMore").hide();   
});

$("#readLess").click(function(){ 
  $("#longIntro").hide(); 
  $("#readLess").hide();  
  $("#readMore").show();
});

function showForm(date, time) {
    document.getElementById("purchaseForm").style.display = "block";
    document.getElementById("visitDate").value = date;
    document.getElementById("visitTime").value = time;
    document.getElementById("purchaseForm").scrollIntoView({ behavior: 'smooth' });
}

function toggleNav() {
    var navbar = document.querySelector('.nav_bar');
    navbar.classList.toggle('responsive');
}

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleNav);
    }
});

if (document.getElementById('map')) {
    var map = L.map('map').setView([36.8529, -75.9780], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([36.8529, -75.9780]).addTo(map)
        .bindPopup('MonoMuse Museum')
        .openPopup();
}

var prices = { general: 18, student: 10, member: 15 };

function updatePrice() {
    var type = document.getElementById('ticketType');
    var qty = document.getElementById('numTickets');
    var display = document.getElementById('totalPrice');
    if (type && qty && display) {
        var price = prices[type.value] || 0;
        display.innerText = '$' + (price * parseInt(qty.value || 1));
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var ticketType = document.getElementById('ticketType');
    var numTickets = document.getElementById('numTickets');
    if (ticketType) ticketType.addEventListener('change', updatePrice);
    if (numTickets) numTickets.addEventListener('input', updatePrice);

    var placeOrderBtn = document.getElementById('placeOrderBtn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function () {
            var valid = true;

            var visitDate = document.getElementById('visitDate').value;
            var visitDateError = document.getElementById('visitDateError');
            if (!visitDate) {
                visitDateError.innerText = 'Please select a visit date.';
                valid = false;
            } else { visitDateError.innerText = ''; }

            var ticketType = document.getElementById('ticketType').value;
            var ticketTypeError = document.getElementById('ticketTypeError');
            if (!ticketType) {
                ticketTypeError.innerText = 'Please select a ticket type.';
                valid = false;
            } else { ticketTypeError.innerText = ''; }

            var qty = parseInt(document.getElementById('numTickets').value);
            var numTicketsError = document.getElementById('numTicketsError');
            if (!qty || qty < 1 || qty > 10) {
                numTicketsError.innerText = 'Please enter a quantity between 1 and 10.';
                valid = false;
            } else { numTicketsError.innerText = ''; }

            var email = document.getElementById('email').value;
            var emailError = document.getElementById('emailError');
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                emailError.innerText = 'Please enter a valid email address.';
                valid = false;
            } else { emailError.innerText = ''; }

            var zip = document.getElementById('zipCode').value;
            var zipError = document.getElementById('zipCodeError');
            if (zip && !/^\d{5}$/.test(zip)) {
                zipError.innerText = 'Zip code must be exactly 5 digits.';
                valid = false;
            } else { zipError.innerText = ''; }

            if (valid) {
                var total = prices[ticketType] * qty;
                var visitTime = document.getElementById('visitTime').value;
                var params = 'date=' + encodeURIComponent(visitDate)
                    + '&time=' + encodeURIComponent(visitTime)
                    + '&type=' + encodeURIComponent(ticketType)
                    + '&qty=' + qty
                    + '&total=' + total;
                window.location.href = 'confirmation.html?' + params;
            }
        });
    }
});

document.querySelectorAll('.slideshow').forEach(function(slideshow) {
    slideshow.querySelector('.prev').addEventListener('click', function() {
        var slides = slideshow.querySelectorAll('.slide-img');
        var current = Array.from(slides).findIndex(s => s.style.display !== 'none');
        slides[current].style.display = 'none';
        slides[(current - 1 + slides.length) % slides.length].style.display = 'block';
    });
    slideshow.querySelector('.next').addEventListener('click', function() {
        var slides = slideshow.querySelectorAll('.slide-img');
        var current = Array.from(slides).findIndex(s => s.style.display !== 'none');
        slides[current].style.display = 'none';
        slides[(current + 1) % slides.length].style.display = 'block';
    });
});