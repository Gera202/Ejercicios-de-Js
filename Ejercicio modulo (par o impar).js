//Tomando como entrada un número entero, imprimir si es par o impar
var numero =50;
//Dividimos el numero entre 2
var resModulo = numero % 2;   // 1
// Revisamos si tenemos residuo es impar
 if (resModulo != 0 ) { //si el numero tiene residuo es impar
 console.log ("IMPAR") //imprimimos resultado
 }
// Si no tenemos residuo es Par
 else{  //si no tenemos residuo es par
  console.log("PAR")//imprimimos resultado
 }
var numero2 = 50;
if( 24==24 || 24==="24"){
  console.log("Ok")
}
if(24==="24" || 24==24){
  console.log("Ok")
}




/*var modulo = numero % 2;
//Diferencia entre % y /
console.log(div)    //   9 / 2 = 4.5    ¿Cómo se si es entero?
console.log(modulo) //   9 % 2 = 1    ->  4 veces 2 + 1(residuo)


numero=1000
modulo = numero % 2
div = numero / 2
console.log(div) // 10 / 2 = 5         ¿Cómo se si es entero?
console.log(modulo) // 10 % 2 = 0

  >     <     ==     !=        ||     &&         %
mayor menor igual diferente    o   verdadero   modulo

5-1 = 4
-1=3      =0 ó =.5
-1=2      =0 ó =.5
-1=1      =0 ó =.5
-1=0      =0 ó =.5
como fue = 0 es entero, es par

4.5-1=3-5
-1=2.5      =0 ó =.5
-1=1.5      =0 ó =.5
-1=.5      =0 ó =.5
como fue .5 no es entero, es impar


||

24==24 || 13==="13"
verdadero || falso = verdadero (solo una de las dos)

24=23 || 23=24
falso || falso = falso

13==="13"*/
