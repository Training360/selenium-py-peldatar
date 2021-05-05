var qtyTotal = 0;
var priceTotal = 0;

function updateForm() {
    var product = document.getElementById("product").value;

    var qty = document.getElementById("quantity").value;
    qtyTotal = qtyTotal + parseInt(qty);
    document.getElementById("qtyTotals").innerHTML=qtyTotal;

    var price = document.getElementById("price").value;    
    priceTotal = priceTotal + parseInt(price);
    document.getElementById("priceTotals").innerHTML=priceTotal;

    var table=document.getElementById("results").getElementsByTagName("tbody")[0];
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    cell1.innerHTML=product;
    cell2.innerHTML=qty;        
    cell3.innerHTML=price;           
}