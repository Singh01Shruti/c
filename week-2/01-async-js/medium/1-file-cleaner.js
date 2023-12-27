const fs = require('fs');

function write(toWrite){
fs.writeFile('a.txt', toWrite, 'utf8', (err) => {
    if(err){
        console.log("Error in writing file");
        return;
    } else{
        console.log("done");
    }

});
}

function readAndwrite(){ 
fs.readFile('a.txt', 'utf8', (err, data) => {
    if(!err){
       data = data.split(' ');
       data = data.filter(function(element) {
        return element !== '';
       }).join(' ');
       write(data);
    } else{
        console.log(err);
    }
    
});
}

readAndwrite();