var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(){
 return array[1]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray() {
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