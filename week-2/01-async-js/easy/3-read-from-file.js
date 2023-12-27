const fs = require('fs');


fs.readFile('a.txt', 'utf8', (err, data) => {
    if(err){
        console.log("Error in reading file");
        return;
    }
    console.log(data);
});





