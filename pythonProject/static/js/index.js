const cartBtn = document.getElementById('cart')
const cartModal = document.querySelector('.cart')
const cartCloseBtn = cartModal.querySelector('.cart-close')

const openCart = () => {
    cartModal.style.display = 'flex'
}

const closeCart = () => {
    cartModal.style.display = ''
}

cartBtn.addEventListener('click', openCart)
cartCloseBtn.addEventListener('click', closeCart);

$(".btn").on("click", function() {
    let $button = $(this);
    let oldVal = parseInt($button.parent().find("input").val());
    let newVal = 0;

    if ($button.text() == '+') {
        newVal = oldVal + 1;
    }

    else {
        if (oldVal > 0) {
            newVal = oldVal - 1;
        }
        else {
            newVal = 0;
        }
    }

    $button.parent().find("input").val(newVal);
});