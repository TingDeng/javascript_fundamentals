// 1. Getting DOM elements by Id
    var firstDiv = $('#first');
    console.log(firstDiv);
 // 2. Getting DOM elements by class
    var iconBars=$('.icon-bar');
    console.log(iconBars);
 // 3. Getting DOM elements by tag
    var navs=$('nav');
    console.log(navs);
 // 4. Creating a DOM element
    var img=$('<img></img>');
    console.log(img);
 // 5. Using querySelector to grab DOM elements
     var button=$('button');
     console.log(button);
 // 6. Using querySelectorAll to grab DOM elements that have // the same selector

//****************************************************************//
//
//    Assignment: Complete the following tasks. Console.log all of the variables.
//     1. Assign the element with the Id of second in a variable called second.
       var second=$('#second');
       console.log(second);
//     2. Assign the elements that have the class container to a variable called containers.
       var containers=$('.container');
       console.log(containers);
//     3. Assign all of the li elements to the variable listItems.
       var listItems=$('li');
       console.log(listItems);
//     4. Create a new h3 tag and assign that to the variable heading.
       var heading=$('<h3></h3>');
       console.log(heading);
//     5. Complete #1 using the querySelector method on the document object but change the variable name to secondQuery.
       var secondQuery=$('#second');
       console.log(secondQuery);
//     6. Complete #2 using the querySelectorAll method on the document object but change the variable name to containersQueryAll.
        var containersQueryAll=$('.container');
        console.log(containersQueryAll);
