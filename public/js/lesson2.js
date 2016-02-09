var number=0; var a=2; var b=2.0;//same with 2;
var c=false;  var d=true;
var x ='bacon';
var y ="bacon";
var z = [true,1,'hummer'];
var obj={firstName:'justin',lastName:'Dennison'};
var objAlso={'firstName':'justin','lastName':'Dennison'};//firstName has quote then call it should add quote
console.log(a+b);
console.log(c&&d);
console.log(x+y+x);
z[2] ="crowbar";
console.log(z);
console.log(obj.firstName);
console.log(objAlso["firstName"]);
obj.firstName="MC";
console.log(obj.firstName);
console.log('number'+number);

    //Assignment: Create a variable for each of the following data types-
                //A. number
                //B. string
                //C. boolean
                //D. array
                    //i. Create an array with three numbers in it.
                //E. object
                    //i. You must have two properties name and age
            var o={name:"Ann",age:1};
                    //ii. You can set those properties to values of any type, but you must have a value
            console.log("name: "+o.name+","+"age: "+o.age);

      //  A. Using the number and MDN documentation/others that you can console.log the results of various math operations: *, /, +, -, square root, floor, ceil, and a random number between 0 and 1.
      var i=3; var j=4; var t=Math.sqrt(j);var ran=Math.random(); var f=Math.floor(Math.sqrt(i));//Returns x, rounded downwards to the nearest integer
      var ce=Math.ceil(3.45);//Returns x, rounded upwards to the nearest integer
      console.log(i*j+","+i/j+","+(i+j)+","+(i-j)+","+t+","+ran+",\t"+f+","+","+ce);
      // B. Using the string variable console.log each of the following:
              //  - Add the word "Hey" to the end of your string variable
              //  - The second letter of your string variable's value
              //  - The index of the letter 'e' in your string
              //  - The first three letters of your string
      var st="lala!";var h="Hey"; var str =st.charAt(1);var n= h.indexOf('e');
      var thr=st.slice(0,2);
      console.log(st+h);
      console.log(str);
      console.log(n);
      console.log(thr);


      //C. Use your boolean [called bool in these instructions] print the results of your boolean expressions for the following:
                //- !bool
                var b=false;
                console.log(!b);
                console.log(b||false);
                console.log(b||true);
                console.log(b&&true);
                console.log(b&&false);
                console.log(!(b||false));
                console.log(!(b&&false));
              //  - bool || false
              //  - bool || true
              //  - bool && false
              //  - bool && true
              //  - !(bool || false)
              //  - !(bool && false)
      // D. Console.log the following:

          //  - The last element of the array WITHOUT changing the array
          var arr=[1,2,2,4,5];
          console.log(arr[arr.length-1]);
          //  - The last element of the array WITH changing the array*
          console.log(arr.push(3));

          //  - Log the array after adding an element to the end of the array
          //  - Log the array after adding an element to the second position*
          //  - Log the array after removing an element from the third position*
          console.log(arr.splice(3, 1));
      //  E. Console.log the following:
          //  - The value of the name property of the object
          console.log(o.name);
          o.age=4;
          console.log(o.age);
          //  - The value of the name property in a different way than you did initially
          //  - Change the age property of the object and log the object
          //  - Change the age property of the object and log the object but use a different method

      //  CHALLENGE: Print the elements of your array from D one at a time using a for loop.
