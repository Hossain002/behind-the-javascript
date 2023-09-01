//callback used to use in asynchonous operation now days we can use promise rather then callback


//callback is pass a function to another one as an argument

function doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  console.log(doOperation());



  ///two


  function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();


  //simple callback


  function myFunc(callbek) {
    callbek();
    
  }


  function callbek() {
    let myName = "Mohammad Hossain";
    console.log(myName);
    
  }

  myFunc(callbek);

  // second simple callback


  function value(callback) {
    callback();
  };

function aValueForYour(){
  console.log('I Love You!');
  
};

value(aValueForYour);


//asynchronous way


function fetchData(callback) {
  setTimeout(() => {
      const data = "Fetched data from server";
      callback(data); // Execute the callback function with the fetched data
  }, 2000); // Simulating a 2-second delay
}

// A callback function to be executed after data is fetched
function processData(data) {
  console.log("Processing data:", data);
}

// Calling the fetchData function and passing the processData callback
fetchData(processData);

  
  