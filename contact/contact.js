function sendMail()
{
    var theSubject = "Reaching Out via Portfolio Site";
    var theEmail = document.getElementById("input_email").value;
    var theMessage = document.getElementById("input_message").value;
    document.location.href = "mailto:caleb.mctwigan@gmail.com"
        
        + "%0D%0A?cc=" + encodeURIComponent(theEmail)
        + "%0D%0A&subject=" + encodeURIComponent(theSubject)
        + "%0D%0A&body=" + encodeURIComponent(theMessage);
}