var isFormVisible = false; // Track whether the form is visible or not
var newUserButton = null; // Reference to the new user button
var userActionsVisible = false; // Track whether the user actions are visible or not
var userActions = null; // Reference to the user actions container

function showNewUserForm() {
  var newUserContainer = document.getElementById("newUserContainer");

  if (!isFormVisible) {
    // Create the form elements
    var form = document.createElement("form");
    form.className = "newuser-form";

    var nameLabel = document.createElement("label");
    nameLabel.innerText = "Name:";
    var nameInput = document.createElement("input");
    nameInput.type = "text";

    var emailLabel = document.createElement("label");
    emailLabel.innerText = "Email:";
    var emailInput = document.createElement("input");
    emailInput.type = "email";

    var vehicleLabel = document.createElement("label");
    vehicleLabel.innerText = "Vehicle Registration:";
    var vehicleInput = document.createElement("input");
    vehicleInput.type = "text";

    var submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.innerText = "Submit";
    submitButton.onclick = function () {
      if (
        nameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        vehicleInput.value.trim() !== ""
      ) {
        createNewUserButton(nameInput.value);
        newUserContainer.removeChild(form);
        isFormVisible = false;
      }
    };

    // Append the form elements to the form container
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(vehicleLabel);
    form.appendChild(vehicleInput);
    form.appendChild(submitButton);

    // Replace the "New User" button with the form
    newUserContainer.appendChild(form);
    isFormVisible = true;
  }
}

function createNewUserButton(name) {
  newUserButton = document.createElement("button");
  newUserButton.type = "button";
  newUserButton.className = "newuser";
  newUserButton.innerText = name;

  // Add click event listener to the new user button
  newUserButton.addEventListener("click", function () {
    if (!userActionsVisible) {
      showUserActions(newUserButton);
    } else {
      hideUserActions();
    }
  });

  document.body.appendChild(newUserButton);
}

function showUserActions(button) {
  userActions = document.createElement("div");
  userActions.className = "user-actions";

  var clockInButton = document.createElement("button");
  clockInButton.type = "button";
  clockInButton.innerText = "Clock In";

  var sickButton = document.createElement("button");
  sickButton.type = "button";
  sickButton.innerText = "Sick";

  var holidayButton = document.createElement("button");
  holidayButton.type = "button";
  holidayButton.innerText = "Holiday Request";

  userActions.appendChild(clockInButton);
  userActions.appendChild(sickButton);
  userActions.appendChild(holidayButton);

  // Insert user actions below the button
  button.parentNode.insertBefore(userActions, button.nextSibling);

  userActionsVisible = true;
}

function hideUserActions() {
  userActions.parentNode.removeChild(userActions);
  userActionsVisible = false;
}
