module.exports = {
  name: "removecoins",
  code: `$title[You removed $numberSeparator[$message[2];,] :coin: from $username[$mentioned[1]]]
$setVar[coin;$sub[$getVar[coin;$mentioned[1]];$message[2]];$mentioned[1]]
$onlyIf[$message[1]!=;**Usage - e!removecoins @user amount**]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]
$onlyForUsers[749643325451141150;**Only Dreamy can use this.**]
`
}