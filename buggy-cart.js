
const cart = [
    { name: "Notebook", price: "1500", qty: 2 },
    { name: "Pen", price: 300, qty: 5 },
    { name: "Bag", price: 12000, qty: 1 },
];


function getSubtotal(items) {
    let subtotal = 0;

    // Bug fix: The loop used <=, which accessed a nonexistent item at index 3.
    // I found this by running the code and seeing the undefined price TypeError.
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price * items[i].qty;
    }

    return subtotal;
}


function getDiscount(subtotal) {
    // Bug fix: Check the higher threshold first so 20% is not skipped.
    if (subtotal > 20000) return 0.2;
    else if (subtotal > 10000) return 0.1;

    return 0;
}



function getTotal(items) {
    const subtotal = getSubtotal(items);
    const discount = getDiscount(subtotal);

    // Bug fix: Convert the discount percentage into a money amount.
    // Subtracting 0.1 directly would remove only 10 cents, not 10%.
    const total = subtotal - subtotal * discount;

    return total;
}
console.log(getTotal(cart));