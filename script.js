    var instagram = document.querySelector("instagram");
    var instagramUrl =  'https://www.instagram.com/priyankbhatt09?igsh=MXc3NmxveXFoenU4bA==';
    document.addEventListener('DOMContentLoaded', function() {
    instagram.addEventListener("click" ,() =>{
       
        window.location.href = instagramUrl;
    });
});

    var buttonAction =document.getElementById('sendButton');

    buttonAction.addEventListener('click', function() {
        // Retrieve values from inputs
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        if (!fullName || !email || !phoneNumber || !subject || !message) {
            alert('Please fill out all fields.');
            return; // Exit the function if any field is empty
        }

        // Your WhatsApp phone number (for sending messages)
        var whatsappNumber = "7302022238"; // Replace with your WhatsApp number

        // Construct the message
        var formattedMessage = `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`;
        
        // Construct the WhatsApp URL
        var url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
        
        // Open the URL in a new tab
        window.open(url, "_blank");
    });

