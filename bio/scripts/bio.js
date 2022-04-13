$(document).ready(function() {
    let maths = (500*Math.pow(.84,4));
    $(document).ready(function(){$("#bio_bg").css({'height':(($("#bio_blurb").height())+(maths)+'px')})});
    $(window).resize(function() {
        $("#bio_bg").css({'height':(($("#bio_blurb").height())+(maths)+'px')});
    })
}); // ready function end