import { wikiData } from '../data/wiki-data'
import { getShuffledArray } from './utils'
import { WIKI_TRANSITION_TIME } from '../data/constants'

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
    .then(() => {
      setTimeout(() => {
        activeDialog.style.zIndex = 1
        activeDialog.style.top = `-80px`
      }, WIKI_TRANSITION_TIME)
      // return dialog
    })
    .then(() => {
      setTimeout(() => {
        // On click, move the array element that is tied to the active node element to the end of the newWikiData array
        newWikiData = getShuffledArray(newWikiData, activeDialog)
        // Update the DOM node dataset.id attributes
        for (let i = 0; i < newWikiData.length; i++) {
          const itemId = newWikiData[i].id
          const domItem = document.querySelector(`[data-dialog-id="${itemId}"]`)
          domItem.dataset.dialogIndex = i
        }
      }, WIKI_TRANSITION_TIME * 2)
    })
    .then(() => {
      setTimeout(() => {
        activeDialog.style = ''
      }, WIKI_TRANSITION_TIME * 3)
    })
}
