/*var edad =parseInt (prompt("ingresa tu edad"))

if (edad >=18 && edad<= 29){
alert ("ya estas dentro");
}else{
alert ("sera despues")}



//Otra tarea diferente.
var SalarioDiario = prompt("¿Cuanto ganas al día?"); 
var DiasLaboradosQ = 15;
var DiasLaboradosM = 30;
var SueldoBrutoQ = SalarioDiario * DiasLaboradosQ;
var SueldoBrutoM = SalarioDiario * DiasLaboradosM;
var ISR_quincenal = SueldoBrutoQ * 0.30;
var ISR_mensual = SueldoBrutoM * 0.30;
var IMSS_quincenal = SueldoBrutoQ * 0.10;
var IMSS_quincenal = SueldoBrutoM * 0.10;
var Impuestos_Q = ISR_quincenal + IMSS_quincenal;
var Impuestos_M = ISR_mensual + ISR_mensual;
var SueldoNetoQ = SueldoBrutoQ - Impuestos_Q; 
var SueldoNetoM = SueldoBrutoM - Impuestos_M;
console.log("Mi salario quincenal bruto es: " + SueldoBrutoQ);
console.log("Mi salario mensual bruto  es: " + SueldoBrutoM);
console.log("Mi salario neto quincenal es: " + SueldoNetoQ);
console.log("Mi salario neto mensual es: " + SueldoNetoM);
*/

//Este es el ejercicio 1,
function suma (num1,num2){
    return (num1 + num2);
}
console.log(suma(5, 10))
console.log(suma(8,9))


/*for (var suma1 = 0; suma1 < 46; suma1++)
    console.log(suma1);
*/

    //Este seria el ejercicio 2,'
var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log(meses);

for (i = 0; i < meses; i++) {
    console.log(meses[i]);
}

