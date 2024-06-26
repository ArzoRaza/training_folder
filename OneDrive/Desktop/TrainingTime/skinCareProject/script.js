// // script.js
// let lastScrollTop = 0;
// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > 0) {
//         navbar.classList.add('highlighted');
//     } else {
//         navbar.classList.remove('highlighted');
//     }

//     if (scrollTop > lastScrollTop) {
//         // User is scrolling down
//         navbar.style.top = '-100px'; // Hide the navbar (adjust based on navbar height)
//     } else {
//         // User is scrolling up
//         navbar.style.top = '0';
//     }
//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
// });

// var icons = document.getElementsByTagName('button');
// for (var button = 0; button < icons.length; button++) {
//     icons[button].addEventListener('click', function() {
//     this.classList.toggle('active');
//     });
// }
