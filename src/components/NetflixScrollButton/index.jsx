import React, { useState, useContext } from "react"
import { GlobalContext } from "../../pages"
import { makeStyles } from "@material-ui/core/styles"
import { useSpring, animated } from "react-spring"
import classNames from "classnames"
import leftArrow from "../../images/icons/leftArrow.png"
import rightArrow from "../../images/icons/rightArrow.png"

const useStyles = makeStyles((theme) => ({
  netflixButton: {
    border: "2px dashed white",
    borderRadius: "3px",
    position: "absolute",
    zIndex: "10",
    cursor: "pointer",
    top: "35%",
    "@media(max-width: 550px)": {
      top: "25%",
    },
  },
  orientationLeft: {
    left: "0px",
    right: "",
  },
  orientationRight: {
    left: "",
    right: "0px",
  },
  buttonHover: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  buttonNonHover: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}))

const NetflixScrollButton = ({ orientation }) => {
  const classes = useStyles()
  const { arrowRef, setScrollLeft, scrollDistance, windowWidth } = useContext(
    GlobalContext
  )
  const [buttonHover, setButtonHover] = useState(false)
  const [buttonIsLoaded, setButtonIsLoaded] = useState(false)

  const fadeIn = useSpring({
    opacity: buttonIsLoaded ? 1 : 0,
    config: { duration: 300 },
  })

  return (
    <animated.button
      id="netflix-button"
      style={fadeIn}
      className={classNames([classes.netflixButton], {
        [classes.orientationLeft]: orientation === "left",
        [classes.orientationRight]: orientation === "right",
        [classes.buttonHover]: buttonHover,
        [classes.buttonNonHover]: !buttonHover,
      })}
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      onClick={() =>
        orientation === "left"
          ? setScrollLeft(arrowRef.current.scrollLeft - scrollDistance)
          : setScrollLeft(arrowRef.current.scrollLeft + scrollDistance)
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          id="netflix-button"
          alt="arrow-button"
          style={{
            width:
              windowWidth > 650 ? "90px" : windowWidth > 450 ? "60px" : "50px",
            verticalAlign: "middle",
          }}
          onLoad={() => setButtonIsLoaded(true)}
          src={orientation === "left" ? leftArrow : rightArrow}
        ></img>
      </div>
    </animated.button>
  )
}

export default NetflixScrollButton
