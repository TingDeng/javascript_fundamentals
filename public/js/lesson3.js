// This is an internal script tag. We will use it to play
// around.

// 1. Getting DOM elements by Id
  var firstDiv=document.getElementById('first');
  console.log(firstDiv);
// 2. Getting DOM elements by class
  var iconBars=document.getElementsByClassName('icon-bar');
  console.log(iconBars)
// 3. Getting DOM elements by tag
  var anchorElements=document.getElementsByTagName('a');
  console.log(anchorElements);
// 4. Creating a DOM element
   var hrElement=document.createElement('hr');
   console.log(hrElement);
// 5. Using querySelector to grab DOM elements
   var firstDiv2=document.querySelector('#first');
   console.log(firstDiv2);
// 6. Using querySelectorAll to grab DOM elements that have // the same selector
    var iconBar=document.querySelectorAll(".icon-bar");
    console.log(iconBar);
    var anchorElements2=document.querySelector('a');
    console.log(anchorElements2);
    var iconBars2=document.querySelectorAll('.icon-bar');
    console.log(iconBars2);
    var anchorElements2=document.querySelectorAll('a');
    console.log(anchorElements2);
//****************************************************************//

// Assignment: Complete the following tasks. Console.log all of the variables.
//  1. Assign the element with the Id of second in a variable called second.
   var secondDiv = document.getElementById('second');
   console.log(secondDiv);
//  2. Assign the elements that have the class container to a variable called containers.
    var containers=document.getElementsByClassName('container');
    console.log("container:",containers);
//  3. Assign all of the li elements to the variable listItems.
     var listItems=document.getElementsByTagName('li');//li is tag name;
     console.log("listItems:",listItems);
//  4. Create a new h3 tag and assign that to the variable heading.
      var heading=document.createElement('h3');
      console.log("heading:",heading);
//  5. Complete #1 using the querySelector method on the document object but change the variable name to secondQuery.
     var secondQuery=document.querySelector('#second');
     console.log("secondQuery:",secondQuery);
//  6. Complete #2 using the querySelectorAll method on the document object but change the variable name to containersQueryAll.
      var containersQueryAll=document.querySelectorAll('.container');//. means class name, when use querySelectorAll,we need tell if it is a #or.
      console.log('containersQueryAll:',containersQueryAll);
