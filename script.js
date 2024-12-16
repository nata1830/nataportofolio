// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi navbar saat scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Form handling
const form = document.getElementById('kontak-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai input
    const nama = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const pesan = form.querySelector('textarea').value;
    
    // Tampilkan alert (dalam implementasi nyata, Anda bisa mengirim data ke server)
    alert(`Terima kasih ${nama}! Pesan Anda telah diterima.`);
    form.reset();
});

// Animasi untuk proyek cards
const proyekCards = document.querySelectorAll('.proyek-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

proyekCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-in-out';
    observer.observe(card);
}); 