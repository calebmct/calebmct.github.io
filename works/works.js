$(document).ready(function() {

    Array.from(document.querySelectorAll('.lightbox')).forEach(element => {
        element.addEventListener('click', clickEvent => {
            activateLightbox(element.id);
        });
    })
        
    function activateLightbox(id) {
        $("#"+id+"-full")
        .removeClass("lightbox-target-inactive")
        .addClass("lightbox-target-active");
        console.log("#"+id+"-full");
    };

    $('.lightbox-close').on('click', function() {
        $('.lightbox-target')
        .removeClass('lightbox-target-active')
        .addClass('lightbox-target-inactive');
    });
});
// ready function end