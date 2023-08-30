"use strict"; //for naming conflict(var,let,const na likhle ata likhe dibo)

var x = 10; //perent(global scope any child can access here)

function myFunc() {
  var y = 22; //child (local scope outside of the function we can't access this)
  console.log(`${x} from myFunc()`);
  //upper the code ${} this is dynamical data access
}

myFunc(); //call the function
x = 20; // we changed parent

function myFunc() {
  var y = 22; //child (local scope outside of the function we can't access this)
  console.log(`${x} from myFunc()`);
  //upper the code ${} this is dynamical data access
}

myFunc(); //call the function

//scope like is world
