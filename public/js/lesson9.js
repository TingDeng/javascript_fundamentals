/*
  We are going to complete the same assignment that we did with standard
  JavaScript but using jQuery. This will provide some context and comparison.

*/

//So when you click there is an event fired. To handle clicks then you need to write a click handler function and attach it to a button
var $clickyButton = $('#clicky-button');
//you can change click to double click, mouseenter...
//Get the clicky-button and store that in a variable
$clickyButton.on('click',clickHandler);
//Add an event listener to the button so that it is waiting for a click on the button to run
  function clickHandler(){
  //  alert('I am using jQuery!');
  $clickyButton.text("I've been clicked!");
  }

//Refactor to have the function that is run during the click as a separate function --> separation

/******************************************************************/
//
// Assignment:
// A. Create a div with the id of second and class of row under the div with the id of first
// B. Add a button inside that div with the id of button and the classes btn and btn-success
// C. Grab the element using the id and assign that to a variable called myButton.
  var $myButton=$('#button');
// D. Create a function expression that uses the prompt feature from JavaScript asking for the user's name. Assign the return value to the variable name. Alert the name back to the user.
function promptName(){
    var name=prompt('Your name');
    alert(name);
}
// E. Add a click listener to the button that is listening for a click and runs the function expression when clicked.
$myButton.on('click',promptName);
// CHALLENGE: Create an input field with the id of name-input. Create and add a focus listener to that input field that alerts the user they have "focused" or clicked inside the input box.
 var $nameInput=$('#name-input');
 function focusu(){
     alert("focused");
 }
 $nameInput.on('focus',focusu);
