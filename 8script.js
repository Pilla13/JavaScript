// Задание №8.
// Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
// a+2(x-b)=16;
// b(x+15)=a+6x;
// x+2x+ax+bx=23780.

let
A = 8;
B = 3;

// a+2(x-b)=16;
x1 = ((16-A)/2)+ B;

// b(x+15)=a+6x;
x2 = ((A-(B*15))/3)*(-1); 

// x+2x+ax+bx=23780;
x3 = 23780/(1+2+A+B);

console.log("%cЗадание №8","font-family: bookman old style;font-size: 18px; color: #4169E1;");
console.log("x1 = " + x1);
console.log("x2 = " + x2);
console.log("x1 = " + x3);