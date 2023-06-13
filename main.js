$(document).ready(function() {
    // Logo gif reload
    var imgurl = 'images/CM-logo.gif'+'?a='+Math.random();
    $('#logo img').attr('src',imgurl);
    $('#logo img').attr('alt','Caleb McTwigan');
/*
    // VIDEO HOVER -- UNMUTE & PLAY BUTTON DISPLAY
    $('#tv')
        .on('mouseenter', function() {
            $('#pp-left').removeClass('left-pp-ani left-pp-ani-b');
            $('#pp-right').removeClass('right-pp-ani right-pp-ani-b');
            if($('#reel').prop('muted')) {
                $('#unmute').fadeIn(300);
            } else {
                $('#mute').fadeIn(300);
            };
            if($('#reel').get(0).paused) {
                $('#pp-left').removeClass('pausedLeft');
                $('#pp-right').removeClass('pausedRight');
                $('#pp-left, #pp-right').addClass('pausedPlayIcon');
                $('#play-button').fadeIn(300);
            } else {
                $('#pp-left').removeClass('pausedPlayIcon');
                $('#pp-right').removeClass('pausedPlayIcon');
                $('#pp-left').addClass('pausedLeft');
                $('#pp-right').addClass('pausedRight');
                $('#play-button').fadeIn(300);
            };
        })
        .on('mouseleave', function() {
            $('#unmute').fadeOut(300);
            $('#mute').fadeOut(300);
            $('#play-button').fadeOut(300);
        })
    ; // '#tv' Video hover functions end
    
    //CLICK for Play/Pause function
    $('#reel, video.screen').each(function() {
        $(this).on('click', function() {
            console.log('clicked');
            if( $('#reel').get(0).paused ) {
            $('#reel').trigger('play');
            $('#pp-left')
            .addClass('left-pp-ani-b')
            .removeClass('left-pp-ani pausedPlayIcon');
            $('#pp-right')
            .removeClass('right-pp-ani pausedPlayIcon')
            .addClass('right-pp-ani-b pausedRight');
            console.log('from paused to playing');
        } else {
            $('#reel').trigger('pause');
            $('#pp-left')
            .removeClass('left-pp-ani-b pausedPlayIcon')
            .addClass('left-pp-ani');
            $('#pp-right')
            .removeClass('right-pp-ani-b pausedPlayIcon')
            .addClass('right-pp-ani');
            console.log('playing, now paused');
        };
        });
    }); // Video click functions end
    
    // 'unmute' click function
    $('#unmute').click(function() {
        if( $('#reel').prop('muted') ) {
            $('#reel').prop('muted', false);
            $(this).fadeOut(100);
            $('#mute').fadeIn(100);
        };
    }); //'Unmute' function end

    // 'mute' click function
    $('#mute').click(function() {
        if( $('#reel').prop('muted', false) ) {
            $('#reel').prop('muted', true);
            $(this).fadeOut(100);
            $('#unmute').fadeIn(100);
        };
    }); //'Mute' function end

    // 'Play' click function
    $('#play-button, #reel')
        .on('click',function() {
        if( $('#reel').prop('paused') ) {
            $('#reel').trigger('play');
            $('#left-pp').addClass('left-pp-ani-b');
            $('#pp-right').addClass('right-pp-ani-b');
            $('#pp-left, #pp-right')
                .on('animationend', function(){
                    $('#left-pp').removeClass('left-pp-ani-b');
                    $('#right-pp').removeClass('right-pp-ani-b');
                });
                console.log('played w/button');
                
                // $('#play-button').fadeOut(100);
            } else {
                $('#reel').trigger('pause');
                $('#left-pp')
                    .addClass('left-pp-ani')
                    .on('animationend', function(){
                        $(this).removeClass('left-pp-ani')
                    });
                $('#right-pp')
                    .addClass('right-pp-ani')
                    .on('animationend', function(){
                        $(this).removeClass('right-pp-ani');
                    });
                        console.log('paused w/button');
        };
    }); // 'Play' function end
*/
}); // '(document).ready' function end