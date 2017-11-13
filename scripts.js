/**********************************
Slideshow JS
***********************************/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/**********************************
VALIDATE FORM
***********************************/



/* Store the array values in a variable */
function validateForm(formsCheck) {
  var formFields = ["user_name", "user_email", "user_phone", "user_subject", "user_message"];

  /* If variable is empty run the loop */
  var errors = "";
  /* Check each user field to see if left blank, replace with a concatanated alert message telling the user which field is left blank. */
  for (i = 0; i < formFields.length; i++) { 
      var x = document.forms["myForm"][formFields[i]].value;
      if (x == "") {
        var labelName = document.getElementById(formFields[i] + '_lbl').innerText.replace(":","");
        errors +=  '- ' + labelName + ' is required.\n'
    }
  }

  if (errors != "")
  {
    alert(errors);
    return false;
  }
  

}




