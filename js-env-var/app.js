const http = require('http');
require('dotenv').config(); // .config({path: ...})

if (!process.env.port)
    console.log("blabla attention: set your .env file");
else {
    console.log(process.env);
    console.log(process.env.PORT);
}