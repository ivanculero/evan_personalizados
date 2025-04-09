document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelectorAll('.background-carousel img');
    let currentIndex = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    showImage(currentIndex);

    function nextImage() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000);
});