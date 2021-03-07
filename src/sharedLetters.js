/**
 * 多个单词组成的数组，找出所有单词都有的字符（可重复，顺序无关）
 * 返回这些重复字符组成的字符串
 */
const sharedLetters = (wordArr) => {
  let targetLetters = ''
  const baseWord = minWord(wordArr)
  let otherWords = wordArr.filter(item => item !== baseWord)
  baseWord.split('').forEach(baseLetter => {
    if (allExist(otherWords, baseLetter)) {
      targetLetters += baseLetter
      otherWords = allExclude(otherWords, baseLetter)
    }
  })
  return targetLetters
}

const minWord = (wordArr) => {
  let minCount = wordArr[0].length
  let minIndex = 0
  wordArr.forEach((word, index) => {
    const wordLen = word.length
    if (wordLen < minCount) {
      minCount = wordLen
      minIndex = index
    }
  })
  return wordArr[minIndex]
}

const allExist = (arr, letter) => {
  return arr.every(item => item.includes(letter))
}

const exclude = (word, letter) => {
  let result = ''
  let first = true
  word.split('').forEach(item => {
    if (item === letter && first) {
      first = false
    } else {
      result += item
    }
  })
  return result
}

const allExclude = (arr, letter) => {
  return arr.map(item => exclude(item, letter))
}

const wordArr = ['smooth', 'common', 'mooring']
/**
 * 三个单词都有'm'，并且都有两个'o'，返回'moo'（'omo', 'oom'也可）
 */
const result = sharedLetters(wordArr)
console.log('result:', result)
