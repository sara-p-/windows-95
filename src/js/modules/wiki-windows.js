import { wikiData } from '../data/wiki-data'
import { createDialog } from './html-elements'
import { getShuffledArray } from './utils'

export default function wikiWindows() {
  // On load, create the wiki windows
  const wikiSection = document.querySelector('.wiki-section')

  wikiData.forEach((item, index) => {
    wikiSection.append(createDialog(item, index))
  })

  // On click of 'close' OR 'ok', delete the current item and remake it in the back. Change the data-dialog-index on the other items to move them up in the list
  const closeButtons = document.querySelectorAll('.dialog__close, .dialog__ok')
  let newWikiData = [...wikiData]

  closeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const activeDialog = e.target.closest('.dialog')

      // On click, remove the activedialog from the DOM and the newWikiData array. Then return the array with the removed item added to the end of the array.
      newWikiData = getShuffledArray(newWikiData, activeDialog)
      const lastItemIndex = newWikiData.length - 1

      // Create the new DOM node
      wikiSection.append(
        createDialog(newWikiData[lastItemIndex], lastItemIndex)
      )
      // Update the DOM node dataset.id attributes
      for (let i = 0; i < newWikiData.length; i++) {
        const itemId = newWikiData[i].id
        const domItem = document.querySelector(
          `dialog[data-dialog-id="${itemId}"]`
        )
        domItem.dataset.dialogIndex = i
      }

      console.log(newWikiData)
    })
  })
}
