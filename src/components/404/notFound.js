import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import notFoundStyles from "./notFound.module.scss"

const NotFound = () => {
  return (
    <div className={notFoundStyles.backgroundImage}>
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
    </div>
  )
}

export default NotFound
