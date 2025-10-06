const swiper = new Swiper('.swiper', {
  
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});

let new_swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });


   let last_swiper = new Swiper(".last_Swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      grabCursor:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



let check_btns = document.querySelectorAll(".check");
let popup = document.getElementById("popup");
let closeBtn = document.querySelector(".close");

// لما اضغط على أي زرار "check availability"
check_btns.forEach(btn => {
  btn.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

// لما اضغط على X يقفل
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// لما اضغط برة يقفل
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
