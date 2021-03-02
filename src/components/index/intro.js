import React from "react"
import { Container, Row, Col } from "reactstrap"

import introStyles from "./intro.module.scss"
import LandingPageLogoSVG from "../svg/landingPageLogoSVG"
// import { ParallaxBanner } from "react-scroll-parallax"

const Intro = () => {
  return (
    // <ParallaxBanner
    //   className="banner"
    //   layers={[
    //     {
    //       amount: 0.2,
    //       image: require("../../images/fight-corner.jpg"),
    //     },
    //   ]}
    //   style={{
    //     height: "100%",
    //     // transform: "skew(0deg, -2deg)",
    //     // top: "-55px",
    //     // webkitClipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
    //     // clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
    //   }}
    // >
    <div className={introStyles.backgroundImage}>
      <div className={introStyles.noise}></div>
      <div className={introStyles.overLay}></div>
      <Container id="intro" className={introStyles.outerWrapper} fluid>
        <Container className={introStyles.innerWrapper}>
          <div
            data-sal="fade"
            data-sal-delay="300"
            data-sal-duration="1200"
            data-sal-easing="ease-in-back"
          >
            <h1 className={introStyles.title}>SAKCHATREE MUAY THAI</h1>
          </div>
          {/* <div
              data-sal="fade"
              data-sal-delay="400"
              data-sal-duration="1100"
              data-sal-easing="ease-in-back"
            >
              <h2 className={introStyles.subTitle}>...</h2>
              <hr className={introStyles.hr} />
            </div> */}
          {/* <div
                data-sal="slide-down"
                data-sal-delay="300"
                data-sal-duration="1200"
                data-sal-easing="ease-in-back"
              >
                <p className={introStyles.text}>
                  Consectetur ad fugiat ipsum fugiat ipsum ex sint deserunt. Do
                  velit duis reprehenderit pariatur sunt Lorem est ea ea
                  adipisicing. Quis dolore et eu deserunt proident sit. Ut
                  voluptate labore id cillum magna commodo non cupidatat. Enim
                  mollit et quis deserunt dolore reprehenderit.
                </p>
              </div> */}
        </Container>
      </Container>
    </div>
    // </ParallaxBanner>
  )
}

// const Intro = () => {
//   return (
//     <Container id="intro" className={introStyles.outerWrapper} fluid>
//       <Container className={introStyles.innerWrapper}>
//         {/* <AboutImage /> */}
//         <Row>
//           <Col className={introStyles.leftColumn} xs={12} md={8}>
//             <div
//               data-sal="slide-up"
//               data-sal-delay="300"
//               data-sal-duration="1200"
//               data-sal-easing="ease-in-back"
//             >
//               <h1 className={introStyles.title}>Sakchatri Muay Thai</h1>
//             </div>
//             {/* <div
//               data-sal="fade"
//               data-sal-delay="400"
//               data-sal-duration="1100"
//               data-sal-easing="ease-in-back"
//             >
//               <h2 className={introStyles.subTitle}>...</h2>
//               <hr className={introStyles.hr} />
//             </div> */}
//             <div
//               data-sal="slide-down"
//               data-sal-delay="300"
//               data-sal-duration="1200"
//               data-sal-easing="ease-in-back"
//             >
//               <p className={introStyles.text}>
//                 Consectetur ad fugiat ipsum fugiat ipsum ex sint deserunt. Do
//                 velit duis reprehenderit pariatur sunt Lorem est ea ea
//                 adipisicing. Quis dolore et eu deserunt proident sit. Ut
//                 voluptate labore id cillum magna commodo non cupidatat. Enim
//                 mollit et quis deserunt dolore reprehenderit. Pariatur labore
//                 non nulla dolore fugiat magna dolore proident voluptate magna
//                 pariatur. Ea Lorem dolore tempor ex amet excepteur nostrud eu
//                 voluptate proident fugiat tempor ut ex.
//               </p>
//             </div>
//           </Col>
//           <Col className={introStyles.rightColumn} xs={12} md={4}>
//             <div
//               data-sal="fade"
//               data-sal-delay="100"
//               data-sal-duration="800"
//               data-sal-easing="ease-out-bounce"
//             >
//               <LandingPageLogoSVG />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   )
// }

export default Intro
