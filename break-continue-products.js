/// node break-continue-products.js \\\

const products =
[
    {name: 'Smart TV', price: 52000, warrenty:'5years'},

    {name: 'TV', price: 22000, warrenty:'3years'},

    {name: 'Watch', price: 3600, warrenty:'1years'},

    {name: 'Bag', price: 1200, warrenty:'1years'},

    {name: 'Mobile', price: 2200, warrenty:'1years'},

    {name: 'Hand-Bag', price: 1800, warrenty:'2years'},
    
    {name: 'Nokia Mobile', price: 1200, warrenty:'5years'},

    {name: 'Trimmer', price: 700, warrenty:'6Months'}
];

for(const product of products)
{
    if(product.price < 1400)
    {
        // break;
        continue;
    }
    console.log(product);
}