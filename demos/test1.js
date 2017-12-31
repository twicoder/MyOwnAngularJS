function tryIt1(){
    try{
        console.log("in try");
        return 1;
    } finally {
        console.log("In finally");
    }
}

console.log(tryIt1());