import React from 'react'
import style from "./spinner.module.css"
const Spinner = () => {
  //Component rendered when promise is in progress
  return (
      <div> <div className={style.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
   </div>
     
    );
}

export default Spinner
