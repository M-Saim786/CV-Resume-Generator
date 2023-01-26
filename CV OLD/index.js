// var yname = document.getElementById("name");
// var fname = document.getElementById("fname");
// var email = document.getElementById("email");
// var number = document.getElementById("number");
// var address = document.getElementById("address");
// var city = document.getElementById("city");
// var post_code = document.getElementById("post_code");
// var education = document.getElementById("education");
// var skill = document.getElementById("skill");


// var submit = document.getElementById("submit");
// submit.addEventListener("click", function (e) {
//   e.preventDefault();

  
// });

// div.innerHTML = `
// <table> 
// <tr>
// <th>Your Name</th>
// <th>Father Name</th>
// <th>Email Address</th>
// <th>Phone Number</th>
// <th>Educcation</th>
// <th>Home Address</th>
// <th>City </th>
// <th>Postal Code</th>
// <th>Skills</th>
// </tr>

// <tr>
// <td>${yname.value}</td>
// <td>${fname.value}</td>
// <td>${email.value}</td>
// <td>${number.value}</td>
// <td>${education.value}</td>
// <td>${address.value}</td>
// <td>${city.value}</td>
// <td>${post_code.value}</td>
// <td>${skill.value}</td>
// </tr>
// </table>`;


// container.appendChild(div);


// stock = 0
// stockin =0
// stockout = 0
// stockin = parseInt(prompt('Enter Stock in'))
// stockout = parseInt(prompt('Enter Stock OUT'))
// stock = stockin + stock
// console.log(stock)
// stock = stockin - stockout
// console.log(stock)




var container = document.getElementById("result");
console.log(container);
var div = document.createElement("div");

stockin= document.getElementById('stockin')
// stock= document.getElementById('stock')
stockout= document.getElementById('stockout')

stockinfunc = document.getElementById('stockinfunc')
console.log(stockinfunc)


stockinfunc.addEventListener('click', function(){
    // stock = stockin.value
    stock = 0
// stockin =0
// stockout = 0
console.log(stockin.value)
    stock = stockin.value + stock
console.log(stock)
stock = stockin.value - stockout.value
console.log(stock)

rstock = stock
console.log(rstock)
// rstock = parseInt(rstock)

div.innerHTML = `
<table> 
<tr>
<th>Stock In</th>
<th>StoCK Out</th>
<th> R Stock</th>
</tr>

<tr>
<td>${stockin.value}</td>
<td>${stockout.value}</td>
<td>${stock}</td>
</tr>
</table>`;
})
container.appendChild(div);