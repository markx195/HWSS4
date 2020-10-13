const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};
    for (let x in product){
        console.log(x);
}

// x recive property
for (let i=0; i<product.length; i++){
    console.log(product[i]);
}
console.log(product);