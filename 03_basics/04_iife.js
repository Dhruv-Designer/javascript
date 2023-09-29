// Immedieately Invoked Functions Expressions (IIFE)

(function one() {
    console.log("hello");
})(); // to immdiete call the functions

(() => {
    console.log("hello");
})();

((name) => {
    console.log(`${name}`);
})("test");