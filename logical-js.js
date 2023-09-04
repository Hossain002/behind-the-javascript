let exp1 = true;
let exp2 = false;
//one expression have to be true then return true otherwise false.

//case-1

if (exp1 || exp2 || exp2) {   
    console.log("hello");    //true
    
} else {
    console.log("false cale");  
    
};
//case-2

if (exp2 || exp2 || exp2) {
    console.log("hello");  
    
} else {
    console.log("false value");    //false
    
};

// two expression have to be true otherwise false
//case-1
if (exp1 && exp1 ) {
    console.log("hello mister");   //true
    
} else {
    console.log("false value");
    
};
//case-2
if (exp1 && exp2 ) {
    console.log("hello mister");
    
} else {
    console.log("false value");   //false
    
};
    
