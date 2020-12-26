module.exports = {
    name: "help",
  code: `
$title[Help]
$addField[Some Fun Stuff;**- e!google *ur search*
- e!pic *a name of a picture*
- e!ekotoken**;no]
$addField[Information;**My prefix is e!, im here to help your server economy. For more bot informations type __e!botinfo__**;no]
$addField[Commands;**- e!bal
- e!withdraw *amount/all*
- e!dep *ammount/all*
- e!transfer *@user amount*
- e!buy *1-8*
- e!check *@user*
- e!shoplist
- e!profile
- e!hack**;no]
$addField[Only Admin;**- e!createshophelp
- e!say
- e!shop *1-8 item price* **;yes]
$color[RANDOM]
$thumbnail[$userAvatar[775445071398961153]]
$footer[Invite bot with e!invite, join support server with e!support.]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

`
}