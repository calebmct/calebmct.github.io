let maths = (420*Math.pow(.82,4));
$(document).ready(function() {
    $("#bio_bg").css({'height':(($("#bio_blurb").height())+(maths)+'px')});
    var bioBg = $("#bio_bg").css({'height':(($("#bio_blurb").height())+(maths)+'px')});
    $("#resume_section").css({'margin-top':(($("#bio_blurb").height())+(maths)+'px')});
    console.log(bioBg);
    animateBioBg();
    console.log(2);
    $(window).resize(function() {
        $("#bio_bg").css({'height':(($("#bio_blurb").height())+(maths)+'px')});
        $("#resume_section").css({'margin-top':(($("#bio_blurb").height())+(maths)+'px')});
        console.log("resize");
    });
});
function animateBioBg() {
    $("#bio_bg").css({'animation': 'bio_bg forwards 1s .5s ease-out'});
    console.log(3);
};