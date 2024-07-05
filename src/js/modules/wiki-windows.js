import { wikiData } from '../data/wiki-data'
import { createDialog } from './html-elements'
import { getShuffledArray } from './utils'

export default function wikiWindows() {
  // On load, create the wiki windows
  const startButton = document.querySelector('button.start-button')
  const wikiSection = document.querySelector('.wiki-section')

  startButton.addEventListener('click', () => {
    wikiData.forEach((item, index) => {
      setTimeout(() => {
        wikiSection.append(createDialog(item, index))
      }, (index + 1) * 100)
    })
  })
}
