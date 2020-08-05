import React, { useState, useEffect } from "react"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"
import Scrollspy from "react-scrollspy"

import Scroll from "./scroll"
import headerStyles from "./header.module.scss"
import HeaderLogoSVG from "./svg/headerLogoSVG"
import autoHideNavbar from "../functions/autoHideNavbar"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOffset, setOffset] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  // Autohide the navbar when scrolling down
  autoHideNavbar("navbar")

  useEffect(() => {
    const handleOffset = () => {
      // Used to change class for navbar depending on scroll offset
      setOffset(window.scrollY > 0)
    }
    document.addEventListener("scroll", handleOffset)
  }, [])

  return (
    <Navbar
      className={isOffset ? headerStyles.navbarDown : headerStyles.navbarUp}
      fixed="top"
      dark
      expand="xl"
      id="navbar"
    >
      <Scroll type="id" element="intro">
        <a aria-label="Hem" className={headerStyles.navbarBrand} href="!#">
          <HeaderLogoSVG className={headerStyles.logo} />
        </a>
      </Scroll>
      <NavbarToggler className={headerStyles.toggler} onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Scrollspy
            items={["intro", "about", "train", "fight", "find"]}
            currentClassName={headerStyles.activeNavLink}
            offset={-300}
          >
            <NavItem className={headerStyles.NavItem}>
              <Scroll type="id" element="intro">
                <a className={headerStyles.navLink} href="!#">
                  Home
                </a>
              </Scroll>
            </NavItem>
            <NavItem className={headerStyles.NavItem}>
              <Scroll type="id" element="about">
                <a className={headerStyles.navLink} href="!#">
                  About
                </a>
              </Scroll>
            </NavItem>
            <NavItem className={headerStyles.NavItem}>
              <Scroll type="id" element="train">
                <a className={headerStyles.navLink} href="!#">
                  Train
                </a>
              </Scroll>
            </NavItem>
            <NavItem className={headerStyles.NavItem}>
              <Scroll type="id" element="fight">
                <a className={headerStyles.navLink} href="!#">
                  Fight
                </a>
              </Scroll>
            </NavItem>
            <NavItem className={headerStyles.NavItem}>
              <Scroll type="id" element="find">
                <a className={headerStyles.navLink} href="!#">
                  Find Us
                </a>
              </Scroll>
            </NavItem>
          </Scrollspy>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header

// import React, { useState, useEffect } from "react"
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"
// import Scrollspy from "react-scrollspy"

// import Scroll from "./scroll"
// import headerStyles from "./header.module.scss"
// import HeaderLogoSVG from "./svg/headerLogoSVG"

// const Header = props => {
//   const [isOffset, setOffset] = useState(false)
//   const [hide, setHide] = useState(false)
//   const [scrollPosition, setScrollPosition] = useState()
//   const [isOpen, setIsOpen] = useState(false)

//   const toggle = () => setIsOpen(!isOpen)

//   useEffect(() => {
//     const handleOffset = () => {
//       /* Used to change style of navbar depending on scroll position */
//       setOffset(window.scrollY > 0)
//     }

//     document.addEventListener("scroll", handleOffset)
//   }, [])

//   useEffect(() => {
//     const hideNavbar = () => {
//       /* Auto hide the navbar when scrolling down */
//       if (typeof window !== "undefined") {
//         const maxScroll = document.body.clientHeight - window.innerHeight
//         if (
//           (maxScroll > 0 &&
//             scrollPosition > window.pageYOffset &&
//             scrollPosition <= maxScroll) ||
//           (maxScroll <= 0 && scrollPosition > window.pageYOffset) ||
//           (scrollPosition <= 0 && window.pageYOffset <= 0) ||
//           window.pageYOffset === 0
//         ) {
//           setHide(false)
//         } else {
//           setHide(true)
//         }
//         // setScrollPosition(window.pageYOffset)
//       }
//     }

//     document.addEventListener("scroll", hideNavbar)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset)
//       // console.log(window.pageYOffset)
//       // console.log(scrollPosition)
//     }
//     document.addEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <Navbar
//       // className={offset ? headerStyles.navbarDown : headerStyles.navbarUp}
//       className={`${
//         isOffset ? headerStyles.navbarDown : headerStyles.navbarUp
//       } ${hide ? headerStyles.navbarHide : headerStyles.navbarShow}`}
//       style={{ top: `${hide ? "-5rem" : "0"}` }}
//       fixed="top"
//       dark
//       expand="xl"
//       id="navbar"
//     >
//       <Scroll type="id" element="intro">
//         <a aria-label="Hem" className={headerStyles.navbarBrand} href="!#">
//           <HeaderLogoSVG className={headerStyles.logo} />
//           {/* <p>Sakchatri Muay Thai</p> */}
//         </a>
//       </Scroll>
//       <NavbarToggler className={headerStyles.toggler} onClick={toggle} />
//       <Collapse isOpen={isOpen} navbar>
//         <Nav className="ml-auto" navbar>
//           <Scrollspy
//             items={["intro", "about", "train", "fight", "find"]}
//             currentClassName={headerStyles.activeNavLink}
//             offset={-300}
//           >
//             <NavItem className={headerStyles.NavItem}>
//               <Scroll type="id" element="intro">
//                 <a className={headerStyles.navLink} href="!#">
//                   Home
//                 </a>
//               </Scroll>
//             </NavItem>
//             <NavItem className={headerStyles.NavItem}>
//               <Scroll type="id" element="about">
//                 <a className={headerStyles.navLink} href="!#">
//                   About
//                 </a>
//               </Scroll>
//             </NavItem>
//             <NavItem className={headerStyles.NavItem}>
//               <Scroll type="id" element="train">
//                 <a className={headerStyles.navLink} href="!#">
//                   Training
//                 </a>
//               </Scroll>
//             </NavItem>
//             <NavItem className={headerStyles.NavItem}>
//               <Scroll type="id" element="fight">
//                 <a className={headerStyles.navLink} href="!#">
//                   Fighting
//                 </a>
//               </Scroll>
//             </NavItem>
//             <NavItem className={headerStyles.NavItem}>
//               <Scroll type="id" element="find">
//                 <a className={headerStyles.navLink} href="!#">
//                   Find Us
//                 </a>
//               </Scroll>
//             </NavItem>
//           </Scrollspy>
//         </Nav>
//       </Collapse>
//     </Navbar>
//   )
// }

// export default Header
