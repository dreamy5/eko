module.exports = {
    name: "withdraw",
    code: `$title[Withdraw Succesful!]
$description[**You withdrew $message[1] :coin: from your bank!**]
$footer[Check with !bal]
$setVar[bank;$sub[$getVar[bank;$authorID];$message[1]];$authorID]
$setVar[coin;$sum[$getVar[coin;$authorID];$message[1]];$authorID]
$onlyIf[$replaceText[$message[1];all;$getVar[bank;$authorID]]<=$getVar[bank;$authorID];You don't have enough money to withdraw.]
$color[RANDOM]
$onlyIf[$message[1]!=;**Provide a valid number!**]
$thumbnail[$userAvatar[$authorID]]
$onlyIf[$isNumber[$noMentionMessage[1]]==true;**You need to put a valid value.**]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]
`
}