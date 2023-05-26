const fs = require("fs")

function processData(filePaths) {
  const wordLineRegex = /^[a-zA-Z]+\s+\[.*\]\s+.+/

  const allWords = filePaths.flatMap((filePath) => {
    const data = fs.readFileSync(filePath, "utf8")
    const lines = data.split("\n")

    const filteredLines = lines.filter((line) => wordLineRegex.test(line))

    const words = filteredLines.map((line) => {
      const parts = line.split(" ")

      // 获取并返回开头的单词
      return parts[0]
    })

    return words
  })

  const uniqueWords = [...new Set(allWords)]
  console.log("Word count:", uniqueWords.length)

  // 按字母顺序（不区分大小写）排序单词
  const sortedWords = uniqueWords.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

  // 将每个单词转换为 "word\tword.toLowerCase()" 格式
  const formattedWords = sortedWords.map((word) => `${word}\t${word.toLowerCase()}`)

  // 文件开头的预定义内容
  const fileHeader = `# Rime dictionary
# mim: set ts=8 sw=8 noet:
# encoding: utf-8
# word_simp - Word Simple

---
name: word_simp
version: "0.1"
sort: by_weight
use_preset_vocabulary: false
...

`

  // 将预定义内容与已格式化的单词列表合并
  const fileContent = fileHeader + formattedWords.join("\n")

  // 创建一个新文件并将单词写入该文件
  fs.writeFile("word_simp.dict.yaml", fileContent, (err) => {
    if (err) throw err
    console.log("word_simp.dict.yaml 文件已创建并写入数据")
  })
}

// 要合并的两个文件的路径
const filePaths = ["CET6_edited.txt", "CET4_edited.txt", "中考英语词汇表.txt"]

processData(filePaths)
