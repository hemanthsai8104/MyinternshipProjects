const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close-button');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxImage.src = e.target.src;
        lightbox.style.display = 'block';
    }
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
