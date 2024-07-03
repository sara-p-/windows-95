import { wikiData } from '../data/wiki-data'
import { createDialog } from './html-elements'
import { getShuffledArray } from './utils'

export default function wikiWindows() {
  // On load, create the wiki windows
  const wikiSection = document.querySelector('.wiki-section')

  wikiData.forEach((item, index) => {
    wikiSection.append(createDialog(item, index))
  })
}
