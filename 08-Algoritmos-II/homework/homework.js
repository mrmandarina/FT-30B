'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData")

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array
    
   let pivot = array[0]
   let izq = []
   let der = []
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) izq.push(array[i])
      
      else der.push(array[i])
    }

  return quickSort(izq).concat(pivot).concat(quickSort(der))
  
  }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let half = Math.floor(array.length / 2)

  if(array.length < 2){
    return array
  }
  let left = array.splice(0, half)

  return merging(mergeSort(left), mergeSort(array))
}

function merging(left, right){
    let arr = []

    while (left.length && right.length) {
      
      if (left[0] < right[0]) {
        arr.push(left[0])
        left.shift()
      }
     else {
      arr.push(right[0])
      right.shift()
     }
  }

return (arr).concat(left).concat(right)
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
