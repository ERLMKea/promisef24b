function sov(ms){
    return new Promise( dummyFunction => setTimeout(dummyFunction, ms));
}

async function doSomethingAsync(){
    console.log("11111111 før sov");
    await sov(5000);
    console.log("1111færdig med at sove i async process");
}


console.log("start1");
doSomethingAsync();
console.log("slut1");

