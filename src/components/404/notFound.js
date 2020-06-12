import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { ParallaxBanner } from "react-scroll-parallax"
import notFoundStyles from "./notFound.module.scss"

const NotFound = () => {
  return (
    <ParallaxBanner
      className="banner"
      layers={[
        {
          amount: 0.2,
          image: require("../../images/wrapped-hands.jpg"),
        },
      ]}
      style={{
        height: "100%",
      }}
    >
      <Container className={notFoundStyles.outerWrapper} fluid>
        <Container className={notFoundStyles.innerWrapper}>
          <Row>
            <Col
              xs={12}
              md={{ size: 8, offset: 2 }}
              className={notFoundStyles.text}
            >
              <h2 className={notFoundStyles.title}>Page not found.</h2>
              <div
                data-sal="fade"
                data-sal-delay="100"
                data-sal-duration="800"
                data-sal-easing="ease-out-bounce"
              >
                <Link to="/">
                  <button className={notFoundStyles.button}>Home</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </ParallaxBanner>
  )
}

export default NotFound
