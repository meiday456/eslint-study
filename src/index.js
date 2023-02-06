function getSquare(n1, n2) {
    return n1 * n2
}

getSquare(1, 1)

console.log("nono")


g.name = 1
g2.name = 2

g = 10

g2 = 11;/*eslint-disable-line*/

//이 주석 밑으로 eslint 에서 제외된다.벌
// 만약 이 주석보다 위에 /*eslint-disable-line*/ 가
// 기재되어 있다면 적용되지않는다.
// disable to enable 코드 블럭
/* eslint-disable */
console.log($.name);
/* eslint-enable */

//개별 라인 개별 options 삽입
console.log(noUse.name)// eslint-disable-line no-undef

//eslint-disable-next-line
g2 = 11

//구간 여러가지 options 해제

let str = "~~~~"
/* eslint-enable*/

//inline ignore 방식과 file ignore 방식을 제공한다, .eslintignore

let a = 10
switch (a) {
case 0 :
    a = 20
    break
case 10 :
    a = 30
    break
default :
    a = 50
    break
}