export function getIntegers(str) {
  const string = str.replace(/\D/g, '')
  return parseInt(string)
}

// Pass an array of objects and a DOM node. The function takes an array of objects and a DOM node, matches an object from the array to the DOM node, and then removes the node. The function returns a new array of objects with the matching object moved to the last index.
export function getShuffledArray(newArray, node) {
  const dialogId = parseInt(node.dataset.dialogId)
  //1. Find the index of the clicked dialog
  const dialogIndex = newArray.findIndex((item) => item.id === dialogId)
  // 2. Remove the clicked dialog oject from the newArray Array
  const removedItem = newArray.splice(dialogIndex, 1)
  // 3. Add the clicked dialog back to the end of the newArray Array
  newArray = [...newArray, ...removedItem]

  return newArray
}
