/*
 * Add listeners for form input fields
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

for (var i = 0; i < formInputFieldIds.length; i++) {
  console.log(formInputFieldIds[i]);
  var formInputField = document.getElementById(formInputFieldIds[i]);
  if (formInputField !== null) {
    console.log("Adding listener for: "+ formInputFieldIds[i]);
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

var formButtonsObjectKeys = Object.keys(formButtonsObject);
for (var i = 0; i < formButtonsObjectKeys.length; i++) {
  var formButtonObjectKeyName = formButtonsObjectKeys[i];
  var formButtonObjectKeyIds = formButtonsObject[formButtonObjectKeyName];
  for (var ii = 0; ii < formButtonObjectKeyIds.length; ii++) {
    var formButton = document.getElementById(formButtonObjectKeyIds[ii]);
    if (formButton !== null) {
      formButton.addEventListener("click", function(event) {
        var eventId = event.target.id;
        var formButtonsObjectKeys = Object.keys(formButtonsObject);
        for (var i = 0; i < formButtonsObjectKeys.length; i++) {
          var formButtonObjectKeyName = formButtonsObjectKeys[i];
          var formButtonObjectKeyIds = formButtonsObject[formButtonObjectKeyName];
          if (formButtonObjectKeyIds.includes(eventId)) {
            console.log(formButtonObjectKeyName + ": " + eventId);
          }
        }
      });
    }
  }
}