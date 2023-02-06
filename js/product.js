var shopingCart = 0;
var buttons = document.getElementsByClassName('card-item-button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function addShopingCart() {
    shopingCart += 1;
    document.getElementById('cart-icon').innerHTML = shopingCart;
  });
}
