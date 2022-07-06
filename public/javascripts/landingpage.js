document.querySelector("#menu").addEventListener("click", function () {
    document.querySelector(".menu_page").style.opacity = "1";
})
document.querySelector("#cross").addEventListener("click", function () {
    document.querySelector(".menu_page").style.opacity = "0";
})

var arr=[
   {name:"Justic League",img:"/images/1/1.webp",para:"Movies are a very popular entertainment medium among common people..",added:true,link:'metro'},
   {name:"Avenger",img:"/images/1/2.jpg",para:"Movies are a very popular entertainment medium among common people.",link:"AP"},
   {name:"Mangal",img:"/images/1/3.webp",para:"Movies are a very popular entertainment medium among common people.",added:true},
   {name:"How To Train Dragon",img:"/images/1/6.jpg",para:"Movies are a very popular entertainment medium among common people.",added:true},
   {name:"Titu Ka Sweety",img:"/images/1/7.jpg",para:"Movies are a very popular entertainment medium among common people.",added:true},
   {name:"Matrix",img:"/images/1/13.jpg",para:"Movies are a very popular entertainment medium among common people..",added:true},
   {name:"Sab Kushal Mangal",img:"/images/1/3.webp",para:"Movies are a very popular entertainment medium among common people.",added:true},   
   {name:"Kabir Singh",img:"/images/1/12.jpg",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Matrix",img:"/images/1/13.jpg",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Rava",img:"/images/1/14.jpg",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Luka Chuppi",img:"/images/1/16.jpg",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Ae Kaash Ke Ham",img:"/images/1/4.webp",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Enders Game",img:"/images/1/5.webp",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Chhalaange",img:"/images/1/8.jpg",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Cheena Jhapti",img:"/images/1/9.png",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Shang-Chi",img:"/images/1/10.jpg",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Gunjan Sexena",img:"/images/1/11.webp",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Ram Setu",img:"/images/1/15.webp",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Coolie",img:"/images/1/17.webp",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Night At The Museum",img:"/images/1/18.webp",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
   {name:"Bhookh",img:"/images/1/19.jpg",para:"Gujarat is a state along the western coast of India. Its coastline of about 1,600 km (990 mi) is the longest in the country, most of which lies on the ...",added:true},
]
// console.log(_dirname);
function showcase(elem){
   var temp="";

   elem.forEach(function(data,index){
      temp+=`
      <a href="/palaces/${data.link}"><div class="cards">
      <div class="card">
      <ul class="ul">
          <li>
               <i class="ri-pencil-fill"></i>
          </li>
      </ul>
      <img src="${data.img}" alt="">
      <div class="con-text">
          <p>
              ${data.para}
          </p>
          
      </div>
  </div>
  <h2>
      ${data.name}
  </h2>
  </div>
  </a>`
   })
document.querySelector(".flex").innerHTML=temp;
   
}
showcase(arr);



// var cards=document.querySelector(".ul li i")
// cards.addEventListener("click",function(dts){
//    arr[dts.target.id].added = !arr[dts.target.id].added; 
//    showcase(arr)
// })
// function showfilter(){
//    var arr2=[]
//    arr.forEach(function(hell){
//       if(hell.added===true){
//          arr2.push(hell)
//       }
//    })
//    showcase(arr2)
// }

// var check=document.querySelector("#main2")
// check.addEventListener("click",function(){
//   showfilter()
// })

var user=document.querySelector("#user");
flag=1
user.addEventListener("click",function(){
   if(flag==0){
    document.querySelector(".logout").style.display="none";
    flag=1;
   }
   else if (flag==1) {
    document.querySelector(".logout").style.display="initial";
    flag=0;
   } 
})
