module.exports = {
  name: "check",
  code: `
$title[Check Balance]
$description[$username[$mentioned[1]] **Balance.**
-------------------
**WALLET: $numberSeparator[$getVar[coin;$mentioned[1]];,] :coin:
-------------------
BANK: $numberSeparator[$getVar[bank;$mentioned[1]];,] :coin: **
-------------------]
$footer[Check Balance command.]
$color[RANDOM]
$thumbnail[$userAvatar[$mentioned[1]]]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]
$onlyIf[$message[1]!=;**Usage - e!check *@user***]
`}