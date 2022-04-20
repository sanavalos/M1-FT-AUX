const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(value){
if(this.value === value) return this.value; //caso base
while(this.right || this.left){ //iteracion
        if(value > this.value){
        return this.right.search(value) //recursion
            }else{
        return this.left.search(value) //recursion
        }
    }
return "no se encontró el valor"
}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0 ----> Cantidad 1
//             /     \
//          (7)     (12)       ----> nivel 1 ----> Cantidad 2
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2 ----> Cantidad 3


BinarySearchTree.prototype.height= function(){
    let height;
    if(!this.right && !this.left){
        return 0;
    } else {
        let lftHeight = (!this.left) ? 0 : (this.left.height(0 + this.left.size()) +1);
        let rghHeight = (!this.right) ? 0 : (this.right.height(0 + this.right.size()) +1);
        height = Math.max(lftHeight, rghHeight);
    }
    return height;
}

module.exports={
    BinarySearchTree
}