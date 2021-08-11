/// node searching-products.js \\\

const products =
[
    {name: 'Bag', price: 1200, warrenty:'1years'},
    {name: 'Hand-Bag', price: 1800, warrenty:'2years'},
    {name: 'Watch', price: 600, warrenty:'1years'},
    {name: 'TV', price: 22000, warrenty:'3years'},
    {name: 'Smart TV', price: 5200, warrenty:'5years'},
    {name: 'Mobile', price: 2200, warrenty:'1years'},
    {name: 'Nokia Mobile', price: 1200, warrenty:'5years'},
    {name: 'Trimmer', price: 700, warrenty:'6Months'}
];

function searchProducts(products,searchText)
{
    const matched = [];
    for(const product of products)
    {
        const productName = product.name;
    if(productName.indexOf(searchText) != -1)
    {
        // matched.push(productName);        
        matched.push(product);        
    }
    }
    return matched;
}

const matchingProduct = searchProducts(products,'TV');
console.log(matchingProduct);