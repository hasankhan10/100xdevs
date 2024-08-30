function setTimeOutPromisified(resolve){
    
    function something(resolve){
        setTimeout(resolve,3000);
    }
    const p = new Promise(something)
    return p;
}

function callback(){
    console.log("HI this is from .then() methode.");
    
}

function resolve(){
    console.log("this is the first argument of first argument of Promises.");
    
}

setTimeOutPromisified(resolve).then(callback)