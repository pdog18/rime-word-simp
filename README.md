# rime-word-simp
Rime 袖珍单词

这个 repo 主要是为了提供一种简单的为 Rime 添加单词支持的方式。
### 使用方法
1. 下载文件(`dict.yaml`、`schema.yaml`、`custom.yaml`) 至 Rime 文件夹
2. 修改 `[你的方案].custom.yaml` 中的 `[你的方案]` 为你正在使用的方案
   > 例如我正在使用 `pinyin_simp` 那么修改为 `pinyin_simp.custom.yaml`
   > 
   > 同理 `luna_pinyin` 修改为 `luna_pinyin.custom.yaml`
   > 
   > 如果你已经有对应的 `custom.yaml` 了，那么将本 repo 中的 `[你的方案].custom.yaml`中的内容复制到你已经存在的文件中（注意去掉 `patch` 以及控制好缩进）

---


#### 词汇来源: 

收录了 [english-wordlists](https://github.com/mahavivo/english-wordlists) 中的，`CET4_edited.txt`、`CET6_edited.txt`、`中考英语词汇表.txt`, 详情可以在[分支](https://github.com/pdog18/rime-word-simp/tree/pdog18-convert/vocabulary_convert)中查看。

总计约 5800 个单词，这个词汇表目前与将来不会添加类似一些 `MacOS`、`Windows`、`Android` 之类的专有名词，因为本人认为这些专有名词不适合用 dict 来表示，如果你有需要，可能使用 `custom-phrase` 更为合适。
 
#### 此 repo 复制了一部分 [rime-easy-en](https://github.com/BlindingDark/rime-easy-en) 中的代码

#### 短单词置顶的问题
考虑到 [雾淞拼音 dvel: 短单词置顶的问题](https://dvel.me/posts/make-rime-en-better/#%E7%9F%AD%E5%8D%95%E8%AF%8D%E7%BD%AE%E9%A1%B6%E7%9A%84%E9%97%AE%E9%A2%98)
为了简单起见，直接删除了一些单词，删除的单词参考自：
[雾淞拼音](https://github.com/iDvel/rime-ice/blob/2093207504f3b79657838214075c585c80e0cf9c/double_pinyin.schema.yaml#L102-L108)
 
 
---

如果在使用时遇到一些问题，请提 issue。
