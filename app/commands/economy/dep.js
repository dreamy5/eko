module.exports = {
    name: "dep",
    code: `$title[You deposited!]
$description[**You deposited $numberSeparator[$message[1];,] :coin: in your bank!**]
$footer[Check with e!bal]
$setVar[bank;$sum[$getVar[bank;$authorID];$message[1]];$authorID]
$setVar[coin;$sub[$getVar[coin;$authorID];$message[1]];$authorID]
$onlyIf[$replaceText[$message[1];all;$getVar[coin;$authorID]]<=$getVar[coin;$authorID];You don't have enough money to deposit]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$onlyIf[$message[1]>0;**You can't deposit less than 1**]
$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$toLowercase[$noMentionMessage[1]]==all];true;1];false;$noMentionMessage[1]]]==true; enter a valid number]
$onlyIf[$message[1]!=;**Provide a valid number!**]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`
}

//$onlyIf[$isNumber[$noMentionMessage[1]]==true;**You need to put a valid value.**]