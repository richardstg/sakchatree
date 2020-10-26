import React, { useState, useEffect, useRef } from "react"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap"
import Scrollspy from "react-scrollspy"

import Scroll from "./scroll"
import classes from "./header.module.scss"
import HeaderLogoSVG from "./svg/headerLogoSVG"
import Backdrop from "./shared/UI/Backdrop/Backdrop"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOffset, setIsOffset] = useState(null)
  const [hideNav, setHideNav] = useState(false)

  const previousScrollPosition = useRef(0)

  const toggle = () => setIsOpen(!isOpen)

  const handleOffset = () => {
    setIsOffset(window.scrollY > 0)
  }

  const handleHideNav = () => {
    if (
      previousScrollPosition.current < window.scrollY &&
      window.scrollY > 100
    ) {
      setHideNav(true)
    } else {
      setHideNav(false)
    }
    previousScrollPosition.current = window.scrollY
  }

  useEffect(() => {
    document.addEventListener("scroll", handleOffset)
    document.addEventListener("scroll", handleHideNav)
  }, [])

  return (
    <React.Fragment>
      <Navbar
        className={`${classes.navbar} ${isOffset ? classes.down : classes.up}`}
        fixed="top"
        dark
        expand="xl"
        id="navbar"
        style={{ top: `${hideNav ? "-5rem" : "0"}` }}
      >
        <Scroll type="id" element="intro">
          <a aria-label="Hem" className={classes.navbarBrand} href="!#">
            <HeaderLogoSVG className={classes.logo} />
          </a>
        </Scroll>
        <NavbarToggler
          className={`${classes.toggler} ${isOpen && classes.open}`}
          onClick={toggle}
        >
          <div className={classes.icon}></div>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Scrollspy
              items={["intro", "about", "train", "fight", "find"]}
              currentClassName={classes.activeNavLink}
              offset={-300}
            >
              <NavItem className={classes.NavItem}>
                {/* <Scroll type="id" element="intro">
                <a className={classes.navLink} href="!#">
                  Home
                </a>
              </Scroll> */}
              </NavItem>
              <NavItem className={classes.NavItem}>
                <Scroll type="id" element="about">
                  <a className={classes.navLink} href="!#">
                    About
                  </a>
                </Scroll>
              </NavItem>
              <NavItem className={classes.NavItem}>
                <Scroll type="id" element="train">
                  <a className={classes.navLink} href="!#">
                    Train
                  </a>
                </Scroll>
              </NavItem>
              <NavItem className={classes.NavItem}>
                <Scroll type="id" element="fight">
                  <a className={classes.navLink} href="!#">
                    Fight
                  </a>
                </Scroll>
              </NavItem>
              <NavItem className={classes.NavItem}>
                <Scroll type="id" element="find">
                  <a className={classes.navLink} href="!#">
                    Find Us
                  </a>
                </Scroll>
              </NavItem>
            </Scrollspy>
          </Nav>
        </Collapse>
      </Navbar>
      {isOpen && <Backdrop show onClick={() => setIsOpen(false)} />}
    </React.Fragment>
  )
}

export default Header