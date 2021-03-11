import React from "react"
import { Container } from "reactstrap"

import findStyles from "./find.module.scss"

const Find = () => {
  return (
    <div className={findStyles.backgroundImage}>
      <div className={findStyles.noise}></div>
      <div className={findStyles.overLay}></div>
      <Container id="find" className={findStyles.outerWrapper} fluid>
        <Container className={findStyles.innerWrapper}>
          <div
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="800"
            data-sal-easing="ease-out-bounce"
          >
            <h2 className={findStyles.title}>Find Us</h2>
            <p className={findStyles.text}>
              The gym is on the east side of Chiang Mai at 12​ Soi​ 8​
              Charenmuang Road, T.​ Tasala, A. Muang​ Chiang Mai​ 50000​
              Thailand. It is about a five-minute bike ride from the train
              station and close to Sarasas Witaed Chiang Mai School.
            </p>
            <button className={findStyles.button}>
              <a href="https://www.google.com/maps/place/Sakchatree/@18.7826587,99.0236859,15z/data=!4m5!3m4!1s0x0:0x4a4f3057193b30d6!8m2!3d18.7826587!4d99.0236859">
                Map
              </a>
            </button>

            {/* <iframe
              title="Sakchatri Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15110.037827890736!2d99.01360025472141!3d18.775436025445845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a4f3057193b30d6!2sSakchatree!5e0!3m2!1sen!2sth!4v1592295634728!5m2!1sen!2sth"
              frameborder="0"
              allowfullscreen=""
              ariaHidden="false"
              // tabIndex="0"
              className={findStyles.map}
            ></iframe> */}
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default Find
