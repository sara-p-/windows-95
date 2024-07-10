import { wikiData } from '../data/wiki-data'
import { getShuffledArray, wikiAnimation } from '../modules/utils'
import { WIKI_TRANSITION_TIME } from '../data/constants'
let newWikiData = [...wikiData]

export function wikiClickHandlerSubdued(e) {
  const activeDialog = e.target.closest('dialog.dialog')
  // const dialogHeight = activeDialog.offsetHeight
  const dialogHeight = activeDialog.offsetHeight

  // 1. MOVE THE ACTIVE DIALOG WINDOW
  // Hide the dialog
  activeDialog.style.display = 'none'

  // 2. REORDER THE WIKI DATA ARRAY
  // Match the active dialog node to the data array using node.dataset.dialogId, and then create a new array with the active dialog node moved the the end
  newWikiData = getShuffledArray(newWikiData, activeDialog)
  // Update each dialog node.dataset.dialogIndex to match the index of the newWikiData.
  // Updating the node.dataset.dialogIndex for each node will trigger CSS transitions that move all the nodes forward
  for (let i = 0; i < newWikiData.length; i++) {
    const itemId = newWikiData[i].id
    const domItem = document.querySelector(`[data-dialog-id="${itemId}"]`)
    domItem.dataset.dialogIndex = i
  }

  // 3. RESET THE STYLE ATTRIBUTE OF THE FORMALLY ACTIVE NODE
  setTimeout(() => {
    activeDialog.style.zIndex = 1
    activeDialog.style.left = `-80px`
    activeDialog.style.top = `-80px`
    activeDialog.style.display = `block`
    activeDialog.style = ''
  }, WIKI_TRANSITION_TIME)
}
