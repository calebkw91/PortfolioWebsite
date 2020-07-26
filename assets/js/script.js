function formSubmit(){
    var contactName = document.forms["contactForm"]["inputName"].value;
    var contactEmail = document.forms["contactForm"]["inputEmail"].value;
    var contactMessage = document.forms["contactForm"]["messageText"].value;
    
    
    if(contactEmail == ""){
        alert("Email must be filled in.");
        document.forms["contactForm"]["email"].focus();
        return false;
    }
    
    if(contactName == ""){
        alert("Name must be filled in.");
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    
    // if(contactPhone == "" || isNaN(contactPhone)){
    //     alert("Phone number must be filled in.");
    //     document.forms["contactForm"]["phone"].focus();
    //     return false;
    // }
    
    alert("Information Submitted!");
    
    return false;
}