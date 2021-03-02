import React from "react"
import { Container, Row, Col } from "reactstrap"

import aboutStyles from "./about.module.scss"
import AboutImage from "../images/about"

const About = () => {
  return (
    <div className={aboutStyles.backgroundImage}>
      <div className={aboutStyles.noise}></div>
      <div className={aboutStyles.overLay}></div>
      <Container id="about" className={aboutStyles.outerWrapper} fluid>
        <Container className={aboutStyles.innerWrapper}>
          <div
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease-out-bounce"
          >
            {/* <Row>
            <Col className={aboutStyles.leftColumn} md={12} lg={6}>
              <div
                data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="800"
                data-sal-easing="ease-out-bounce"
                className={aboutStyles.image}
              >
                <AboutImage />
              </div>
            </Col>
            <Col className={aboutStyles.rightColumn} md={12} lg={6}> */}
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease-in-out-back"
            >
              <h3 className={aboutStyles.title}>About</h3>
              <p className={aboutStyles.text}>
                We are a family-style gym on the east side of Chiang Mai, owned
                and run by Git, former Lumpinee and Rajadamnern Champion.
              </p>
              <p className={aboutStyles.text}>
                The gym offers a local feeling with a relaxed and friendly
                atmosphere, where we treat each other like family. It does not
                matter if you have previous experience as a fighter or are a
                complete beginner. You are equally welcome.
              </p>
              <p className={aboutStyles.text}>
                Our students are primarily from Thailand, but we accept students
                from all nationalities.
              </p>
            </div>
            {/* </Col>
          </Row> */}
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default About
