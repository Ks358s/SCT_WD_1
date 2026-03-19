window.onscroll = function() {
    const nav = document.getElementById('navbar');
    
    // Add "scrolled" class if user scrolls down 50px
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};
