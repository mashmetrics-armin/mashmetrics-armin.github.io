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

var formButtonsObject = {
  "rentOrOwn": [
    "rentbtn",
    "ownbtn",
  ],
  "yearsAtThisAddress": [
    "lessthanonebtn",
    "onetothreebtn",
    "threetofivebtn",
    "fiveormorebtn",
  ]
};

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

var formButtonsObjectKeys = Object.keys(formButtonsObject);
for (var i = 0; i < formButtonsObjectKeys.length; i++) {
  var formButtonObjectKeyName = formButtonsObjectKeys[i];
  var formButtonObjectKeyIds = formButtonsObject[formButtonObjectKeyName];
  for (var i = 0; i < formButtonObjectKeyIds.length; i++) {
    var formButton = document.getElementById(formButtonObjectKeyIds[i]);
    if (formButton !== null) {
      formButton.addEventListener("click", function(event) {
        console.log("Field " + formButtonObjectKeyName + " value was chosen by clicking button with ID " + event.target.id);
      });
    }
  }
}