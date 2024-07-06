import { wikiData } from '../data/wiki-data'
import { wikiDialog } from '../components/wiki-dialog'
import { getShuffledArray } from './utils'

export default function wikiWindows() {
  // On load, create the wiki windows
  const startButton = document.querySelector('button.start-button')
  const wikiSection = document.querySelector('.wiki-section')

  let activeWikis = false

  startButton.addEventListener('click', () => {
    if (activeWikis) {
      // Delete the nodes in the order they appear on the screen
      let wikiNodes = document.querySelectorAll('dialog.dialog')
      wikiNodes.forEach((node, index) => {
        const toDelete = document.querySelector(
          `dialog[data-dialog-index="${index}"]`
        )
        setTimeout(() => {
          toDelete.remove()
        }, (index + 1) * 100)
      })
      activeWikis = false
      wikiNodes = []
    } else {
      wikiData.forEach((item, index) => {
        setTimeout(() => {
          wikiSection.append(wikiDialog(item, index))
        }, (index + 1) * 100)
      })
      activeWikis = true
    }
  })
}
