import wixData from 'wix-data';

$w.onReady(function () {
    $w("#myRepeater").onItemReady(($item, itemData, index) => {
         $item("#text").text = itemData.title;
         $item("#image").src = itemData.image;
    });
    
    wixData.query("MyCollection")
        .find()
        .then((results) => {
            $w('#myRepeater').data = results.items;
        });
});
