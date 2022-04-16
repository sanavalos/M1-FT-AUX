const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK. Linea 17 estructuras

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  // ERRORES: devuelve array con letras como elemento. Tambien devuelve paises al reves.
  //tu codigo aqui
  let stack = new Stack()
  let separadas = str.split(" ") //"Argentina Colombia" --> ["Argentina", "Colombia"]
  //return separadas
  for (var i = 0; i < separadas.length; i++) {
    let pos = separadas[i]              //"Argentina"
    for (var j = pos.length - 1; j >= 0; j--) {
      stack.push(pos.charAt(j))      //"a", "n", "i", "t", "n", "e", "g", "r", "A", " ", "a",
      if (pos[j] == pos[0]) {
        stack.push(" ")
      }
    }
  }
  let strrr = ""
  let arr = Object.values(stack)   //Stack {stack["a", "n", ...]} ---> [["a", "n", ...]]
  stack.pop()  //---> borra el espacio de más
  for (var i = 0; i < arr.length; i++) { //  [["a", "n", ...]]
    if (typeof arr[i] === "object") {
      for (var j = 0; j < arr[i].length; j++) //["a", "n", ...]
        strrr = strrr + arr[i][j]  //strrr --->"anitnegrA..."
    }
  }
  return strrr
};




module.exports = {
    efectoEspejo,
   
}