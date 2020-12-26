module.exports = {
    name: "daily",
  code: `$setVar[coin;$sum[$getVar[coin;$authorID];$random[200;700]];$authorID]
You get the daily and you got $random[200;700] :coin:
$globalCooldown[1s;**Next daily in {time}**]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`
}