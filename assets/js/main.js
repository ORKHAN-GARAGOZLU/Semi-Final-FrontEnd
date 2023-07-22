let drawerBtn = document.querySelector(".drawer");
let drawer = document.querySelector(".drawer-d");
let drawerClose = document.querySelector(".drawer-d .close");
let body = document.querySelector("body");


drawerBtn.onclick = function () {
    drawer.classList.add("show");
    // body.classList.add("blur");
    
}

drawerClose.onclick = function () {
    drawer.classList.remove("show");
    // main.classList.remove("blur");

}

//------------------------------------
// Header

let mainHeader = document.querySelector(".main-header")
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if(scrollY > 135){
        mainHeader.classList.add("after-scroll");
        drawerBtn.style.background = "#eeeeee";
    }
    else{
        mainHeader.classList.remove("after-scroll");
        drawerBtn.style.background = "white";
    }

});

//------------------------------------

//Businnes


   


//------------------------------------

// Video-section

document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector(".play");
    const videoPlayer = document.querySelector(".video-player");
    const videoSrc = "https://www.youtube.com/embed/UDVtMYqUAyw";

    playButton.addEventListener("click", function() {
        videoPlayer.style.display = "block";
        videoPlayer.innerHTML = `<iframe width="1000" height="500" src="${videoSrc}" frameborder="0" allowfullscreen></iframe>`;
    });
});

// Up

let up = document.querySelector(".up");

      window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        if(scrollY > 300){
          up.classList.add("show");
        }
        else{
          up.classList.remove("show");
        }

      });
      up.addEventListener("click", () =>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });





