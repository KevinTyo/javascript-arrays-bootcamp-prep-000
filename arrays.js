var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
 return array[element]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return 
}

function accessElementInArray(array, index){
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(-1)
}