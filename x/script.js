document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('#menu-btn');

    if (navbar && menuBtn) {
        menuBtn.onclick = () => {
            navbar.classList.toggle('active');
        };

        window.onscroll = () => {
            navbar.classList.remove('active');
        };
    } else {
        console.error('Navbar or menu button not found');
    }
});
