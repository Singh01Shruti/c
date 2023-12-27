var cnt = 0;

function count(){
    console.log(cnt++);
    setTimeout(function() {
        count();
    }, 1000);
}

count();

