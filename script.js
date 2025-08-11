document.addEventListener('DOMContentLoaded', function() {
    // Carousel'i otomatik olarak başlat
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
        interval: 3000,
        ride: 'carousel',
        wrap: true
    });

    // Carousel'in durmasını önle
    setInterval(() => {
        if (!carousel._isSliding) {  // Eğer geçiş yapılmıyorsa
            carousel.next();  // Sonraki slide'a geç
        }
    }, 3000);

    // Mouse ile etkileşimde bile durmasını engelle
    document.querySelector('#carouselExampleIndicators').addEventListener('mouseenter', () => {
        carousel.cycle();
    });
});



