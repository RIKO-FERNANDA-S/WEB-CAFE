const navbarNav = document.querySelector ('.navbar-nav');
// klik coy
document.querySelector('#coffee-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik nak njoboa

const menu = document.querySelector('#coffee-menu');

document.addEventListener('click',function(f) {
    if(!menu.contains(f.target) && !navbarNav.contains(f.target))   {
        navbarNav.classList.remove('active');
    }
    });

// sticky
window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})


// MENU SPLIDE JS
// var splide = new Splide( '.splide' );
//   var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
  
//   // Updates the bar width whenever the carousel moves:
//   splide.on( 'mounted move', function () {
//     var end  = splide.Components.Controller.getEnd() + 1;
//     var rate = Math.min( ( splide.index + 1 ) / end, 1 );
//     bar.style.width = String( 100 * rate ) + '%';
//   } );
  
//   splide.mount();

//   stars
//  var stars = document.querySelectorAll('.bin a');

//  stars.forEach((item, index1) => { item.addEventListener('click',
//      () => {
//         stars.forEach((stars, index2)
//         => {
//             index1 >= index2 ? stars.classList.add('active') : bin.classList.remove('active')
//         })
    
        
//     })
//  })


//  stars.forEach((star, index2)
//  => { index1 >= index2 ? bin.classList.add('active') : star.classList.remove('active')