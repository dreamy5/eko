module.exports = {
        name: "shoplist",
        code: `
    $title[Server Shop]
    $description[**1.** $getServerVar[item1] - $getServerVar[price1] :coin:
    **2**. $getServerVar[item2] - $getServerVar[price2] :coin:
    **3.** $getServerVar[item3] - $getServerVar[price3] :coin:
    **4.** $getServerVar[item4] - $getServerVar[price4] :coin:
    **5.** $getServerVar[item5] - $getServerVar[price5] :coin:
    **6.** $getServerVar[item6] - $getServerVar[price6] :coin:
    **7.** $getServerVar[item7] - $getServerVar[price7] :coin:
    **8.** $getServerVar[item8] - $getServerVar[price8] :coin:] 
    $color[RANDOM]
    $footer[You can buy anything with e!buy 1-8!. If you buy something, ping a MODERATOR to give you the role or the item what you bought. 
        *Pro TIP: You can add items with e!shop shop number item price*]
$enabled[$getVar[enabled];**:warning: BOT IN WORKING, BE PATIENT**]

    `
    }