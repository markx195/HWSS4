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
let a = Number(prompt("Enter product position"));
for( let i = 0; i < phone.name.length; i++){
        console.log(phone.name[a-1]);
        console.log(phone.brand[a-1]);
        console.log(phone.price[a-1]);
        console.log(phone.color[a-1]);
        console.log(phone.category[a-1]);
        break;
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

