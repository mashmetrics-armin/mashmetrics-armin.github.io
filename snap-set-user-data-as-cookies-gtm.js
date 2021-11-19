/*
 * Add listeners for form input fields
 */
function addListenersForFormInputFields() {
  var formInputFields = [
    {"name": "First Name"},
    {"id": "lastName"},
    {"name": "Mobile Phone Number"},
    {"id": "emailAddress"},
    {"id": "verificationCode"},
    {"id": "homeAddress"},
    {"name": "Zip Code"},
    {"id": "apartment/suite"},
    {"id": "dateOfBirth"},
    {"id": "driverLicenseNumber"},
    {"id": "state"},
    {"id": "socialSecurityNumberOrItin"},
  ];
  
  for (var i = 0; i < formInputFields.length; i++) {
    var formElementObject = formInputFields[i];
    var elementAttributeName = Object.keys(formElementObject);
    var elementAttributeValue = formElementObject[elementAttributeName];
    var elementQuerySelector = "[" + elementAttributeName + "='" + elementAttributeValue +"']";
    var formInputField = document.querySelector(elementQuerySelector);
    if (formInputField !== null) {
      console.log("Adding listener for element matching querySelector(" + elementQuerySelector + ")");
      formInputField.addEventListener("focusout", function(event) {
        var eventElementId = event.target.id;
        var eventElementName = event.target.name;
        var eventElementValue = event.target.value;
        console.log("eventElementId: " + eventElementId + " | eventElementName: " + eventElementName + " | eventElementValue: " + eventElementValue);
      });
    }
  }
}
addListenersForFormInputFields();

/*
 * Add listeners for form buttons
 */

function addListenersForFormButtons() {
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
}
addListenersForFormButtons();