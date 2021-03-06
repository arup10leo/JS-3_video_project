//MDN 
//The DOMContentLoaded event fires when the initial HTML document has been completely laoded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

//The load event is fired when the whole page has loaded, including all department resources such as stylesheet and images

const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")

btn.addEventListener("click", function() {
        if (btn.classList.contains("slide")) {
            btn.classList.remove("slide")
            video.pause()
        } else {
            btn.classList.add("slide")
            video.play()
        }
    })
    //preloader
const preloader = document.querySelector(".preloader")
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader")
})