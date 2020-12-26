module.exports = {
    name: "work",
    code: `$setVar[coin;$sum[$getVar[coin;$authorID];$random[50;250]];$authorID]
$title[You worked as $randomText[Developer;Artist;a bich;DISCORD MOD] and you get $random[50;250] :coin: ]
$color[RANDOM]
$globalCooldown[1h;**You need to wait {time}!**]
$thumbnail[$userAvatar[$authorID]]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`
}