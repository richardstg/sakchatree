import React from "react"
import { Container, Row, Col } from "reactstrap"

import fightStyles from "./fight.module.scss"
import FightImage from "../images/fight"

const Fight = () => {
  return (
    <div className={fightStyles.backgroundImage}>
      <div className={fightStyles.noise}></div>
      <div className={fightStyles.overLay}></div>
      <Container id="fight" className={fightStyles.outerWrapper} fluid>
        <Container className={fightStyles.innerWrapper}>
          <div
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease-out-bounce"
          >
            {/* <Row>
            <Col className={fightStyles.leftColumn} md={12} lg={6}>
              <div
                data-sal="fade"
                data-sal-delay="300"
                data-sal-duration="800"
                data-sal-easing="ease-out-bounce"
                className={fightStyles.image}
              >
                <FightImage />
              </div>
            </Col>
            <Col className={fightStyles.rightColumn} md={12} lg={6}> */}
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              data-sal-easing="ease-out-bounce"
            >
              <h3 className={fightStyles.title}>Fight</h3>
              <p className={fightStyles.text}>
                Many of our students are frequent fighters at stadiums and
                festival events in Chiang Mai and its neighboring cities.
              </p>
              <p className={fightStyles.text}>
                Those who wish to step into the ring are more than welcome to do
                so. We will work together with you to improve your technique and
                physique so that you get ready.
              </p>
              <p className={fightStyles.text}>
                The gym usually attends the fights together as a team to show
                support for each other.
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

export default Fight
