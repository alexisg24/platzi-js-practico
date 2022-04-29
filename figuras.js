//Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
const areaCuadrado = ladoCuadrado * 4;

console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);
console.log(`El perimetro del cuadrado es ${areaCuadrado}cm^2`);
console.groupEnd();

//Triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;

console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y su base ${baseTriangulo}cm`);
console.log(`La altura del triangulo es de ${alturaTriangulo}cm`);
console.log(`El perimetro del triangulo es de ${perimetroTriangulo}cm`);
console.log(`El area del triangulo es de ${areaTriangulo}cm^2`);
console.groupEnd();

//Circulo
console.group("Circulos");
const radio = 4;
const diametro = radio*2;
const pi = Math.PI;
const perimetroCirculo = diametro*pi;
const areaCirculo = (radio*radio)*pi;

console.log(`El radio del circulo es de ${radio}cm`);
console.log(`El diametro del circulo es de ${diametro}cm`);
console.log(`Pi es: ${pi}`);
console.log(`El perimetro del circulo es de ${perimetroCirculo}cm`);
console.log(`El area del circulo es de ${areaCirculo}cm^2`);
console.groupEnd();