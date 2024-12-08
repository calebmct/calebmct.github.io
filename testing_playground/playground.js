$(document).ready(function() {
    $('.squarebox').on('click', function () { 
        if ($(this).hasClass('purple')) {
            $(this).addClass('fifty').removeClass('purple');
        } else if ($(this).hasClass('fifty')) {
            $(this).addClass('zero').removeClass('fifty');
        } else if ($(this).hasClass('zero')) {
            $(this).addClass('star').removeClass('zero');
        } else if ($(this).hasClass('star')) {
            $(this).addClass('purple').removeClass('star');
        }
    });
});