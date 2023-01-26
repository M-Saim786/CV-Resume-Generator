var yname = document.getElementById("name");
var email = document.getElementById("email");
var phoneNum = document.getElementById("pnumber");
var address = document.getElementById("address");
//            .............   Important Links info
var facebookinfo = document.getElementById("facebook_link");
var instagraminfo = document.getElementById("instagram_link");
var linkedIninfo = document.getElementById("linkedin_link");
var GithubInfo = document.getElementById("github_link");
//                     ............ Profession info
var objective = document.getElementById("objective");

// ..........           Fucntion For Experience........
var experience = document.getElementsByClassName("wrEx");
var WREx_div = document.getElementById("divForWREx");
var btnForWREx = document.getElementById("btnForWREx");

btnForWREx.addEventListener("click", () => {
  NewText = document.createElement("textarea");
  NewText.classList.add("textarea");
  NewText.classList.add("form-control");
  NewText.classList.add("wrEx");
  NewText.classList.add("my-2");
  NewText.setAttribute("placeholder", "Enter Working Experience");
  WREx_div.insertBefore(NewText, btnForWREx);
  // console.log(NewText);
});

//               ............. Function For Qualification   ...........
var qualification = document.getElementsByClassName("qualification");
var qualificationDiv = document.getElementById("qualificationDiv");
// console.log(qualificationDiv);
var addAcaQuaBtn = document.getElementById("addAcaQuaBtn");
addAcaQuaBtn.addEventListener("click", () => {
  var NewText = document.createElement("textarea");
  NewText.classList.add("textarea");
  NewText.classList.add("form-control");
  NewText.classList.add("my-2");
  NewText.classList.add("qualification");
  NewText.setAttribute("placeholder", "Enter qualification");

  qualificationDiv.insertBefore(NewText, addAcaQuaBtn);
  //   console.log(qualificationDiv);
});
// console.log(qualification);

//               ............. Function For Skills   ...........
var skill_Div = document.getElementById("skill_Div");
var skills = document.getElementsByClassName("skills");
var skillBtn = document.getElementById("skillBtn");
skillBtn.addEventListener("click", () => {
  console.log(skills);
  NewField = document.createElement("input");
  NewField.classList.add("form-control");
  NewField.classList.add("my-2");
  NewField.classList.add("skills");

  NewField.setAttribute("placeholder", "Enter Here");
  skill_Div.insertBefore(NewField, skillBtn);
});

// Variables To append Changes in CV
var cv_workingEx = document.getElementById("cv_workingEx");
var cv_qual = document.getElementById("cv_qual");
var cv_skills = document.getElementById("cv_skills");
//              Main Fucntion

var generatebtn = document.getElementById("generateCV");
generatebtn.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(yname);
var alertshow = document.getElementById("alert");
var close_alert = document.getElementById("close-alert")
var success_alert= document.getElementById('success')
close_alert.addEventListener("click", function(){
  alertshow.classList.add("hide")
})
console.log(alertshow);
  if (
    (yname.value,
    email.value,
    phoneNum.value,
    address.value,
    facebookinfo.value,
    instagraminfo.value,
    linkedIninfo.value,
    GithubInfo.value,
    objective.value,
    experience[0].value,
    qualification[0].value,
    skills[0].value
    == "") 
  ) {    
      // alert("click");
      alertshow.classList.remove('hide')
   
      setTimeout(() => {
        alertshow.classList.add('hide')
      
      }, 1500);
      window.scrollTo(0,0)
  } else {
    // personal side

    var cvname = document.getElementsByClassName("cvname");
    cvname[0].innerHTML = yname.value;
    cvname[1].innerHTML = yname.value;
    document.getElementById("cvemail").innerText = email.value;
    document.getElementById("cvPhoneNum").innerText = phoneNum.value;
    document.getElementById("cvLocation").innerText = address.value;
    document.getElementById("cv_facebook").innerText = facebookinfo.value;
    document.getElementById("cv_instagram").innerText = instagraminfo.value;
    document.getElementById("cv_linkedin").innerText = linkedIninfo.value;
    document.getElementById("cv_github").innerText = GithubInfo.value;
    // professional side
    document.getElementById("cv_objective").innerText = objective.value;
    qwe = "";
    for (var i of experience) {
      qwe = qwe + `<li>${i.value}</li>`;
      // console.log(qwe);
      cv_workingEx.innerHTML = `${qwe}`;
    }
    qual = "";
    for (var j of qualification) {
      qual = qual + `<li>${j.value}</li>`;
      // console.log(qual);
      cv_qual.innerHTML = `${qual}`;
    }
    var skilli = "";
    for (var k of skills) {
      skilli = skilli + `<li>${k.value}</li>`;
      cv_skills.innerHTML = `${skilli}`;
    }
    var CV_main = document.getElementById("cv_main");
    CV_main.style.display = "flex";

    success_alert.classList.remove('hide')
setTimeout(() => {
  // success_alert.classList.add('hide')

}, 1500);
    window.scroll(0,0)


    // Getting Image  Dynamically
    var img = document.getElementById("img").files[0];
    console.log(img);
    var reader = new FileReader();
    reader.readAsDataURL(img);
    console.log(reader.result);

    reader.onload = () => {
      document.getElementById("profile").src = `${reader.result}`;
    };
    setTimeout(() => {
      generatebtn.classList.add("btn-success");
      // CV_main.style.display = 'block'
    }, 100);
    
  }

});

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

// usign firebsae
// console.log(firebase())
