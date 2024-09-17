let bagItems;
onLord();

function onLord() {
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagIcon();
}

function addTOBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
    bagItemCountElement.innerHTML = bagItems.length;
} else {
    bagItemCountElement.style.visibility = 'hidden';
}
}
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    bagItemCountElement.innerHTML = bagItems.length;
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
if (!itemsContainerElement) {
    return;
}
let innerHTML = '';
items.forEach(item => {
    innerHTML += `<div class="item-container">
<img class="item-image" src="${item.image}" alt="" width="30%" height="200vh">
<div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.count}
</div>
<div class="company-name">
    ${item.company}
</div>
<div class="item-name">
    ${item.item_name}
</div>
<div class="price">
    <span class="current-price">$ ${item.current_price}</span>
    <span class="original-price">$ ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% Off)</span>
</div>
<button class="btn-add-bag" onclick="addTOBag(${item.id})">Add to Bag</button>
</div>`
});

itemsContainerElement.innerHTML = innerHTML ;

}
