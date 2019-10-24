(function processInnerLinkClick() {
  const links = document.querySelectorAll(".smooth-scroll-to");
  links.forEach(link => {
    link.addEventListener("click", element => {
      // console.log("clicked");
      element.preventDefault();
      element.stopPropagation();
      smoothScrollTo(element.target.dataset.id);
    });
  });
})();

const smoothScrollTo = (elementId) => {
  // console.log(elementId);
  const element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};