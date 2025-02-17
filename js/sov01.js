let prom;
function sov(ms) {
    console.log("Skab promise")
    prom = new Promise(dummyFunction => setTimeout(dummyFunction, ms));
    console.log(prom);
    return prom;
}

console.log("Vi starter");
sov(5000).then( () => {
    console.log("Vi har sovet");
    console.log("Vi er klar til at fortsætte")
    console.log(prom);
});

console.log("SLUT");

