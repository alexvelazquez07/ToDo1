
//Push al frente
const  a = [1,5,8];
a.push(6);
const aux1 = a[0]
a[0] = a[3]
a[3] = aux1
console.log(a); // -> [6,5,8,1]


//Pop al frente
const  b = [1,5,8];
const aux2 = b[2]
const aux3 = b[0]
const aux4 = b[1]
b.pop();
b[0] = aux2
b[1] = aux3
b[2] = aux4
console.log(b); // -> [8,1,5]


//Insertar en
function pushFront(array, index, ...elementsArray) {
    array.splice(index, 0, ...elementsArray);
    return array;
}

const nums = [1, 2, 5, 6];

console.log(pushFront(nums, 2, 3, 4));
  // [1, 2, 3, 4, 5, 6]


  //Eliminar en
    Array.prototype.remove = function(value) {
    this.splice(this.indexOf(value), 1);
}

    var arr = [1, 2, 4, 2, 5];
    var item = 2;
    
    arr.remove(item);
    console.log(arr);


    //Pares de intercambio
    function posPares(arreglo){
        const arrFiltrado = arreglo.filter((num, index) => index % 2 == 0)
        return arrFiltrado
}

      // Resultados esperados
      console.log(posPares(["a", "b", "c"])) // ["a", "c"]
      console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
      console.log(posPares([])) // []

//Eliminar duplicados
let data = [1,2,6,1,2,5,9,9,33,33];

let result = data.filter((item,index)=>{
    return data.indexOf(item) === index;
})
console.log(result); //[1,2,6,5,9,33]
