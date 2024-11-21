// Start effection in main section
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// End effection in main section

// selector
let sidebar = document.querySelector(".sidebar");
let fixed1 = document.querySelector(".fixed1");
// open side bar
document.querySelector("header .tab").addEventListener("click", () => {
  sidebar.classList.add("active");
  fixed1.classList.add("active");
});
// when i click outside side bar
window.addEventListener("click", (e) => {
  if (fixed1.contains(e.target)) {
    sidebar.classList.remove("active");
    fixed1.classList.remove("active");
  }
});


function scroll(itemClicked, section) {
  itemClicked.addEventListener("click", function (e) {
    e.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
}
// Selection to move and call his function
let homeSection = document.querySelector("section.home");
let aboutSection = document.querySelector("section.about");
let skillsSection = document.querySelector("section.skills");
let portfolioSection = document.querySelector("section.protofolio");
let contactSection = document.querySelector("section.contact");

let sideHome = document.querySelectorAll(".sidebar ul.allContent li a")[0];
scroll(sideHome, homeSection);

let sideAbout = document.querySelectorAll(".sidebar ul.allContent li a")[1];
scroll(sideAbout, aboutSection);

let sideSkills = document.querySelectorAll(".sidebar ul.allContent li a")[2];
scroll(sideSkills, skillsSection);

let sidePortfolio = document.querySelectorAll(".sidebar ul.allContent li a")[3];
scroll(sidePortfolio, portfolioSection);

let sideContact = document.querySelectorAll(".sidebar ul.allContent li a")[4];
scroll(sideContact, contactSection);

let goToContact = document.querySelector(".content .home button");
scroll(goToContact, contactSection);

let goToProtofolio = document.querySelector(".content .about .data button");
scroll(goToProtofolio, portfolioSection);