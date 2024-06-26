import { readFile } from 'fs/promises'
import { RevealButton } from './RevealButton'

export default async function CatGenerator() {
  const catFile = await readFile('./cats.txt', 'utf8')
  const catNames = catFile.split('\n').filter((line) => line.trim().length > 0)
  const randomCat = catNames[Math.floor(Math.random() * catNames.length)]
  return <RevealButton catName={randomCat}></RevealButton>
}
