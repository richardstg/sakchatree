import React from "react"
import { Container, Row, Col } from "reactstrap"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container className={footerStyles.navContainer}>
        <Row>
          {/* <Col xs={12} md={{ size: 4, offset: 0 }}>
            <p>Email us on contact@sakchatrimuaythai.com</p>
          </Col> */}
          <Col xs={12} md={{ size: 12, offset: 0 }}>
            <p>Photo credit: Eduardo Leal</p>
          </Col>
          <Col xs={12} md={{ size: 12, offset: 0 }}>
            <p>
              12​ Soi​ 8​ Charenmuang Road, T.​ Tasala, A. Muang​ Chiang Mai​
              50000​ Thailand
            </p>
          </Col>
          {/* <Col xs={12} md={{ size: 2, offset: 0 }}>
            <h6>Navigation</h6>
            <ul className={footerStyles.footerNav}>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/about/"
                >
                  About
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/training/"
                >
                  Training
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/contact/"
                >
                  Contact
                </Link>
              </li>
              <li className={footerStyles.footerNavItem}>
                <Link
                  className={footerStyles.footerLink}
                  activeClassName={footerStyles.activeFooterLink}
                  to="/faq/"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </Col> */}
        </Row>
        <Row>
          <Col xs={12} md={{ size: 12, offset: 0 }}>
            <p className={footerStyles.copyright}>
              &copy; Sakchatree Muay Thai 2021
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
