// window.addEventListener('DOMContentLoaded', (e) => {});

// const header = window.document.querySelector(".header");
// const scrollTopBtn = window.document.querySelector(".scroll-top-btn");
let navbar = document.querySelector(".main-nav"); // ===== main navbar
let logo = document.querySelector("#logo"); // ===== main logo
let mediumNav = document.querySelector("#md-nav"); // ===== medium navbar
let navBtn = document.querySelector(".main-nav__toggler"); // ===== button to open medium navbar
let closeBtn = document.querySelector("#closeBtn"); // ===== button to close medium navbar

// ### start ########################### navbar fixed top  ################################
window.addEventListener("scroll", () => {
  let logoHref = `${
    window.location.href.includes("index") ||
    !window.location.href.includes(".html")
      ? "."
      : ".."
  }/content/img/logo/`;
  if (window.scrollY <= navbar.offsetHeight) {
    navbar.classList.remove("navbar-fixed--top");
    logo.setAttribute("src", logoHref + "LOGO.png");
  } else if (window.scrollY >= navbar.offsetTop) {
    navbar.classList.add("navbar-fixed--top");
    logo.setAttribute("src", logoHref + "blue-logo.png");
  }
});
// ### end ##############################################################################

// ### start ########################### show medium navbar from side  ################################
window.addEventListener("resize", (e) => {
  if (outerWidth > 991) {
    navBtn.style.display = "none";
  } else {
    navBtn.style.display = "inline-block";
  }
});

navBtn.addEventListener("click", () => {
  navBtn.style.display = "none";
  mediumNav.classList.add("main-nav__content-toggle");
  document.body.style.overflow = "hidden";
});
// ### end ##############################################################################

// ### start ########################### close button  ################################
closeBtn.addEventListener("click", () => {
  navBtn.style.display = "inline-block";
  mediumNav.classList.remove("main-nav__content-toggle");
  document.body.style.overflow = "auto";
});
// ### end ##############################################################################

let contactForm = window.document.querySelector(".contactForm");
let contactFormSelectInput = window.document.querySelector(
  ".contactForm__service-input"
);
let contactFormSelectList = window.document.querySelector(
  ".contactForm__select-list"
);

//custom selectbox set value
if (contactFormSelectList) {
  contactFormSelectList.addEventListener("click", function (e) {
    if (e.target.classList.contains("contactForm__select-item")) {
      contactFormSelectInput.value = e.target.textContent.trim();
    }
  });
}

const TIMELINE_DATA = [
  {
    year: "1985",
    title: "Saudi Bell was founded in Riyadh",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "1991",
    title: "Became a key provider for IT, <br>telecom and physical security",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "1996",
    title: "Established Jeddah branch",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "1997",
    title: "Established Jeddah branch",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "2000",
    title: "Established Dammam branch",
    image: "https://picsum.photos/600/400",
  },
  {
    year: "2021",
    title: "Expanding regionally to serve <br>the Middle East",
    image: "https://picsum.photos/600/400",
  },
];

if (window.location.href.includes("about")) {
  let timeline = new Timeline("timeline", TIMELINE_DATA);
  timeline.init();
}

// #region scrollTopBtn : Intersection Observer API
// const topBtnScroll = function (entries) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) {
//     scrollTopBtn.style.display = "flex"; // show scrollTopBtn
//   } else {
//     scrollTopBtn.style.display = "none"; // hidden scrollTopBtn
//   }
// };

// const headerObserver = new IntersectionObserver(topBtnScroll, {
//   root: null,
//   threshold: 0,
// });

// headerObserver.observe(header);
// // #endregion

// //#region for scrollTopBtn
// scrollTopBtn.addEventListener("click", function (e) {
//   header.scrollIntoView({ behavior: "smooth" });
// });
