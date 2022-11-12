"use sctrict";
function first () {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
// first();
// second();

// function learnJS (lang, callbackFirst, callbackLast) {
function learnJS (lang, callbackFirst) {
    callbackFirst();
    console.log(`я учу: ${lang}`);

}

function doneFirst() {
    console.log('я прошел этот уроk first!');
}

function doneLast() {
    setTimeout(function() {
        console.log('я прошел этот уроk last - задержка!');
    }, 500);
    
}

// learnJS('JavaScript', doneLast,doneFirst);
learnJS('JavaScript', doneLast);