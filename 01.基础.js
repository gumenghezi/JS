// // 变量类型
// let a = 1;
// Object.prototype.toString.call(a)
// console.log(Object.prototype.toString.call(a))


// // 变量转基本类型
// // 对象在转换基本类型时，首先会调用 valueOf 然后调用 toString。并且这两个方法你是可以重写的。
// let b = {
//     valueOf() {
//       return 0;
//     },
//     toString() {
//       return '1';
//     },
//     [Symbol.toPrimitive]() {
//       return 2;
//     }
// }
// console.log(1 + b) // => 3
// console.log('1' + b) // => '12'


// // == 操作符
// console.log(Number(''))


// var foo = 1;
// (function foo() {
//     foo = 10
//     console.log(foo)
// }())

// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3,
//   },
// };
// obj.c = obj.b;
// obj.e = obj.a;
// obj.b = obj.c;
// // obj.b.d = obj.b;
// // obj.b.e = obj.b.c
// let newObj = JSON.parse(JSON.stringify(obj));
// console.log(newObj);


