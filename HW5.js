var phone = {
    STT: [1, 2, 3, 4],
    name: ['Xiaomi portablecharger 20000mah', 'VSmart Active 1', 'IPhone X', 'Samsung Galaxy A9'],
    brand: ['XiaoMi', 'VSmart', 'Apple', 'SamSung'],
    price: [428, 5487, 21490, 8490],
    color: ['White', 'Black', 'Gray', 'Blue'],
    category: ['Charger', 'Phone', 'Phone', 'Phone'],
    providers: ['PhukienzeroDientuccc', 'TgddDdghnVnStore', 'Tgdd', 'Tgdd'],
}
// let s= phone.STT;
// let n = phone.name;
// let b = phone.brand;
// let pr = phone.price;
// let c= phone.color;
// let ca = phone.category;
// let p = phone.providers;
// for(let i=1; i<n.length; i++){
//     console.log('-----------------------------------------------')
//     console.log('name:'+ n[i]);
//     console.log('price:'+ pr[i])
//     console.log('-----------------------------------------------')
// }


//
for( let i = 0; i < name.length; i++){
    let a = Number(prompt("Enter product position"));
    if (a == i + 1) {
        console.log(phone.name[i]);
        console.log(phone.brand[i]);
        console.log(phone.price[i]);
        console.log(phone.color[i]);
        console.log(phone.category[i]);
        break;
    }else{
        console.log('sản phẩm không tồn tại');
    }
}


//
let temp = prompt('Enter your category')
if( temp == "charger"){
    console.log(phone.name[0]);
    console.log(phone.price[0]);
}
else if( temp == "phone"){
    let b;
    for(b = 1; b<=3 ; b++){
    console.log(phone.name[b]);
    console.log(phone.price[b]);
}
}

