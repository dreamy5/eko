module.exports = {
    name: "setprefix",
    code: `
**New prefix for this server : \`$message[1]\`**
$setServerVar[prefix;$message[1]]
$onlyAdmin[**You need *ADMIN* perms for this command. sorry mate]
$onlyIf[$message[]!=;You need to put a valid prefix dummy.]
    `
}