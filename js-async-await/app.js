//const fetch = require("node-fetch");

async function f() {
    return 1;
  }

//console.log(f());

async function f() {
    return Promise.resolve(1);
  }
  
  
async function f2() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
    console.log("inside before");
    let result = await promise; // wait until the promise resolves (*)
    console.log("inside after");
    console.log(result); // "done!"
  }
  
/*  console.log('before');
  f2();

  console.log('apres');
*/

/*  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }
  
  new Waiter()
    .wait()
    .then(console.log); // 1 (this is the same as (result => alert(result)))
*/

async function f() {

        try {
          let response = await fetch('./app.js');
          let data = await response.json();
        } catch(err) {
          console.log("erreur", err); // TypeError: failed to fetch
        }
      }
      
    f();