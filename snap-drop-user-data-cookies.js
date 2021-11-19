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
      var eventId = event.target.id;
      var eventValue = event.target.value;
      console.log(eventId + ": " + eventValue);
    });
  }
}

/*
 * Add listeners for form buttons
 */

var formButtonsObjectKeys = Object.keys(formButtonsObject);
for (var i = 0; i < formButtonsObjectKeys.length; i++) {
  var formButtonObjectKeyName = formButtonsObjectKeys[i];
  console.log(formButtonObjectKeyName);
  var formButtonObjectKeyIds = formButtonsObject[formButtonObjectKeyName];
  console.log(formButtonObjectKeyIds);
  for (var ii = 0; ii < formButtonObjectKeyIds.length; ii++) {
    var formButton = document.getElementById(formButtonObjectKeyIds[ii]);
    if (formButton !== null) {
      console.log(formButton);
      formButton.addEventListener("click", function(event) {
        var eventId = event.target.id;
        console.log("Field " + formButtonObjectKeyName + " value was chosen by clicking button with ID " + eventId);
      });
    }
  }
}