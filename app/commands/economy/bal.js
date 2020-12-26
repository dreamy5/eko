module.exports = {
    name: "bal",
    code: `
$title[Your balance!]
$description[-------------------
**WALLET:  $numberSeparator[$getVar[coin;$authorID];,] :coin:
-------------------
BANK: $numberSeparator[$getVar[bank;$authorID];,] :coin: **
-------------------]
$footer[Balance Command.]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`}