document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Service Price Calculator
    const checkboxes = document.querySelectorAll('.service-checkbox');
    const totalElement = document.getElementById('total-price');
    let total = 0;

    function updateTotal() {
        total = 0;
        checkboxes.forEach(checkbox => {
            if(checkbox.checked) total += parseInt(checkbox.dataset.price);
        });
        if(totalElement) totalElement.textContent = `$${total}`;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotal);
    });

    // Package Selection
    const packageButton = document.querySelector('.package-btn');
    if(packageButton) {
        packageButton.addEventListener('click', (e) => {
            e.preventDefault();
            checkboxes.forEach(checkbox => checkbox.checked = false);
            total = 149;
            if(totalElement) totalElement.textContent = `$${total}`;
        });
    }
});