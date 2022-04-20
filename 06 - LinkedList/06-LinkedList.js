const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size=function(){
  let oCurrent = this.head
  let nCounter = 1
  if (!this.head) return 0
  while (oCurrent.next) {
    oCurrent = oCurrent.next
    nCounter++
  }
  return nCounter
  }
//return this.len

// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [3]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
// Tu código aca:
    let current = this.head; // 6
    if(!this.head) return 'La lista se encuentra vacia' //this.head === null
    while(current.next){ //current.next !== null
    if(current.value < current.next.value){
      let aux = current.value; // 2
      current.value = current.next.value; // 7
      current.next.value = aux;// 7 ---> 2
      return this.orderList();
      } else{
      current = current.next
     }
    }
    return this
    };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
  LinkedList.prototype.insert = function(data,pos) {
    var nuevoNodo = new Node(data);
    var current = this.head;
    var posicion = 1
    if (pos === 1) {
      let aux = this.head;
      this.head = nuevoNodo;
      this.head.next = aux;
      return this
    } else {
      while(posicion < pos) {
        if (posicion === pos-1) {
          let aux = current.next
            current.next = nuevoNodo
            current.next.next = aux
          } else {
          current = current.next
        }
        posicion++;
      }
      return this
    }
  }
  /*
  if(pos < 1 || pos > this.len){
    return null;
  }
  let newnodo = new Node(data)
  let Actual = this.head;
  let previous;
 
    if(pos === 1 ){
      newnodo.next = Actual;
      this.head = newnodo;
      
    } else {
      for(let i =0 ; i <pos-1;i++){
        previous =Actual;
        Actual = Actual.next;
      }
      newnodo.next = Actual;
      previous.next = newnodo;
    }
    this.len++; */




module.exports={
  LinkedList
}



