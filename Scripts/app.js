
// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){

    let myFunctionalVariable = 0;

    function Start(){
        let myLocalVariable = 0;
        console.log(`App started... ${myFunctionalVariable}`);
    }

    window.addEventListener("load",Start);
})();