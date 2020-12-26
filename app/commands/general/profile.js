module.exports = {
    name: "profile",
  code: `
$title[Your Profile] 
$description[**Username: $username[$authorID]
Creation Date : $creationDate[$authorID]

__Balance Stats__

WALLET: $getVar[coin;$authorID] :coin:
BANK: $getVar[bank;$authorID] :coin:

__Recently bought items__**

$getVar[items;$authorID]]
$color[RANDOM]
$footer[Join support server for help e!support]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

  `
}