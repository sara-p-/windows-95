import { wikiData } from '../data/wiki-data'
import { createDialog } from './html-elements'
import { getShuffledArray } from './utils'

export default function wikiWindows() {
  // On load, create the wiki windows
  const wikiSection = document.querySelector('.wiki-section')

  wikiData.forEach((item, index) => {
    wikiSection.append(createDialog(item, index))
  })

  // // Function to change the indexes of the other dialogs
  // let newWikiData = [...wikiData]
  // // Mutation Observer to listen for a change the the dataset attribute
  // let dialogNodes = document.querySelectorAll('dialog.dialog')

  // function handleDatasetChange(mutationList, observer) {
  //   for (const mutation of mutationList) {
  //     if (
  //       mutation.attributeName === 'data-dialog-active' &&
  //       mutation.oldValue !== 'active'
  //     ) {
  //       console.log(mutation.oldValue)
  //       const activeNode = mutation.target
  //       newWikiData = getShuffledArray(newWikiData, activeNode)
  //       // Update the DOM node dataset.id attributes
  //       for (let i = 0; i < newWikiData.length - 1; i++) {
  //         const itemId = newWikiData[i].id
  //         const domItem = document.querySelector(
  //           `dialog[data-dialog-id="${itemId}"]`
  //         )
  //         domItem.dataset.dialogIndex = i
  //       }
  //       activeNode.dataset.dialogActive = 'inactive'
  //       // activeNode.style.top = 'initial'
  //       // activeNode.style.zIndex = 'initial'
  //       // activeNode.style.left = 'initial'
  //       // console.log(newWikiData)
  //     }
  //   }
  // }

  // const observer = new MutationObserver(handleDatasetChange)

  // dialogNodes.forEach((node) => {
  //   observer.observe(node, { attributes: true, attributeOldValue: true })
  // })
}
