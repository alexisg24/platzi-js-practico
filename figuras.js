//Cuadrado
console.group("Cuadrados");
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

console.log(`El perimetro del cuadrado es ${perimetroCuadrado(4)}cm^2`);
console.log(`El area del cuadrado es ${areaCuadrado(5)}cm^2`);
console.groupEnd();

//Triangulo
console.group("Triangulos");
const perimetroTriangulo = (lado1, lado2, base) => lado1+lado2+base;
const areaTriangulo = (base, altura) => (base*altura)/2;

console.log(`El perimetro del triangulo es de ${perimetroTriangulo(7,5,6)}cm`);
console.log(`El area del triangulo es de ${areaTriangulo(6,8)}cm^2`);
console.groupEnd();

//Circulo
console.group("Circulos");
const diametro = (radio) => radio*2;
const pi = Math.PI;
const perimetroCirculo = (radio) => diametro(radio)*pi;
const areaCirculo = (radio) => (radio*radio)*pi;

console.log(`El diametro del circulo es de ${diametro(4)}cm`);
console.log(`Pi es: ${pi}`);
console.log(`El perimetro del circulo es de ${perimetroCirculo(8)}cm`);
console.log(`El area del circulo es de ${areaCirculo(4)}cm^2`);
console.groupEnd();