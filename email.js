
//sending e-mail from contact form
var name = $('#contactName').val();
var email = $('#contactEmail').val();
var subject = $('#contactSubject').val();

$('#sendMail').click(function() {
/*  $.ajax({
  type: 'POST',
  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  data: {
    'key': "481e933c007a32b93b3aaa9b3fdc58e0-us3",
    'message': {
      'from_email': 'gosee@gmail.com',
      'to': [
          {
            'email': email,
            'name': name,
            'type': 'to'
          },
          {
            'email': 'RECIPIENT_NO_2@EMAIL.HERE',
            'name': 'ANOTHER RECIPIENT NAME (OPTIONAL)',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': subject,
      'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 }); */

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
