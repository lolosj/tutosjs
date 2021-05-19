function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });


  let promise2 = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
    //console.log(this);
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 3000);
    setTimeout(() => reject(new Error("Whoops!")), 4000);
  });



let promise3 = new Promise(function(resolve, reject) {
    // not taking our time to do the job
    resolve(123); // immediately give the result: 123
  });


let promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 4000);
    setTimeout(() => reject("error"), 2000);
  });
  
  // resolve runs the first function in .then
//  promise4.then(
//    result => console.log(result) , // shows "done!" after 1 second
//    error => console.log(error) // doesn't run
//  );

//  console.log("ici");

  promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
//promise.then(alert);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));


