//  when the user first accesses the page, they are shown an intro message
//  in the HTML we could have a <div> with the introduction
//
//  users can click the start button, which will start the game timer
var counter = document.querySelector("#counter");
var subtractButton = document.querySelector("#subtract");


var count = localStorage.getItem("count");
counter.textContent = count;


subtractButton.addEventListener("click", function () {
    if (count > 0) {

    }
    count = --;
    counterElement.textContent = count;

    localStorage.setItem("count", count);
});

//
//  variable to store the current count, set to 0 by default

//  variable to store the array of questions
//  variable to store the index of the current question they are answering
//
//
//
//
//      
//
//
//
//      
//     