let profileimg=document.querySelector(".profile > img")
let profileSetting=document.querySelector(".profile-setting");
profileimg.addEventListener("click",function(){
  profileSetting.classList.toggle("ds");
});


let changegbcolor=document.querySelector(".switch");
// const Thems={
//   dark:{
//     "--first-gray":"black"
//   },
//   light:{
//     "--first-gray":"rgb(235, 235, 235)"
//   }
// }
changegbcolor.addEventListener("click",function(){
  changegbcolor.classList.toggle("switch2");
  // if(changegbcolor.classList.contains("switch2")){
  //   for(let values in Thems[0]){
  //     document.documentElement.style.setProperty(values,Thems[values])
  //   }
  // }
})
