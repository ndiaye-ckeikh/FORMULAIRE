 
function sendmail() {

    var name = document.getElementById('Name').value;
    var email =document.getElementById('Sender').value;
    var subject = document.getElementById('Subject').value;
    var message = document.getElementById('Message').value;
    var adresse =document.getElementById('Adresse').value;

    var Body = 'Name: ' + name +' '+ adresse+'<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;
    

    Email.send({
        SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To:  "cheikhndiaye95476@gmail.com",
        From: email,
        Subject: "Message de Contact " + name,
        Body: Body
    }).then(
        message => {
             
            if (message == 'OK') {
                alert('Mail envoyer avec success ');
            } else {
                console.error(message);
                alert('Erreur message. ');

            }

        }
    );



}
 