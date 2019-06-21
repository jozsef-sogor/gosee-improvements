
//sending e-mail from contact form---elasticemail API  --- //setup from documentation
var name = $('#contactName').val();
var email = $('#contactEmail').val();
var subject = $('#contactSubject').val();

$('#sendMail').click(function() {

 Email.send({
     Host : "smtp.elasticemail.com",
     Username : "sogor.jozsef98@gmail.com",
     Password : "1bc29a1d-a738-478d-a863-a12e75ab7963",
     To : email,
     From : "sogor.jozsef98@gmail.com",
     Subject : subject + "verification",
     Body :  "Dear" + name + "we have recieved your inqury. We'll get back to you as soon as possible. Best regards, GoSee"
 }).then(
   message => alert("message")
 );


});
