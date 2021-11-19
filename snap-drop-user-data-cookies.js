/*
 * Start Configuration
 */

var formInputFieldIds = [
  "firstName",
  "lastName",
  "mobilePhoneNumber",
  "emailAddress",
  "verificationCode",
  "homeAddress",
  "zipCode",
  "apartment/suite",
  "dateOfBirth",
  "driverLicenseNumber",
  "state",
  "socialSecurityNumberOrItin",
];

var formButtonIds = [
  "rentbtn",
  "ownbtn",
  "lessthanonebtn",
  "onetothreebtn",
  "threetofivebtn",
  "fiveormorebtn",
];

/*
 * End Configuration
 */

/*
 * Add listeners for form input fields
 */

for (var i = 0; i < formInputFieldIds.length; i++) {
  var formInputField = document.getElementById(formInputFieldIds[i]);
  if (formInputField !== null) {
    formInputField.addEventListener("focusout", function(event) {
      console.log(event.target.id + ": " + event.target.value);
    });
  }
}

/*
 * Add listeners for form buttons
 */

for (var i = 0; i < formButtonIds.length; i++) {
  var formButton = document.getElementById(formButtonIds[i]);
  if (formButton !== null) {
    formButton.addEventListener("click", function(event) {
      console.log("Button ID " + event.target.id + " was clicked");
    });
  }
}