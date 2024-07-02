import { wikiData } from '../data/wiki-data'
import { createDialog } from './html-elements'

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
      const dialogId = parseInt(activeDialog.dataset.dialogId)
      // on click, reshuffle dataArray.
      //
      const dialogIndex = newWikiData.findIndex((item) => item.id === dialogId)
      const removedItem = newWikiData.splice(dialogIndex, 1)
      newWikiData = [...newWikiData, ...removedItem]
      console.log(newWikiData)
    })
  })
}
