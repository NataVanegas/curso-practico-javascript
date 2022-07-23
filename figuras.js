// Codigo del cuadrado 
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+ "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
// Codigo del Triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del Triangulo miden: "
    + ladoTriangulo1 + "cm,"
    + ladoTriangulo2 + "cm,"
    + baseTriangulo + "cm"
);
console.log("la altura del triangulo es de: " + alturaTriangulo + "cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo+ "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del Triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del Circulo
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");

//Diametro
const DiametroCirculo = radioCirculo * 2;
console.log("El diametro del Circulo es: " + DiametroCirculo+ "cm");

//Pi (3.14159)
const pi = Mach.PI;
//Circunferencia
const perimetroCirculo = DiametroCirculo * pi;
console.log("El perimetro del Circulo es: " + perimetroCirculo+ "cm");

//area
const areaCirculo = (radioCirculo * radioCirculo) * pi
console.log("El Area del Circulo es: " + areaCirculo + "cm^2");

console.groupEnd();