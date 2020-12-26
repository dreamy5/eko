module.exports = {
  name: "enable",
  code: `
$setVar[enabled;$message[1]]
$onlyForUsers[749643325451141150;**Only Dreamy can use this lol.]
$title[Bot Commands Succesful disabled.]
$color[$getVar[color]]
`
}