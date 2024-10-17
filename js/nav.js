document.getElementById('toggle-nav').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // nav-links의 active 클래스를 토글하여 보이기/숨기기
});
