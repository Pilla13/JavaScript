// Задание №4.
// Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
// основания равным значению переменной a7 из задания 2, результат поместите в
// переменную VCilindra:

let
CWidth = a7;
CLength = 10;
VCilindra = 3.14 * ((a7/2)**2) * CLength;

console.log("%cЗадание №4","font-family: bookman old style;font-size: 18px; color: #4169E1;");
console.log("Диаметр основания цилиндра =" + " " + CWidth + "м");
console.log("Высота цилиндра =" + " " + CLength + "м");
console.log("Объём цилиндра равен" + " " + VCilindra + "м^3");
