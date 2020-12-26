module.exports = {
  name: "hack",
  code: `
$title[You hacked $randomText[NASA;GOOGLE;DISCORD;THIS BOT;THIS SERVER;A WEB SITE;DARKWEB;DREAMY PH ACCOUNT;BANK] and you got $random[100;550]]
$setVar[coin;$sum[$getVar[coin;$authorID];$random[100;550]];$authorID]
$globalCooldown[20m;**Aww hacker. Servers are in cooldown, wait {time} to hack again.**]
$color[RANDOM]

`
}