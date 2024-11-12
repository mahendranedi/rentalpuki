const swiperssssss = new Swiper(".mySwipersssss", {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
 
  breakpoints:{
    
   640:{
     slidesPerView: 2,
     spaceBetween: 40,
     centeredSlides:false,
   },
 
    768:{
      slidesPerView: 2.5,
      spaceBetween: 40,
      centeredSlides:false,
    },
    
    1024:{
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides:false,
    },
 
    1280:{
     slidesPerView: 3,
     spaceBetween: 20,
     centeredSlides:false,
   },
    
  }
 });


const swipersssss = new Swiper(".mySwiperssss", {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
 
  breakpoints:{
    
   640:{
     slidesPerView: 2,
     spaceBetween: 40,
     centeredSlides:false,
   },
 
    768:{
      slidesPerView: 2.5,
      spaceBetween: 40,
      centeredSlides:false,
    },
    
    1024:{
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides:false,
    },
 
    1280:{
     slidesPerView: 3,
     spaceBetween: 30,
     centeredSlides:false,
     hide:true,
   },
    
  }
 });


const swiperss = new Swiper(".mySwiperss", {
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
 
  breakpoints:{
    
   640:{
     slidesPerView: 2,
     spaceBetween: 40,
     centeredSlides:false,
   },
 
    768:{
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides:false,
    },
    
    1024:{
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides:false,
    },
 
    1280:{
     slidesPerView: 2,
     spaceBetween: 20,
     centeredSlides:false,
     hide:true,
   },
    
  }
 });


const swipersss = new Swiper(".mySwipersss", {
    grabCursor:true,
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
   
    breakpoints:{
      
     640:{
       slidesPerView: 2,
       spaceBetween: 40,
       centeredSlides:false,
     },
   
      768:{
        slidesPerView: 2.5,
        spaceBetween: 40,
        centeredSlides:false,
      },
      
      1024:{
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides:false,
      },
   
      1280:{
       slidesPerView: 4,
       spaceBetween: 30,
       centeredSlides:false,
       hide:true
     },
      
    }
   });


// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if (window.pageYOffset > fixedNav){
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  }
    
    // Hamburger
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('hidden');
    });
    
   
    // Klik di luar hamburger
    window.addEventListener('click', function (e) { 
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.add('hidden');
      }
      
    });
  
    //menu
    function showFoodMenu() {
      document.getElementById('menu-food').classList.remove('hidden');
      document.getElementById('menu-drink').classList.add('hidden');
  
     
      document.getElementById('show-food').classList.add('text-primary');
      document.getElementById('show-drink').classList.remove('text-primary');
    }
  
    
    function showDrinkMenu() {
      document.getElementById('menu-food').classList.add('hidden');
      document.getElementById('menu-drink').classList.remove('hidden');
  
      document.getElementById('show-food').classList.remove('text-primary');
      document.getElementById('show-drink').classList.add('text-primary');
    }
  
    
    showFoodMenu();
    document.getElementById('show-food').addEventListener('click', showFoodMenu);
    document.getElementById('show-drink').addEventListener('click', showDrinkMenu);