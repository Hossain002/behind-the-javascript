//normal parametre pass
var sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 6));

//laxical scope way
num1 = 3;
num2 = 6;
var sum2 = function () {
  return num1 + num2 + 1;
};

console.dir(sum2());

//closure example

/* closure are function that refer to indipendent variable(variable that are used locally, but defined in a enclosing scope). other words, these function remember the environment in which they were created */

num2 = 6; //global variable
var closure = function () {
  num1 = 3; // local variable define in enclose scope
  return function () {
    return num1 + num2 + 3; //private propertie outside of function can't accessable.
  }; // this function is closure (nijer peter moddhe value niye neyaei holo closure)
};
var myfunc = closure();

console.log(myfunc()); //without name of()  it's anonymous function
