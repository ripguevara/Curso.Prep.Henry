// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo= array.length;
  return (array[ultimo-1]);
  //return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var ultimo= array.length;
  return(ultimo);
  //return(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0;i<array.length;i++){
    num=array[i];

    array[i]=num+1;
    //array[i]=array[i]+1

  }
  return(array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
//  var cadena;
  //for (var i=0;i<array.length;i++){
    //cadena= cadena + " " + palabras[i]  
  //}
  //return(cadena); 
  return palabras.join(" ")
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i=0;i<array.length;i++){
    if (array[i]===elemento){
      return true
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for(i=0;i<numeros.length;i++){
    suma=suma + numeros[i]
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var acumulado=0;
  var promedio=0;
  for (i=0; i<resultadosTest.length; i++){
    acumulado=acumulado + resultadosTest[i];
  }
  promedio=acumulado/resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
var masgrande=0
  for(i=0; i<numeros.length; i++){
    if (numeros[i]>masgrande){
      masgrande=numeros[i]
    }
  }
  return masgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumula = 1
  if(arguments.length===0) return 0
  else if(arguments.length===1) return arguments[0]
  else{
    for(var i=0; i<arguments.length; i++){
      //acumula=acumula*arguments[i]
      acumula *= arguments[i]
  }
  
}
return acumula;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad=0
  for(i=0; i<arreglo.length; i++){
    if (arreglo[i]>18){
      cantidad= cantidad+1
    }
  }
  return cantidad
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  

  //if (numeroDeDia>1 || numeroDeDia<7){return "Es fin de semana"};
  //return "Es dia Laboral";
  if (numeroDeDia === 7 || numeroDeDia === 1){
    return "Es fin de semana"};
  return "Es dia Laboral";
  } 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  //convertir el numero a string y hacer que el primer caracter se almacene en la posicion 0 de un array
var nstring=n.toString();
 // let nstring = Array.from(nstring);
  if (nstring[0] ==='9'){return true}
  else {return false;
  }

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var elemento=arreglo[0]
  for(i=0;i<arreglo.length;i++)
  {if (arreglo[i] !== elemento) return false
}
   return true; 


} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses=[];
  for (var i = 0;i < array.length; i++){
    if (array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre'){
      meses.push(array[i]);
    }
    
    }
    if (meses.length < 3){
      return "No se encontraron los meses pedidos"
    } else{
      return meses
    }
  
  }
  



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var may100=[];
  for (i=0;i<array.length;i++){
    if (array[i]>100){
      may100.push(array[i])      
    }
  }
return may100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arrnuevo=[];
  var suma=numero;
  for(i=0;i<10;i++){
    suma= suma+2;
    
  if (suma===i){  
      break;
    } else{
      arrnuevo.push(suma)
    }
  }
  if (i<10){
    return "Se interrumpió la ejecución"
  } else{
    return arrnuevo;
  }

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arranuevo=[];
  var suma=numero;
  for(i=0;i<10;i++){
    if(i!==5){
      suma= suma+2;
      arranuevo.push(suma)  
    }
  }
return arranuevo;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
