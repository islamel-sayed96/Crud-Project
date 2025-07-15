var productNameInput = document.getElementById('ProductName'); //  all input ...
var productPriceInput = document.getElementById('ProductPrice'); //  all input ...
var productCategoryInput = document.getElementById('ProductCategory'); //  all input ...
var productDescInput = document.getElementById('ProductDesc'); //  all input ...

// ProductName >  id of input 
// console.log(productNameInput , productPriceInput , productCategoryInput , productDescInput);

localStorage.setItem("academy" , "Albyan");
localStorage.setItem("instructor" , "Eslam");
console.log(localStorage.key(0));

sessionStorage.setItem('userAge' ,'27');

var productContainer = [] ;
function addProduct(){
    var product = {
        name : productNameInput.value ,
        price : productPriceInput.value ,
        category : productCategoryInput.value ,
        desc : productDescInput.value,
    }
    productContainer.push(product)
    localStorage.setItem("products" , JSON.stringify(productContainer))
    displayProducts(productContainer); // for add
    clearForm();

}
function clearForm(){
    productNameInput.value = " " ;
    productPriceInput.value = " " ;
    productCategoryInput.value = " " ;
    productDescInput.value = " " ;
}
 function displayProducts(arr){
    var cartona = '';
    for ( var i = 0 ; i < arr.length ; i++){
        cartona +=   `<tr>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].price}</td>
                        <td>${arr[i].category}</td>
                        <td>${arr[i].desc}</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Update</button>
                        </td>
                        <td>
                            <button onclick="deleteProduct(${i});" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                     </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona;
 }
 displayProducts();

 function deleteProduct(productIndex){
    productContainer.splice(productIndex,1);
    displayProducts(productContainer);

 }

