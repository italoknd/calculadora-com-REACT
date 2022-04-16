import React from "react";
import './display.css'

export default props => {
  return(
    <div className="display">
      <p>{props.value}</p>
    </div>
  )
}