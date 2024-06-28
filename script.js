document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navRight = document.querySelector('.nav-right');

    hamburger.addEventListener('click', function () {
        navRight.classList.toggle('show');
    });
});
