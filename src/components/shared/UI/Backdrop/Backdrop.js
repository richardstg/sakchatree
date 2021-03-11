import React from "react"

import classes from "./Backdrop.module.scss"

const Backdrop = props =>
  props.show ? (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      className={`${classes.Backdrop} ${props.error && classes.error}`}
      onClick={props.onClick}
      onKeyDown={props.onClick}
    ></div>
  ) : null

export default Backdrop
