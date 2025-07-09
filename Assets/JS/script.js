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
 function displayProduct(){
    var cartona = '';
    for ( var i = 0 ; i < productContainer.length ; i++){
        cartona +=   `<tr>
                        <td>Toshiba</td>
                        <td>4000</td>
                        <td>Tv</td>
                        <td>Smart Tv</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                        </td>
                        <td>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                     </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona;
 }
 displayProduct();

