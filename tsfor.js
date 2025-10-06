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

let form = document.querySelector("form");
let bookPopup = document.getElementById("bookPopup");
let bookClose = bookPopup.querySelector(".close");

// عند الضغط على الزر Book
form.addEventListener("submit", function (e) {
  e.preventDefault(); // يمنع إعادة تحميل الصفحة مؤقتًا

  if (form.checkValidity()) {
    // لو كل البيانات صح
    bookPopup.style.display = "flex";
  } else {
    // لو في بيانات ناقصة HTML هيتصرف ويظهر رسائل required
    form.reportValidity();
  }
});

// يقفل عند الضغط على X
bookClose.addEventListener("click", () => {
  bookPopup.style.display = "none";
});

// يقفل عند الضغط برة
window.addEventListener("click", (e) => {
  if (e.target === bookPopup) {
    bookPopup.style.display = "none";
  }
});

