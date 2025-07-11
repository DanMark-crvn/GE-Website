
// Load Index.html
document.addEventListener('DOMContentLoaded', function() {
    // Show home section, hide others on page load/refresh
    document.getElementById('home-sections').style.display = 'block';
    document.getElementById('product-sections').style.display = 'none';
    document.getElementById('about-sections').style.display = 'none';
    document.getElementById('reseller-sections').style.display = 'none';
    document.getElementById('contact-sections').style.display = 'none';
});

// Load home.html content into the placeholder div
fetch('home.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('home-sections').innerHTML = html;
    });


// Load product.html content into the placeholder div
fetch('product.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('product-sections').innerHTML = html;
    });

// Load about.html content into the placeholder div
fetch('about.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('about-sections').innerHTML = html;
    });

// Load reseller.html content into the placeholder div
fetch('reseller.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('reseller-sections').innerHTML = html;

    // Now run the validation script
    const form = document.querySelector('#reseller-sections form');
    if (form) {
        const inputs = form.querySelectorAll('.form-control');

        form.addEventListener('submit', event => {
            let valid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid');
                    valid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            if (!valid) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    input.classList.remove('is-invalid');
                } else {
                    input.classList.add('is-invalid');
                }
            });
        });
    }
});

// Load contact.html content into the placeholder div
fetch('contact.html')
    .then(response => response.text())
    .then(html => {
    document.getElementById('contact-sections').innerHTML = html;

    // Now run the validation script
    const form = document.querySelector('#contact-sections form');
    if (form) {
        const inputs = form.querySelectorAll('.form-control');

        form.addEventListener('submit', event => {
            let valid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.classList.add('is-invalid');
                    valid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });
            if (!valid) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.checkValidity()) {
                    input.classList.remove('is-invalid');
                } else {
                    input.classList.add('is-invalid');
                }
            });
        });
    }
});


// Show home section only when Home nav is clicked
document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementById('home');
    const divSection = document.getElementById('home-sections');
    const productHideSection = document.getElementById('product-sections');
    const aboutHideSection = document.getElementById('about-sections');
    const resellerHideSection = document.getElementById('reseller-sections');
    const contactHideSection = document.getElementById('contact-sections');
    links.addEventListener('click', function(e) {
        e.preventDefault();
        divSection.style.display = 'block';
        productHideSection.style.display = 'none'; // Hide product section
        aboutHideSection.style.display = 'none'; // Hide about section
        resellerHideSection.style.display = 'none'; // Hide reseller section
        contactHideSection.style.display = 'none'; // Hide contact section
        divSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Show product section only when Product nav is clicked
document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementById('product');
    const divSection = document.getElementById('product-sections');
    const homeHideSection = document.getElementById('home-sections');
    const aboutHideSection = document.getElementById('about-sections');
    const resellerHideSection = document.getElementById('reseller-sections');
    const contactHideSection = document.getElementById('contact-sections');
    links.addEventListener('click', function(e) {
        e.preventDefault();
        divSection.style.display = 'block';
        homeHideSection.style.display = 'none'; // Hide home section
        aboutHideSection.style.display = 'none'; // Hide about section
        resellerHideSection.style.display = 'none'; // Hide reseller section
        contactHideSection.style.display = 'none'; // Hide contact section
        divSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Show about section only when About nav is clicked
document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementById('about');
    const divSection = document.getElementById('about-sections');
    const homeHideSection = document.getElementById('home-sections');
    const productHideSection = document.getElementById('product-sections');
    const resellerHideSection = document.getElementById('reseller-sections');
    const contactHideSection = document.getElementById('contact-sections');
    links.addEventListener('click', function(e) {
        e.preventDefault();
        divSection.style.display = 'block';
        homeHideSection.style.display = 'none'; // Hide home section
        productHideSection.style.display = 'none'; // Hide product section
        resellerHideSection.style.display = 'none'; // Hide reseller section
        contactHideSection.style.display = 'none'; // Hide contact section
        divSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Show reseller section only when Reseller nav is clicked
document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementById('reseller');
    const divSection = document.getElementById('reseller-sections');
    const homeHideSection = document.getElementById('home-sections');
    const productHideSection = document.getElementById('product-sections');
    const aboutHideSection = document.getElementById('about-sections');
    const contactHideSection = document.getElementById('contact-sections');
    links.addEventListener('click', function(e) {
        e.preventDefault();
        divSection.style.display = 'block';
        homeHideSection.style.display = 'none'; // Hide home section
        productHideSection.style.display = 'none'; // Hide product section
        aboutHideSection.style.display = 'none'; // Hide about section
        contactHideSection.style.display = 'none'; // Hide contact section
        divSection.scrollIntoView({ behavior: 'smooth' });
    });
});


// Show contact section only when Contact nav is clicked
document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementById('contact');
    const divSection = document.getElementById('contact-sections');
    const homeHideSection = document.getElementById('home-sections');
    const productHideSection = document.getElementById('product-sections');
    const aboutHideSection = document.getElementById('about-sections');
    const resellerHideSection = document.getElementById('reseller-sections');
    links.addEventListener('click', function(e) {
        e.preventDefault();
        divSection.style.display = 'block';
        homeHideSection.style.display = 'none'; // Hide home section
        productHideSection.style.display = 'none'; // Hide product section
        aboutHideSection.style.display = 'none'; // Hide about section
        resellerHideSection.style.display = 'none'; // Hide reseller section
        divSection.scrollIntoView({ behavior: 'smooth' });
    });
});