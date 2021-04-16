// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');


// we aren't using "toggle" here because we also want to add functionality for "pause" and "play" on the video
btn.addEventListener('click', function(){
      // if the switch button does not contain the "slide" class...
      if(!btn.classList.contains('slide')){
            // add the "slide" to the switch button and pause the video
            btn.classList.add('slide');
            video.pause();
      }
      else{
            // if the switch button does contain the "slide" class, remove the "slide" class and play the video
            btn.classList.remove('slide');
            video.play();
      }
});

// preloader
const preloader = document.querySelector('.preloader');

// we want to listen for the "load" event on the window...
window.addEventListener('load', function(){
      preloader.classList.add('hide-preloader')
});