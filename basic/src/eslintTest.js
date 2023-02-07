/* eslint no-constant-condition :"off"
    ,no-unused-vars : ["error" , {
        "vars":"all",
        "args" : "after-used"
    }]
    ,eqeqeq : "error"
    ,curly : "off" */
let a = 10;
if (111 === 111) a = 20;
if (111 === 111) {
  a++;
}
//"args" : "after-used" 마지막으로 사용된 인수까지 검사하지않고 그 이후로 검사하는 option
(function (foo, bar, baz, qux) {
  return bar;
})();

//eslint-disable-next-line
console.log("never");

console.log("never"); /*eslint-disable-line*/
console.log("never"); //eslint-disable-line

/*eslint-disable-next-line*/
console.log("never");
console.log("never");

function _test() {}

_test();
