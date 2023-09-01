//A promise is an object that represent the eventual complelation or failure of an asynchronous operation


//create a promise
const meeting = true;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       
        const meeting = {
            name:"Monthly Meet",
            locaton:"Sonir akhra",
            time:"5:00 PM"
        };
        if(meeting){
            resolve(meeting);
        } else {
            reject("No meeting has founded!");
        }
    }, 3000);// this function will execute after 3sec 
});


//use promise
promise
.then((result)=>{
    console.log(result);//an object found
    for (const meeting in result) {   // object through the iteration (for in )
        console.log(result[meeting]);
            
    }
    
})
.catch((error)=>{
    console.error(error);
}

);



