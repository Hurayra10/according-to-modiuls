const products = [
    {name: 'samsung phone', price: 2000},
    {name: 'samsung laptop', price: 2000},
    {name: 'hp phone', price: 2000},
    {name: 'hp laptop', price: 2000},
    {name: 'samsung watch', price: 2000},
    {name: 'lenevo laptop', price: 2000},
    {name: 'walaton phone', price: 2000},
    {name: 'walton laptop', price: 2000},
    {name: 'book', price: 2000},
]

function searchProduct (item, searchText){

    for(const product of products){//products ke aikhaneo call kora hcce
        const name = product.name;
        
        if(name.indexOf(searchText) != -1){
            console.log(product);
        }
    }
}
searchProduct(products,'watch')//products ke aikhaneo call kora hcce

