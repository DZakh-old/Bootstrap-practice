(function processInnerLinkClick() {
  const links = document.querySelectorAll(".smooth-scroll-to");
  for (const link of links) {
    link.addEventListener("click", e => {
      // console.log("clicked");
      e.preventDefault();
      e.stopPropagation();
      smoothScrollTo(e.target.dataset.id);
    });
  };
})();

const smoothScrollTo = (elementId) => {
  // console.log(elementId);
  const element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
};