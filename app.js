//code for burger menu
let burgerMenu = document.getElementById("burger-containerz");
let menuList = document.getElementById("menu-listz");
burgerMenu.addEventListener("click",()=>{
    menuList.classList.toggle("showMenu");
})    


//code for card section
const data = [
{
      imageSrc : "https://raw.githubusercontent.com/chandandevz/devschandan/refs/heads/main/20240920_105223_compress41.jpg",
      title : "Cool Wheather App",
      link : "https://devuploads.com/rfhwq8nkvo95"
},
{
      imageSrc : "https://raw.githubusercontent.com/chandandevz/devschandan/main/ambient.jpg",
      title : "Ambient Light Effect",
      link : "https://devuploads.com/nu9jielix0by"
},
    
{
      imageSrc : "https://raw.githubusercontent.com/chandandevz/devschandan/main/neon-lg.jpg",
      title : "Cool Neon Login Form",
      link : "https://devuploads.com/o7zchs18glzh"
},
    
{
     imageSrc : "https://raw.githubusercontent.com/chandandevz/devschandan/main/20240812_171559_compress72.jpg",
     title : "Animated Tab Bar",
     link : "https://devuploads.com/fezivgzgr93h"
},
    
{
     imageSrc : "https://raw.githubusercontent.com/chandandevz/devschandan/main/credit-card-design2.jpg",
     title : "Credit Card Form Design",
     link : "https://devuploads.com/z4nx9uenmebq"
},
    
{
     imageSrc : "https://raw.githubusercontent.com/chandandevz/devschandan/main/3d-flip-card-gallery.jpg",
     title : "3D Flip Card Gallery",
     link : "https://devuploads.com/gahxj2hof6j7"
},
    
{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/hex_gallery.jpg",
    title: "Hexagon Gallery Code",
    link : "https://devuploads.com/m97urhr3nrmp"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/animated_login_form.jpg",
    title: "Animated Login Form",
    link : "https://devuploads.com/ndgj0vm5ovct"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/digitalclock.jpg",
    title: "Digital Clock Animation",
    link : "https://devuploads.com/l9225pg6guj6"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/otpv.jpg",
    title: "Otp Verification App",
    link : "https://devuploads.com/acfverdpq08h"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/streetlamp.jpg",
    title: "Interactive Street Lamp",
    link : "https://devuploads.com/bn0a8fqwwd9t"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/login-fingerprint.jpg",
    title: "Fingerprint Login Form",
    link : "https://devuploads.com/7fjs3ue2bff8"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/moderndesign.jpg",
    title: "Modern Design Login Form",
    link : "https://devuploads.com/7jfzks11mbba"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/sicon.jpg",
    title: "Social Icon Popup",
    link : "https://devuploads.com/skycv4ru4mci"
},

{
    imageSrc : "https://raw.githubusercontent.com/chandandevz/myPortfolio/master/orderconfirm.jpg",
    title: "Order Confirm Animation",
    link : "https://devuploads.com/oij86bm0cuha"
}
];

data.forEach((item,i)=>{
    const container = document.querySelector(".container");
const card = document.createElement('div');
card.classList = "card";

    
    const downloadCards = `
    <div class="img_container">
          <img src="${item.imageSrc}" alt="">
        </div>
            <div class="info">
                <h3>${item.title}</h3>
                <a href="${item.link}"><button class="download_btn">Download</button></a>
            </div>
            `;

card.innerHTML += downloadCards;

container.appendChild(card);
    
})



