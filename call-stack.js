var name = "Hossain"; 

function first() { 
    var welcome = "Hello";
    second();
    console.log(welcome +" "+ name);
    
};
 function second() { 
    var welcome2 = "Hi";
    third();
    console.log(welcome2 +" "+ name);

    
    
 };
  
 function third() { 
    var welcome3 = "Hey";
    console.log(welcome3 +" "+ name);
    
    
 };
 first();



 /*above the code first() call second () and through the second function go and call third() and third function execute in stack after third() execute we have second() it will execute and then first()  */




