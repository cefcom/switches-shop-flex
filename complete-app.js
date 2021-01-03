// testing file
// console.log("hello world")
// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// console.log(navBtn);
// console.log(links);
// add event listener
navBtn.addEventListener("click", () => {
  // console.log("hey, you clicked me");
  links.classList.toggle("show-links");
});
// ********** navbar fixed ************
const navbar = document.querySelector(".navbar");
// console.log(navbar);
window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  if (window.pageYOffset > 67) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
// console.log(scrollLinks);
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // console.log("you clicked a link");
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");
    const id = e.target.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    // console.log(element.offsetTop);
    //
    let position;
    if (navbar.classList.contains("fixed")) {
      position = element.offsetTop - 67.4;
    } else {
      position = element.offsetTop - 134.8;
    }

    // for small screens and you're on top, heights have to be subtracted (nav and top bar)
    if(window.innerWidth < 992){
      if (navbar.classList.contains("fixed")) {
        position = element.offsetTop - 67.4;
    } else {
      position = element.offsetTop-335.69-67.4;
    }
    }

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});
