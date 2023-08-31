//var is in global scope

if (true) {
    var varVariable = "this is var"
}
console.log(varVariable); //we can access varVariable outside of the scope

// let is in block scope
//case-1
if (true) {
    let letVariable = " this is let"
};
//case -2
if (true) {
    let letVariable2 = " this is let2"
    console.log(letVariable2); //will print value
    
}


// const also block scope let variable can be change but const can't be reassigned.
 //case-1

if (true) {
    let name = "aktab hossain"
    name = "mohammad hossain"; //we changed name value but it skill works.
    console.log(name);
    
};

//case-2
if (true) {
    const name2 = "aktab hossain"
    name2 = "mohammad hossain"; //it won't work here we reassign name value.
    console.log(name2);
    
}