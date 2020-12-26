module.exports = {
    name: "addcoins",
  code: `
$title[You gave $numberSeparator[$message[2];,]  :coin: to $username[$mentioned[1]]]
$setVar[coin;$sum[$getVar[coin;$mentioned[1]];$message[2]];$mentioned[1]]
$onlyIf[$message[1]!=;**Usage - e!addcoins @user amount**]
$onlyForUsers[749643325451141150;**Only Dreamy can use this.**]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]
`
}