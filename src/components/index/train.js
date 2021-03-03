import React from "react"
import { Container } from "reactstrap"
// import { ParallaxBanner } from "react-scroll-parallax"

import trainStyles from "./train.module.scss"
// import TrainImage from "../images/train"

const Train = () => {
  return (
    // <ParallaxBanner
    //   className="banner"
    //   layers={[
    //     {
    //       amount: 0.2,
    //       image: require("../../images/training-clinch.jpg"),
    //     },
    //   ]}
    //   style={{
    //     height: "100%",
    //   }}
    // >
    <div className={trainStyles.backgroundImage}>
      <div className={trainStyles.noise}></div>
      <div className={trainStyles.overLay}></div>
      <Container id="train" className={trainStyles.outerWrapper} fluid>
        <Container className={trainStyles.innerWrapper}>
          <div
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease-out-bounce"
          >
            {/* <Row>
              <Col className={trainStyles.leftColumn} md={12} lg={12}> */}
            {/* <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            > */}
            <h3 className={trainStyles.title}>Train</h3>
            <p className={trainStyles.text}>
              Our training session usually consists of a mixture of technique,
              cardio, strength, shadow boxing, bag work, pad work, clinch,
              sparring, and stretching. Some sessions are more concentrated on
              boxing, while others focus on the physique.
            </p>
            <p className={trainStyles.text}>
              For beginners, we emphasize the basics and learning the
              fundamental techniques. Experienced fighters are encouraged to
              develop their skills further and prepare for upcoming fights.
              Needless to say, fighting is optional.
            </p>
            <p className={trainStyles.text}>
              Training is Mon-Sat 18.00-20.00. The price is 4000 Baht per month,
              1200 Baht per week, and 200 Bath per session.
            </p>
          </div>
          {/* </Col> */}
          {/* <Col className={trainStyles.rightColumn} md={12} lg={6}>
                <div
                  data-sal="fade"
                  data-sal-delay="300"
                  data-sal-duration="800"
                  data-sal-easing="ease-out-bounce"
                  className={trainStyles.image}
                >
                  <TrainImage />
                </div>
              </Col> */}
          {/* </Row> */}
          {/* </div> */}
        </Container>
      </Container>
    </div>
    // </ParallaxBanner>
  )
}

export default Train
