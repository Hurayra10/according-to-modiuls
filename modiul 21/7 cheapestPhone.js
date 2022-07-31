const phones = [
    {name: 'Samsung', prise: 50000, storage: 20}, 
    {name: 'Nokis', prise: 40000, storage: 10}, 
    {name: 'Oppo', prise: 30000, storage: 100}, 
    {name: 'Walton', prise: 60000, storage: 50}, 
    {name: 'HTC', prise: 10000, storage: 6}
];


let cheapest = phones[0];
for (const phone of phones){
    if (phone.prise < cheapest.prise){
        cheapest = phone;
    }
}


console.log(cheapest);










