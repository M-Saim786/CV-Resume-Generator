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

// var container = document.getElementById("result");
// console.log(container);
// var div = document.createElement("div");

// stockin= document.getElementById('stockin')
// // stock= document.getElementById('stock')
// stockout= document.getElementById('stockout')

// stockinfunc = document.getElementById('stockinfunc')
// console.log(stockinfunc)

// stockinfunc.addEventListener('click', function(){
//     // stock = stockin.value
//     stock = 0
// // stockin =0
// // stockout = 0
// console.log(stockin.value)
//     stock = stockin.value + stock
// console.log(stock)
// stock = stockin.value - stockout.value
// console.log(stock)

// rstock = stock
// console.log(rstock)
// // rstock = parseInt(rstock)

// div.innerHTML = `
// <table>
// <tr>
// <th>Stock In</th>
// <th>StoCK Out</th>
// <th> R Stock</th>
// </tr>

// <tr>
// <td>${stockin.value}</td>
// <td>${stockout.value}</td>
// <td>${stock}</td>
// </tr>
// </table>`;
// })
// container.appendChild(div);

// print function

var yname = document.getElementById("name");



jQuery(document).ready(() => {
  // var print = document.getElementById('btn-print')
  // print.addEventListener('click',()=>{
  //     window.print()
  // })
  $("#btn-print").click(function () {
    window.print();
  });

  // var btn_section  =document.getElementById('btn_section')
  $('#btn_section').click(function () {
    html2canvas(document.getElementById("cv_main")).then((canvas) => {
      let ToImage = canvas.toDataURL("image/png");
      console.log(ToImage);
      window.jsPDf = window.jspdf.jsPDF
      let pdf = new  window.jsPDf("p", "px", [canvas.width, canvas.height ]);
      pdf.addImage(ToImage, "PNG", 0, 0, canvas.width,canvas.height);
      pdf.save(`PDF Downloaded-${yname.value}.pdf`);
    });
  });

// 
// 
// Dark Mode
var cv_RightSide = document.getElementById("rightSide");
// console.log(cv_RightSide);
var darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click", function () {
  // e.preventDefault();
  var body = document.body;
  body.classList.toggle("darkmode");
  cv_RightSide.classList.toggle("darkmode");
  nav = document.getElementsByClassName("navbar");
  nav[0].classList.toggle("bg-dark");
  nav[0].classList.toggle("navbar-dark");
  toggleText = document.getElementById("toggleText");
  if (body.classList == "darkmode") {
    toggleText.innerText = "Disable Dark Mode";
  } else {
    toggleText.innerText = "Enable Dark Mode";
  }
});



// document.querySelector('#btn_section').addEventListener('click', function () {
//     html2canvas(document.querySelector('#cv_main')).then((canvas) => {
//         let base64image = canvas.toDataURL('image/png');
//         // console.log(base64image);
//         let pdf = new jsPDF('p', 'px', [1600, 1131]);
//         pdf.addImage(base64image, 'PNG', 15, 15, 1110, 360);
//         pdf.save('webtylepress-two.pdf');
//     });
// });
});
