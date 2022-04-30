const imgs = document.querySelectorAll(".img");
let i = 0;
function changeImage() {
  imgs[i].setAttribute("class", "active img");
  imgs.forEach((el, index) => {
    if (index !== i) {
      imgs[index].setAttribute("class", "img");
    }
  });

  i++;
  if (i == 4) {
    i = 0;
  }
}
setInterval(changeImage, 2000);


const counters = document.querySelectorAll(".data__number");
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.documentElement.scrollTop > 800) {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / 250;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + inc)}`;
          setTimeout(updateCount, 60);
        }
      };
      updateCount();
    });
  }
}

// slick--slider
$(document).ready(function () {
  $(".view__tour-list").slick({
    slidesToShow: 3,
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left slider__arrow"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right slider__arrow"></i></button>`,
    responsive : [ 
      {
        breakpoint : 1024,
        settings : {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings : {
          slidesToShow :  1,
        }
      }
      
    ],
  });
});

// slider-testimonials 
  const sliders = document.querySelector(".slide__testimonials");
  const slider = document.querySelectorAll(".select__item");
  const item = document.querySelector(".select__item");
  const sliderDot = document.querySelectorAll(".slider__dot__item")
  const sliderLength = slider.length;
  const setWith = item.offsetWidth;
  let index = 0;
  setInterval(function(){
    index++;
    if(index === sliderLength) {
      index = 0
    }
    sliders.style = `transform : translateX(${index * setWith * -1}px)`;
    [...sliderDot].forEach(item => item.addEventListener("click", function(e){
      [...sliderDot].forEach(para => para.classList.remove("active"));
      e.target.classList.add("active");

      const sliderIndex = parseInt(e.target.dataset.index);
      index = sliderIndex;
      console.log(index);
      sliders.style = `transform : translateX(${index * setWith * -1}px)`;
    }));
    [...sliderDot].forEach(para => para.classList.remove("active"));
    sliderDot[index].classList.add("active");
  },3000)


//menuMobi

const menuMobile = document.querySelector(".bar__menu")
const childMenu = document.querySelector(".nav__menu-mobile")
const header = document.querySelector(".navigation")
const overLay = document.querySelector(".overlay")
const dropMenuone = document.querySelector(".mobile-drop__menu1")
const menuChildone = document.querySelector(".menu__mobi__child1")
const barMenu = document.querySelector(".hald-menu")
const menuMobi = document.querySelector(".navigation")


menuMobile.addEventListener( "click", ()=> {
  childMenu.classList.toggle("mobile__child")
  childMenu.classList.toggle("hand-menu");
  overLay.classList.toggle("chang__overlay")
})
overLay.addEventListener("click",() => {
  childMenu.classList.toggle("mobile__child")
  overLay.classList.toggle("chang__overlay")
  childMenu.classList.toggle("hand-menu");
})



dropMenuone.addEventListener("click", () => {
  console.log("hihi");
  menuChildone.classList.toggle("changmenu__child");
  console.log( barMenu);

  barMenu.classList.toggle("change-hight");

})

