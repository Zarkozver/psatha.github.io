// DEFINING PAGES FOR FUNCTIONS
const windowName = window.location.pathname;
console.log("main js");
allPages();
if (windowName == "/wedia/index.html" || windowName == "/wedia/") {
  indexPage();
} else if (windowName == "/wedia/contact.html") {
  contactPage();
} else if (windowName == "/wedia/portfolio.html") {
  portfolioPage();
}
if (windowName == "/wedia/author.html") {
  authorPage();
}

function renderNav() {
  // DYNAMIC NAVBAR
  let navWrap = document.createElement("div");
  navWrap.classList.add("container", "px-4");
  navWrap.setAttribute("id", "navbar-wrap");

  //   LOGO PART
  let navBrand = ["index.html", "logo-transparent.png", "logo-img"];
  let aBrand = document.createElement("a");
  aBrand.setAttribute("href", navBrand[0]);
  aBrand.classList.add(navBrand[1]);
  let imgLogo = document.createElement("img");
  aBrand.classList.add("navbar-brand");
  imgLogo.setAttribute("alt", `${navBrand[1]}`);
  imgLogo.setAttribute("src", `img/${navBrand[1]}`);
  aBrand.appendChild(imgLogo);

  //   NAVMENU
  let navLinks = [
    [
      "index.html",
      "index.html#cover",
      "contact.html",
      "portfolio.html",
      "author.html",
    ],
    ["Početna", "O nama", "Kontakt", "Portfolio", "Autor"],
  ];
  let navMenu = document.createElement("div");
  navMenu.setAttribute("id", "navbarNavDropdown");
  navMenu.classList.add("collapse", "navbar-collapse", "justify-content-end");

  let itemsWrap = document.createElement("ul");
  itemsWrap.classList.add("navbar-nav");
  itemsWrap.innerHTML = ``;
  for (let i = 0; i < navLinks[0].length; i++) {
    let currentPage = `/${navLinks[0][i]}` == windowName ? true : false;
    console.log(currentPage);
    itemsWrap.innerHTML += `<li class="nav-item">
                                <a
                                class="nav-link ${
                                  currentPage ? "active" : null
                                } fs-6 mx-3 fw-light"
                                aria-current="page"
                                href="${navLinks[0][i]}"
                                >${navLinks[1][i]}
                                <div class="underline"></div
                                ></a>
                            </li>`;
  }
  //   BUTTON TOGGLE
  let toggleBtn = document.createElement("button");
  toggleBtn.setAttribute("type", "button");
  toggleBtn.classList.add("navbar-toggler", "border-0", "text-white");
  let burgerWrap = document.createElement("div");
  burgerWrap.setAttribute("id", "burger-icon");
  burgerWrap.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    burgerWrap.innerHTML += `<div class="burger-line bl-${i + 1}"></div>`;
  }
  burgerWrap.innerHTML += "</div>";

  //   PUTTING PARTS TOGETHER
  navMenu.appendChild(itemsWrap);
  navWrap.appendChild(aBrand);
  toggleBtn.appendChild(burgerWrap);
  navWrap.appendChild(toggleBtn);
  navWrap.appendChild(navMenu);
  navWrap.appendChild(toggleBtn);
  let all = navWrap.outerHTML;
  let navbar = document.querySelector("nav");
  navbar.innerHTML = all;
}
function renderFooter() {
  let footer = document.getElementById("footerInfo");

  let footerInfo = [
    ["Stranice", "Informacije"],
    [
      ["Početna", "O nama", "Kontact", "Portfolio", "Autor"],
      ["Milosa Pocerca 10", "wedia@gmail.com", "069/3631111"],
    ],
    [
      [
        "index.html",
        "index.html#cover",
        "contact.html",
        "portfolio.html",
        "author.html",
      ],
      ["#", "#"],
    ],
  ];
  let innerFooter = "";
  let footerLogo = ["logo-transparent.png", "logo"];
  console.log(footerInfo[1][1]);
  innerFooter += `<div class="col-lg-6 col-md-3 footer-logo">
                    <img src="img/${footerLogo[0]}" alt="${footerLogo[1]}" />
                  </div>`;
  for (let i = 0; i < footerInfo[0].length; i++) {
    innerFooter += `<div class="col-lg-3 col-md-3">
      <h3 class="text-uppercase primary-font text-white">${footerInfo[0][i]}</h3>`;

    for (let j = 0; j < footerInfo[1][i].length; j++) {
      innerFooter += `<p class="text-uppercase primary-font">
                        <a href="${footerInfo[2][i][j]}" class="text-muted text-decoration-none">${footerInfo[1][i][j]}</a>
                      </p>`;
    }

    innerFooter += `</div>`;
  }
  footer.innerHTML = innerFooter;

  let social = document.querySelector(".social-footer");
  renderSocial(social);
}
function renderSocial(social) {
  let socialLinks = [
    [
      "fluent:document-24-regular",
      "la:sitemap",
      "akar-icons:instagram-fill",
      "bi:youtube",
    ],
    [
      "documentation.pdf",
      "sitemap.xml",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
  ];
  let innerSocial = "";
  for (let i = 0; i < socialLinks[0].length; i++) {
    innerSocial += `<a href="${socialLinks[1][i]}" class="text-white mx-2 text-decoration-none">
                      <span
                        class="iconify"
                        data-icon="${socialLinks[0][i]}"
                      ></span> </a>`;
  }
  social.innerHTML = innerSocial;
}
function carouselRender() {
  var nums = [1, 2, 3, 4, 5, 6];
  let ranVideos = [],
    i = nums.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranVideos.push(nums[j]);
    nums.splice(j, 1);
  }

  let carouselItems = [
    ["Wedia", "Wedia", "Wedia"],
    ["Portfolio", "Portfolio", "Portfolio"],
    [
      `portfolio-video-${ranVideos[0]}.mp4`,
      `portfolio-video-${ranVideos[1]}.mp4`,
      `portfolio-video-${ranVideos[2]}.mp4`,
    ],
  ];
  let carousel = document.getElementById("sliderRender");
  carousel.innerHTML = "";
  for (let i = 0; i < carouselItems[0].length; i++) {
    carousel.innerHTML += `<div class="carousel-item ${
      i == 0 ? "active" : null
    }">
                            <div
                              class="slider-text d-flex justify-content-center h-100 position-absolute align-items-center"
                            >
                              <div class="text-inner">
                                <h1 class="text-white primary-font display-1 mb-3">
                                 ${carouselItems[0][i]}<span> ent.</span>
                                </h1>
                                <p class="secondary-font text-white btn-wrap mt-4">
                                  <a href="portfolio.html" class="primary-btn primary-font">  ${
                                    carouselItems[1][i]
                                  } </a>
                                </p>
                              </div>
                            </div>

                            <video
                              src="img/${carouselItems[2][i]}"
                              class="d-block w-100"
                              muted
                              autoplay
                              loop
                            ></video>
                          </div>`;
  }
}
function featuresRender() {
  let features = document.getElementById("features-wrap");

  let featuresInfo = [
    [
      "ph:video-camera-fill",
      "fa6-solid:photo-film",
      "ic:round-camera",
      "el:film",
    ],
    [
      "Snimanje videa",
      "Korekcija boja",
      "Režiranje spotova",
      "Montiranje videa",
    ],
    [
      `Profesionalno snimanje video materijala za bilo koji tip videa.`,
      `Korekcija boja za projekte velikih dimenzija kao što su filmovi ili serije`,
      `Kreativan tim koji vam pomaže da smislite scenario za vaš spot`,
      `Montiranje i doradjivanje vašeg video materijala`,
    ],
  ];

  features.innerHTML = "";

  for (let i = 0; i < featuresInfo[0].length; i++) {
    features.innerHTML += `<div
                            class="col-lg-3 col-md-6 feature align-items-center justify-content-between d-flex my-md-0 my-sm-4 my-2"
                          >
                            <span
                              class="iconify text-white display-1"
                              data-icon="${featuresInfo[0][i]}"
                            ></span>

                            <div class="ps-4">
                              <h4 class="primary-font text-white text-uppercase my-3 mb-2">
                              ${featuresInfo[1][i]}
                              </h4>
                              <p class="secondary-font text-light-muted">
                                ${featuresInfo[2][i]}
                              </p>
                            </div>
                          </div>`;
  }
}
function brandsRender() {
  let brand = document.getElementById("brands-wrap");
  let brandsImages = [
    "partner-1.png",
    "partner-2.png",
    "partner-3.png",
    "partner-4.png",
  ];
  brand.innerHTML = "";
  for (let i = 0; i < brandsImages.length; i < i++) {
    brand.innerHTML += `<div class="col-sm-3 d-flex justify-content-center">
                          <img src="img/${brandsImages[i]}" alt="brand" class="img-fluid" />
                        </div>`;
  }
}
function aboutText() {
  let aboutInfo = [
    "slider-2.jpg",
    "portfolio-bg.jpg",
    "marker-2.png",
    "Ukratko o nama",
    `Wedia je produkcijska kuća koja se bavi izradom promo video
    materijala svake vrste. Wedia čine tim mladih ambicioznih ljudi
    koji imaju za cilj da dostave najkvaliteniji sadržaj na ovim
    prostorima. I ako postojimo svega par godina, svojim kvalitetom
    smo se brzo postavili na aktuelno tržište.`,
  ];
  let aboutToggleInfo = [
    "slider-3.jpg",
    "portfolio-img-2.jpg",
    "marker-2.png",
    "šta dalje",
    `I ako smo već napravili mnogo uspeha u našoj razvoju, ne
    planiramo da se zaustavljamo još. Angažujemo mlade ljude koji
    žele da postanu deo našeg tima i zajedno sa nama da stvaraju.
    Pošalji nam tvoj portfolio na mejl u kontaku već danas!`,
  ];

  let aboutBlockOne = document.querySelector("#aboutBlockOne");
  aboutBlockOne.innerHTML = `<div id="aboutImagesOne"
                          class="col-xl-5 offset-xl-1 col-sm-6 offset-sm-0 d-flex justify-content-center align-items-center position-relative"
                        >
                          <img
                            src="img/${aboutInfo[0]}"
                            alt="about img"
                            class="about-img-s ms-5 about-image"
                          />
                          <img
                            src="img/${aboutInfo[1]}"
                            alt="about img"
                            class="about-img-left about-image"
                          />
                          <img src="img/${aboutInfo[2]}" alt="marker" class="about-img-marker" />
                        </div>
                        <div
                          class="col-xl-5 col-sm-6 about-text-p-1 d-flex justify-content-center align-items-center"
                        >
                          <div class="w-75 my-5">
                            <h2 class="primary-font text-white h1">${aboutInfo[3]}</h2>
                            <p class="text-muted secondary-font fs-6">
                            ${aboutInfo[4]}
                            </p>
                            <p class="secondary-font text-white btn-wrap mt-5">
                              <a href="#" class="primary-btn primary-font h5" id="showAbout">
                              </a>
                            </p>
                          </div>
                        </div>`;
  let aboutBlockTwo = document.querySelector("#aboutBlockTwo");
  aboutBlockTwo.innerHTML = `<div
                          class="col-xl-5 offset-xl-1 col-sm-6 about-text-p-2 py-sm-5 py-0 d-flex justify-content-center align-items-center"
                        >
                          <div class="w-75 my-5">
                            <h2 class="primary-font text-white h1">${aboutToggleInfo[3]}</h2>
                            <p class="text-muted secondary-font fs-6">
                            ${aboutToggleInfo[4]}
                            </p>
                          </div>
                        </div>
                        <div
                          id="aboutImagesTwo"
                          class="col-xl-5 col-sm-6 offset-sm-0 d-flex justify-content-center align-items-center position-relative"
                        >
                          <img
                            src="img/${aboutToggleInfo[1]}"
                            alt="about img"
                            class="about-img-s ms-5 about-image"
                          />
                          <img
                            src="img/${aboutToggleInfo[0]}"
                            alt="about img"
                            class="about-img-right about-image"
                          />
                          <img
                            src="img/${aboutToggleInfo[2]}"
                            alt="marker"
                            class="about-img-marker flip-h"
                          />
                        </div>`;
}
function checkForm() {
  let form = document.contactForm;
  var numGreske = 0;
  let regFullName = /^[A-Z][a-z]{2,13}\s[A-Z][a-z]{2,13}$/;
  let regEmail =
    /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
  if (!regFullName.test(form.name.value)) {
    nameMistake.innerHTML = "Loše uneto ime. Primer Žarko Jović";
    numGreske++;
  } else {
    nameMistake.innerHTML = "";
  }
  if (!regEmail.test(form.email.value)) {
    emailMistake.innerHTML = "Loše unet email. Primer zarko@gmail.com";
    numGreske++;
  } else {
    emailMistake.innerHTML = "";
  }
  if (form.serviceDropdown.selectedIndex == 0) {
    testDropdownMistake.innerHTML = "Niste izabrali uslugu";
    numGreske++;
  } else {
    testDropdownMistake.innerHTML = "";
  }
  if (form.clientRadio.value == "") {
    typeMistake.innerHTML = "Niste izabrali tip lica";
    numGreske++;
  } else {
    typeMistake.innerHTML = "";
  }
  if (form.message.value == "") {
    messageMistake.innerHTML = "Morate da unesete poruku u polje";
    numGreske++;
  } else {
    messageMistake.innerHTML = "";
  }
  if (numGreske == 0) {
    let poruka = ``;
    poruka += `Puno ime : ${form.name.value} <br/>`;
    poruka += `Email : ${form.email.value} <br/>`;
    poruka += `Usluge : ${
      form.serviceDropdown.options[form.serviceDropdown.selectedIndex].value
    } <br/>`;
    poruka += `Tip lica : ${form.clientRadio.value} <br/>`;
    poruka += `Dodatne usluge : `;
    let brUs = 0;
    for (let i = 0; i < form.typeCheck.length; i++) {
      if (form.typeCheck[i].checked) {
        brUs++;
        poruka += `${form.typeCheck[i].value}`;
      }
    }
    if (brUs == 0) {
      poruka += `Nema dodatnih usluga <br/>`;
    } else {
      poruka += `<br/>`;
    }
    poruka += `Poruka : ${form.message.value}`;
    let sMessage = document.querySelector("#succesMessage");
    sMessage.innerHTML = poruka;
    sMessage.classList.add("p-2");
    setInterval(function () {
      sMessage.innerHTML = "";
      sMessage.classList.remove("p-2");
    }, 5000);
    form.reset();
  }
}

function sidenav() {
  let sideNavInfo = [
    ["index.html", "Home"],
    ["index.html#about", "About"],
    ["contact.html", "Contact"],
    ["portfolio.html", "Portfolio"],
    ["author.html", "Author"],
  ];
  let sideNavInner = ``;
  for (let i in sideNavInfo) {
    sideNavInner += `<h1 class="text-center display-1 my-4">
                        <a
                          href="${sideNavInfo[i][0]}"
                          class="text-white text-decoration-none text-uppercase primary-font"
                        >
                          ${sideNavInfo[i][1]}
                        </a>
                        <div class="underline"></div>
                      </h1>`;
  }
  sideNavWrap.innerHTML = sideNavInner;
}
function yearProjects(name) {
  let year = String(name).slice(4, 8);
  let yearFilter = document.getElementById(name);
  renderProjects(year);
}

function renderProjects(year = "all") {
  console.log(year);
  let projectsInfo = [
    [
      "portfolio-video-2.mp4",
      "Severin - demoni",
      "Video production & scenario",
      "2021",
      "https://www.youtube.com/watch?v=dPw1qwwtYSs",
    ],
    [
      "portfolio-video-6.mp4",
      "Saska hajder - Plen",
      "Video production & scenario",
      "2021",
      "https://www.youtube.com/watch?v=OBDS5iaddJ0",
    ],
    [
      "portfolio-video-1.mp4",
      "Svetozar - Mila",
      "Video production & scenario",
      "2020",
      "https://www.youtube.com/watch?v=NeNikinu4Sg",
    ],
    [
      "portfolio-video-4.mp4",
      "Nikola Milenkovic - Tra La La",
      "Video production & scenario",
      "2022",
      "https://www.youtube.com/watch?v=KfsesZmCli0",
    ],
    [
      "portfolio-video-5.mp4",
      "Svetozar - Senorita",
      "Video production & scenario",
      "2021",
      "https://www.youtube.com/watch?v=bhbU74qmO9M",
    ],
    [
      "portfolio-video-6.mp4",
      "Svetozar - Nespretni",
      "Video production & scenario",
      "2022",
      "https://www.youtube.com/watch?v=NOugeHjSD50",
    ],
  ];
  if (year != "all") {
    projectsInfo = projectsInfo.filter((elem) => elem[3] == year);
  }
  let videosWrap = document.getElementById("projects-wrap");
  videosWrap.innerHTML = "";
  videosWrap.innerHTML += '<div class="row">';
  for (let i = 0; i < projectsInfo.length; i++) {
    videosWrap.innerHTML += `<div class="col-sm-6" data-aos="fade-up">
                              <a href="${projectsInfo[i][4]}" target="_blank" class="text-decoration-none">
                                <div class="p-xl-5 p-lg-4 p-md-3 p-2 portfolio-load">
                                <video
                                    src="img/${projectsInfo[i][0]}"
                                    class="video-project w-100"
                                    muted
                                ></video>
                                <h3 class="text-white primary-font d-inline me-3">
                                    "${projectsInfo[i][1]}"
                                </h3>
                                <p class="text-light-muted secondary-font d-sm-inline d-block">
                                ${projectsInfo[i][2]}
                                </p>
                                </div>
                              </a>  
                            </div>`;
  }
  videosWrap.innerHTML += "</div>";
  videosWrap.innerHTML += `<div id="load">
    <div class="row">
    <p class="text-center" >
    <a
        href="#"
        class="text-white load-link text-center secondary-font text-decoration-none"
        >Učitaj više
    </a>
    <div class="underline-load"></div>
    </p>
  </div>
  </div>`;

  showProjects();
}
function showProjects() {
  // UZIMA SVE DIVOVE SA DATOM KLASOM
  let portfolioItems = document.querySelectorAll(".portfolio-load");
  // PRETVARA NODELIST U ARRAY
  let portfolioArray = Array.prototype.slice.call(portfolioItems);
  // NESTAJE SVAKI ELEMENT
  for (let elem of portfolioArray) {
    elem.style.display = "none";
  }
  // UZIMA PRVA DVA DA BI SE PRIKAZALA
  let x = portfolioArray.slice(0, 2);
  for (let elem of x) {
    elem.style.display = "block";
  }
  // UZIMAMO OSTATAK ELEMENATA KOJI SE NE VIDI
  let hiddenVideos = new Array();
  for (let elem of portfolioItems) {
    if (elem.style.display == "none") {
      hiddenVideos.push(elem);
    }
  }

  let loadMore = document.querySelector("#load");
  if (hiddenVideos.length == 0) {
    loadMore.style.display = "none";
  }
  // DUGME ZA UCITAVANJE JOS ELEMENATA
  loadMore.addEventListener("click", function (e) {
    // SPRECAVA DA VRATI STRANICU NA VRH
    e.preventDefault();
    //   UZIMA DVA NOVA ELEMENTA
    let newItems = hiddenVideos.slice(0, 2);
    //   IZBACUJE 2 PRVA ELEMENTA IZ NIZA PRAZNIH
    hiddenVideos.shift();
    hiddenVideos.shift();
    if (hiddenVideos.length == 0) {
      loadMore.style.display = "none";
    }
    for (let item of newItems) {
      item.style.display = "block";
    }
  });
  //   LOADED CONTENT ON PAGE
  document.addEventListener("DOMContentLoaded", function () {
    renderProjects();
  });

  // Getting video element using jQuery
  let video = document.getElementsByClassName("video-project");

  //   SVAKI VIDEO UZIMA I NA HOVER PUSTA PREVIEW
  for (x of video) {
    x.addEventListener("mouseenter", function () {
      this.play();
    });
    x.addEventListener("mouseleave", function () {
      this.pause();
      this.currentTime = 0;
    });
  }
}
function allPages() {
  renderNav();
  sidenav();
  renderFooter();
  // DEFINING ELEMENTS THAT ARE MUTUAL FOR ALL PAGES
  var overlay = document.getElementById("preloader");
  let date = new Date();
  let year = date.getFullYear();
  // GODINA U FOOTERU
  document.getElementById("year").innerHTML = year;
  // PRELOADER NESTAJE KADA SE UCITA
  window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    preloader.classList.add("opacity-0");
    function disappear() {
      preloader.classList.add("d-none");
    }
    setTimeout(disappear, 600);
  });
  // SIDENAV
  let sideNav = document.getElementById("side-nav");
  sideNav.style.display = "none";

  //   DUGME ZA TOGGLE SIDENAVA
  document
    .querySelector(".navbar-toggler")
    .addEventListener("click", toggleNavbar);

  function toggleNavbar() {
    let line1 = document.querySelector(".bl-1");
    let line2 = document.querySelector(".bl-2");
    let line3 = document.querySelector(".bl-3");
    line1.classList.toggle("rotate-1");
    line3.classList.toggle("rotate-2");
    line2.classList.toggle("translate-1");
    let sideNav = document.getElementById("side-nav");
    $("#side-nav").fadeToggle("fast", function () {
      if (sideNav.style.visibility == "visible") {
        sideNav.style.display = "flex";
      }
      let Body = document.querySelector("body");
      Body.classList.toggle("vh-100");
    });
  }
}
function indexPage() {
  carouselRender();
  featuresRender();
  brandsRender();
  aboutText();
  let aboutImages = ["aboutImagesOne", "aboutImagesTwo"];

  for (let elem of aboutImages) {
    let x = document.getElementById(elem);
    setInterval(() => {
      let src1 = x.children[0].src;
      x.children[0].src = x.children[1].src;
      x.children[1].src = src1;
    }, 3000);

    x.addEventListener("mouseenter", function () {
      let src1 = x.children[0].src;
      x.children[0].src = x.children[1].src;
      x.children[1].src = src1;
    });
  }
  let imagesUrl = [
    "portfolio-bg.jpg",
    "portfolio-img-2.jpg",
    "slider-2.jpg",
    "slider-3.jpg",
  ];
  let about_images = document.querySelectorAll(".about-image");
  for (url in imagesUrl) {
    about_images[url].src = "img/" + imagesUrl[url];
  }

  $(document).ready(function () {
    $("#about-toggle").hide();
    $("#showAbout").html("pročitaj više");
    $("#showAbout").click(function (e) {
      e.preventDefault();
      $("#about-toggle").slideToggle();
      if ($(this).html() == "pročitaj više") {
        $(this).html("pročitaj manje");
      } else {
        $(this).html("pročitaj više");
      }
    });
  });
}
function contactPage() {
  // checkForm();
  let form = document.getElementById("formSubmit");
  form.addEventListener("click", checkForm);

  let contactIcons = document.getElementById("contactIcons");

  let iconsInfo = [
    ["cil:location-pin", "carbon:phone", "la:envelope"],
    ["Miloša Pocerca 10", "069/123-4000", "office@wedia.com"],
  ];

  let con = "";

  for (let elem in iconsInfo[0]) {
    con += `<div class="my-3 icon-info">
            <span
              class="iconify h2 text-white"
              data-icon="${iconsInfo[0][elem]}"></span>
            <h5 class="primary-font text-light-muted">
              ${iconsInfo[1][elem]}
            </h5>
          </div>`;
  }

  message.addEventListener("keyup", () => {
    let c = message.value.length;
    if (c > 200) {
      message.value = message.value.substring(0, 200);
      currentEnter.classList.add("text-danger");
    } else {
      currentEnter.innerHTML = message.value.length;
      currentEnter.classList.remove("text-danger");
    }
  });
  let checkboxes = document.getElementsByName("typeCheck");
  for (let box of checkboxes) {
    box.addEventListener("change", () => {
      if (box.checked) {
        box.nextElementSibling.classList.add("text-decoration-line-through");
      } else {
        box.nextElementSibling.classList.remove("text-decoration-line-through");
      }
    });
  }
  contactIcons.innerHTML = con;
  let socialContact = document.getElementById("socialContact");
  renderSocial(socialContact);
}
function portfolioPage() {
  // LOADING IMAGES FOR SWIPER
  let swiperCarousel = document.getElementById("swiper-carousel");
  let swiperImages = [
    "portfolio-1.jpg",
    "portfolio-2.jpg",
    "portfolio-3.jpg",
    "portfolio-4.jpg",
    "portfolio-5.jpg",
    "portfolio-6.jpg",
    "portfolio-7.jpg",
    "portfolio-8.jpg",
  ];
  for (let i of swiperImages) {
    swiperCarousel.innerHTML += `<div class="swiper-slide">
                                    <img src="/img/${i}" />
                                </div>`;
  }
  swiperCarousel.innerHTML += `<div class="swiper-button-next d-sm-none d-block"></div>
    <div class="swiper-button-prev d-sm-none d-block"></div>`;
  // renderProjects("all");
  yearProjects(2020);
  let years = ["year2020", "year2021", "year2022"];
  for (let elem of years) {
    let x = document.getElementById(elem);
    x.addEventListener("click", (e) => {
      e.preventDefault();
      yearProjects(elem);
    });
  }
  let AYFilter = document.getElementById("allyears");
  AYFilter.addEventListener("click", (e) => {
    e.preventDefault();
    renderProjects("all");
  });
  AOS.init({ once: true });
  //   DEFINE SWIPER
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    pagination: false,
    coverflowEffect: {
      rotate: 0,
      stretch: 100,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
