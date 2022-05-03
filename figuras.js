//Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;


//Triangulo
const perimetroTriangulo = (lado1, lado2, base) => parseInt(lado1)+parseInt(lado2)+parseInt(base);
const areaTriangulo = (base, altura) => (base*altura)/2;


//Circulo
const diametro = (radio) => radio*2;
const pi = Math.PI;
const perimetroCirculo = (radio) => diametro(radio)*pi;
const areaCirculo = (radio) => (radio*radio)*pi;

//Dinamismo
//Cuadrado
const calculoPerimetroC = () =>{
    const lado = document.getElementById("cuadrado").value;
    const res = perimetroCuadrado(lado);
    document.getElementById("cuadradoResult").value = res;
};

const calculoAreaC = () =>{
    const lado = document.getElementById("cuadrado").value;
    const res = areaCuadrado(lado);
    document.getElementById("cuadradoResult").value = res;
};

//Triangulo
const calculoPerimetroT = () =>{
    const base = document.getElementById("base").value;
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const res = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("trianguloResult").value = res;
};

const calculoAreaT = () =>{
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const res = areaTriangulo(Number(base), altura);
    document.getElementById("trianguloResult").value = res;
};

const calculoAlturaTI = () =>{
    const base = document.getElementById("base").value;
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    parseInt(lado1,lado2,base);
    if(lado1 == lado2 && lado1 != base){
        const altura = Math.sqrt((lado1**2) - ((lado2**2)/4))
        document.getElementById("altura").value = altura;

    }else{
        alert("No es isosceles")
    }
};


//Circulo
const calculoDiametroC = () =>{
    const radio = document.getElementById("radio").value;
    const res = diametro(radio);
    document.getElementById("circuloResult").value = res;
};

const calculoPerimetroCi = () =>{
    const radio = document.getElementById("radio").value;
    const res = perimetroCirculo(radio);
    document.getElementById("circuloResult").value = res;
};

const calculoAreaCi = () =>{
    const radio = document.getElementById("radio").value;
    const res = areaCirculo(radio);
    document.getElementById("circuloResult").value = res;
};
