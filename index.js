

var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCompanyInput=document.getElementById("productCompany");
var productDescInput=document.getElementById("productDesc");
var addBtn=document.getElementById("addBtn");

var prodctContainer=[];

addBtn.onclick = function()
{
 addProduct();
 displayData();
 //clearData();


}
 function addProduct()
 {
    var product =
    {
       name:productNameInput.value,
       price:productPriceInput.value,
       comany:productCompanyInput.value,
       desc:productDescInput.value
   }

   prodctContainer.push(product); 
   displayData();
 }

   function displayData()
   {
     var cols="";
    for( var i=0;i<prodctContainer[i].length;i++);
      {
    cols+='<div class="col-md-3"><h2>'+prodctContainer[i].name+'</h2><p>'+prodctContainer[i].price+'</p><p>'+prodctContainer[i].comany+'</p><p>'+prodctContainer[i].desc+'</p></div></td></tr>'
      } 
          document.getElementById("rowData").innerHTML=cols;
   }

   function clearData()
   {
     var inputs=document.getElementsByClassName("form-control");
     for(var i=0;i<inputs.length;i++)
     {
       inputs[i]="";
     }
   }