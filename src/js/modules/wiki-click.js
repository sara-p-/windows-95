import { wikiData } from '../data/wiki-data'
import { createDialog } from './html-elements'
import { getShuffledArray } from './utils'

let newWikiData = [...wikiData]

export function wikiClickHandler(e) {
  const activeDialog = e.target.closest('dialog.dialog')
  const dialogHeight = activeDialog.offsetHeight

  // 1. Move the clicked card down below the card deck
  const dialogAnimation = new Promise((resolve) => {
    activeDialog.style.top = `${dialogHeight * 2}px`
    activeDialog.style.left = `-80px`
    resolve(activeDialog)
  })

  dialogAnimation
    .then((dialog) => {
      setTimeout(() => {
        dialog.style.zIndex = 1
        dialog.style.top = `-80px`
      }, 300)
      // return dialog
    })
    .then(() => {
      console.log(activeDialog)
      // On click, move the array element that is tied to the active node element to the end of the newWikiData array
      newWikiData = getShuffledArray(newWikiData, activeDialog)
      // Update the DOM node dataset.id attributes
      for (let i = 0; i < newWikiData.length; i++) {
        const itemId = newWikiData[i].id
        const domItem = document.querySelector(`[data-dialog-id="${itemId}"]`)
        domItem.dataset.dialogIndex = i
      }
    })
    .then(() => {
      setTimeout(() => {
        activeDialog.style = ''
      }, 600)
    })

  // newWikiData = newWikiData
}

// export function wikiClick() {
//   // On click of 'close' OR 'ok', delete the current item and remake it in the back. Change the data-dialog-index on the other items to move them up in the list
//   const closeButtons = document.querySelectorAll('.dialog__close, .dialog__ok')
//   let newWikiData = [...wikiData]

//   closeButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//       const activeDialog = e.target.closest('.dialog')

//       // On click, remove the activedialog from the DOM and the newWikiData array. Then return the array with the removed item added to the end of the array.
//       newWikiData = getShuffledArray(newWikiData, activeDialog)
//       const lastItemIndex = newWikiData.length - 1

//       // Create the new DOM node
//       wikiSection.append(
//         createDialog(newWikiData[lastItemIndex], lastItemIndex)
//       )
//       // Update the DOM node dataset.id attributes
//       for (let i = 0; i < newWikiData.length; i++) {
//         const itemId = newWikiData[i].id
//         const domItem = document.querySelector(
//           `dialog[data-dialog-id="${itemId}"]`
//         )
//         domItem.dataset.dialogIndex = i
//       }
//     })
//   })
// }
