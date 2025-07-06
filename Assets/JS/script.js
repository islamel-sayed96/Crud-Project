var productNameInput = document.getElementById('ProductName'); //  all input ...
var productPriceInput = document.getElementById('ProductPrice'); //  all input ...
var productCategoryInput = document.getElementById('ProductCategory'); //  all input ...
var productDescInput = document.getElementById('ProductDesc'); //  all input ...

// ProductName >  id of input 
// console.log(productNameInput , productPriceInput , productCategoryInput , productDescInput);

var productContainer = [] ;
function addProduct(){
    var product = {
        name : productNameInput.value ,
        price : productPriceInput.value ,
        category : productCategoryInput.value ,
        desc : productDescInput.value,
    }
    productContainer.push(product)
    console.log(productContainer);
}