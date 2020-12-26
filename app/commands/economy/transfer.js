module.exports = {
  name: "transfer",
  code: `

$awaitMessages[confirm;$authorID;60s;confirmTransfer;Nothing has been transfered]

$color[RANDOM]
$title[Transfer Information]
$description[
Are you sure you want to transfer $numberSeparator[$message[2];,] coins to <@$mentioned[1]>?
Type \`confirm\` to confirm the transfer. You have 60 seconds to decide.

**Receiver : <@$mentioned[1]> 
Amount : $numberSeparator[$message[2];,] :coin:
Sender : <@$authorID>**

*Check your balance with e!bal*]

$setServerVar[temp1;$authorID]
$setServerVar[temp2;$mentioned[1]]
$setServerVar[temp3;$message[2]]

$onlyIf[$message[2]<=$getVar[coin;$authorID];You dont have enough coins.]

$onlyIf[$mentioned[1]!=;**Usage - e!transfer @user amount**]
$onlyIf[$mentioned[1]!=$authorID;**You cant transfer to yourself.**]
$onlyIf[$isNumber[$noMentionMessage[1]]==true;**You need to put a valid value.**]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`}