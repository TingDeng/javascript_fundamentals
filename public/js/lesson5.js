
    //Lets change some content and a little styles

    //Let's get ahold of all of these elements
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var button = document.querySelector('button.btn.btn-primary');
    var emailOutput = document.querySelector('#email-output');
    var passwordOutput = document.querySelector('#password-output');
    var nameInput = document.getElementById('name');//*
    var nameOutput = document.querySelector('#name-output');//*
    //Let's write a handling function for the button click
    function clickHandler(){
      //use the elements from the form and get their values
      var emailValue = emailInput.value;
      var passwordValue = passwordInput.value;//can force user to input rules you want;
      var nameValue = nameInput.value;//*
      //apply that value as the innerText for the output respective output portions
    emailOutput.innerText = emailValue;//<p>text</p>
    passwordOutput.innerText = passwordValue;//samething above
    nameOutput.innerText = nameValue;//*
      //add a little styling
      emailOutput.style.backgroundColor ='chartreuse';
      passwordOutput.style.backgroundColor ='bisque';
      nameOutput.style.color="red";//*
      nameOutput.style.backgroundColor ="black";//*
    }

    //Let's attach an eventListener to the button for the click event
   button.addEventListener('click', clickHandler);
//
//         Assignment:
//             - Add another form input of your choice... Maybe age or name?
//             - Get a reference to the DOM element and assign that a variable

//             - Add code to the click handler so that you achieve the following:
//                     - You update a value in the output section of your page
//                     - You alter the styles of the output for your field with the following
//                         --> Your font color is red
//                         --> Your element has a black background color
//                         --> The element is added using JavaScript to your page under the already present output portions.
//
