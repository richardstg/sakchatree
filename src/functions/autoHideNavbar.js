const autoHideNavbar = navbarId => {
  /* Auto hide the navbar when scrolling down */
  if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight
      let currentScrollPos = window.pageYOffset
      if (
        (maxScroll > 0 &&
          prevScrollpos > currentScrollPos &&
          prevScrollpos <= maxScroll) ||
        (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
        (prevScrollpos <= 0 && currentScrollPos <= 0) ||
        currentScrollPos === 0
      ) {
        document.getElementById(navbarId).style.top = "0"
      } else {
        document.getElementById(navbarId).style.top = "-5.0rem"
      }
      prevScrollpos = currentScrollPos
    }
  }
}

export default autoHideNavbar
