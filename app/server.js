const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: process.env.TOKEN,
  prefix: ["$getServerVar[prefix]"]
})

const fs = require('fs');
const {
    notDeepEqual
} = require("assert");
const {
    time
} = require("console");
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command({
            name: command.name,
            aliases: command.aliases,
            description: command.description,
            api: command.api,
            code: command.code,
        })
    }
}

bot.MessageEvent()

bot.Variables({
  coin: "0",
  bank: "0",
  price1: "*notset*",
  item1: "*notset*",
    price2: "*notset*",
    item2: "*notset*",
    price3: "*notset*",
    item3: "*notset*",
    price4: "*notset*",
    item4: "*notset*",
    price5: "*notset*",
    item5: "*notset*",
    price6: "*notset*",
    item6: "*notset*",
    price7: "*notset*",
    item7: "*notset*",
    price8: "*notset*",
    item8: "*notset*",
    updates: "**Not updates yet**",
    color: "FF0000",
    temp1: "undefined",
    temp2: "undefined",
    temp3: "undefined",
    items: "No items",
    enabled: "yes",
    prefix: "eko"
})


bot.Status({
        0: {
            description: "in $serverCount servers.", 
            type: "PLAYING" 
        }, 
        1: {
            description: "V1.0.0", 
            type: "WATCHING" 
        },
        2:{
            description: "e!invite",
            type: "LISTENING"
        }
    }, 13000)


bot.AwaitedCommand({
name: "confirmTransfer",
code:`
$setServerVar[temp1;undefined]
$setServerVar[temp2;undefined]
$setServerVar[temp3;undefined]

$setVar[coin;$sum[$getVar[coin;$getServerVar[temp2]];$getServerVar[temp3]];$getServerVar[temp2]]
$setVar[coin;$sub[$getVar[coin;$getServerVar[temp1]];$getServerVar[temp3]];$getServerVar[temp1]]
<@$getServerVar[temp1]> **transfered $numberSeparator[$getServerVar[temp3];,] coins to **<@$getServerVar[temp2]>
`})

// e!shop 1-8 item price

bot.Command({
    name: "shop",
    code: `
$title[Shop Created! *Shop number $message[1]*]
$description[Shop info - $getServerVar[item$message[1]] - $getServerVar[price$message[1]]]
$setServerVar[item$message[1];$message[2]]
$setServerVar[price$message[1];$message[3]]
$onlyAdmin[**Only admin command!**]
$onlyIf[$isNumber[$message[3]]==true;**You cant put a invalid number.**]
$footer[Check shop list with e!shoplist]
$onlyIf[$message[1]!=;**Usage - e!shop \`shop number\` \`item\` \`price\`**]
$onlyIf[$message[2]!=;**Usage - e!shop \`shop number\` \`item\` \`price\`**]
$onlyIf[$message[3]!=;**Usage - e!shop \`shop number\` \`item\` \`price\`**]

$color[$getVar[color]]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`
})

// <prefix>buy (1-8)

bot.Command({
  name: "buy",
  code: `
$title[You bought $getServerVar[item$message[1]] and you pay for it $getServerVar[price$message[1]] :coin: !]
$setVar[coin;$sub[$getVar[coin;$authorID];$getServerVar[price$message[1]]];$authorID]

$setVar[items;$getServerVar[item$message[1]];$authorID]

$onlyIf[$getServerVar[price$message[1]]<=$getVar[coin;$authorID];U dont have enough coins.]
$onlyIf[$getServerVar[item$message[1]]!=*notset*;This item is not added!]
$onlyIf[$isNumber[$message[1]]==true;That's not even a number]
$onlyIf[$message[1]<=8;There's only 8 items, please choose 1 through 8.]
$color[$getVar[color]]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`})
// ctrl + shift + up/down  |  with the curser on the line u want to move
// highlight what you want to "comment" | press - ctrl + / 


  bot.BotJoinCommand({
    name: "777456560469311498",
    code:`
    $author[Joined a server! | $guildID]
    $title[$serverName[$guildID]]
    $thumbnail[$serverIcon]
    $color[$getVar[color]]

    $description[
    $addField[__Other:__;**$emoteCount** emojis | **$serverBoostCount** boosts | **$serverCount** servers]

    $addField[__Members wearing $roleName[$highestRole[$ownerID]]__:;$usersWithRole[$highestRole[$ownerID]]]

    $addField[__Highest Role:__;$roleName[$highestRole[$ownerID]]($highestRole[$ownerID])]

    $addField[__$membersCount[] Members on arrival:__;:man: $membersCount[human] | :robot: $membersCount[bot]]

    $addField[__System Channel:__;$replaceText[<#$systemChannelID>;<#>;None]$replaceText[($systemChannelID);();]]

    $addField[__Owner:__;<@$ownerID>\n$username[$ownerID]#$discriminator[$ownerID]\n($ownerID)]
    ]
`})
bot.onBotJoin();


//some fun things here and some apis.

bot.Command({
    name: "ekotoken",
    code: `$title[eko token :0]
$description[$api[https://some-random-api.ml/bottoken;token] here we go]
$footer[DONT USE IT LMAO ITS EKO TOKEN PLS DONT]
$color[ff0000]
$editIn[5s;Reported to discord staff for breaking ToS, u just stealing a bot token]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

    `
})

bot.Command({
    name: "pic",
    code: `
$title[Picture command]
$description[some image]
$image[$api[https://api.somecool.repl.co/image-search?query=$noMentionMessage[];result]]
$footer[Credits : $username[743767109817073664]#$discriminator[743767109817073664]]
$color[RANDOM]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

    `
})

bot.Command({
  name: "google",
  code: `
$title[Google command]
$description[**Your search:** $api[https://api.somecool.repl.co/google-search?q=$noMentionMessage[];title]
**Link:** $api[https://api.somecool.repl.co/google-search?q=$noMentionMessage[];link]
**Description:** $api[https://api.somecool.repl.co/google-search?q=$noMentionMessage[];description]]
$color[RANDOM]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`
})

bot.SpaceCommand({
name: "785806766117879808",
code: `
**Prefix:  \`$getServerVar[prefix]\`
Set a custom prefix with:  \`$getServerVar[prefix]setprefix <newPrefix>\`
For start type $getServerVar[prefix]help**
  $onlyIf[$message[2]==;]
  $onlyIfMessageContains[<@$client[id]>;<@!$client[id]>;]
    `
})