document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.popup-link');
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popup-image');
    var popupClose = document.getElementById('popup-close');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var imageSrc = this.getAttribute('data-image-src');
            popupImage.src = imageSrc;
            popup.style.display = 'block';
        });
    });

    popupClose.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});