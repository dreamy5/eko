module.exports = {
  name: "test",
  code: `
yes
$setVar[coin;200;$authorID]
$setVar[bank;200;$authorID]
$onlyForUsers[749643325451141150;**Only Dreamy can use this lol.**]
`
}