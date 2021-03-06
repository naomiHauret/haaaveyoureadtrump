import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

import Slice from "app/views/components/Burger/Slice"

export default (props) => {
  const { unfoldBurger, currentBurger, actions, isSelectSliceView, isCustom, key, addedSlice } = props
  const PRESIDENTIAL_ELECTIONS = {
    sliceWrapperStyle: cxs({
      transform: "translateX(50%)",
      marginBottom: "-20px",
      animationName: isCustom === true ? "floatFlagSlice !important" : "",
      animationDuration: isCustom === true ? "1950ms" : "",
      animationDelay: "50ms",
      "> img": {
        transform:
          isSelectSliceView === true || (isCustom === true && currentBurger.length < 13)
            ? "translate(-35%, 10%) rotate(5deg)"
            : unfoldBurger === false
              ? "rotate(0)"
              : "rotate(5deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(50%, -50%)",
    }),
    name: "Presidential Elections",
    data: null,
    img: require("assets/images/content/burger/drapeau.svg"),
  }

  const FAKE_NEWS = {
    sliceWrapperStyle: cxs({
      zIndex: 15,
      marginTop: "-15px",
      animationDuration: isCustom === true ? "1805ms" : "",
      animationDelay: "75ms",

      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-5deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(95%, -50%)",
    }),
    name: "Fake News",
    data: null,
    img: require("assets/images/content/burger/pain_top.svg"),
  }

  const CROOKED_HILARY = {
    sliceWrapperStyle: cxs({
      transform: "translateX(5.5%)",
      marginTop: "-35px",
      animationDuration: isCustom === true ? "2425ms" : "",
      animationDelay: "125ms",
      zIndex: 10,
    }),
    sliceTextStyle: cxs({
      transform: "translate(85%, -50%)",
    }),
    name: "Crooked Hilary",
    data: null,
    img: require("assets/images/content/burger/oignons.svg"),
  }

  const GOVERNMENT = {
    sliceWrapperStyle: cxs({
      transform: "translateX(5.5%)",
      animationDuration: isCustom === true ? "2350ms" : "",
      marginTop: "-42px",
      zIndex: 9,
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(5deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(90%, -50%)",
    }),
    name: "Government",
    data: null,
    img: require("assets/images/content/burger/bacon.svg"),
  }

  const DRAIN_THE_SWAMP = {
    sliceWrapperStyle: cxs({
      transform: "translateX(9.5%)",
      animationDelay: "35ms",
      animationDuration: isCustom === true ? "2625ms" : "",
      marginTop: "-45px",
      zIndex: 8,
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-2deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(75%, -50%)",
    }),
    name: "Drain The Swamp",
    data: null,
    img: require("assets/images/content/burger/mayonnaise.svg"),
  }

  const OBAMACARE = {
    sliceWrapperStyle: cxs({
      marginTop: "-50px",
      transform: "translateX(3.5%)",
      animationDelay: "115ms",
      animationDuration: isCustom === true ? "2475ms" : "",
      zIndex: 7,
    }),
    sliceTextStyle: cxs({
      transform: "translate(90%, -50%)",
    }),
    name: "Obamacare",
    data: null,
    img: require("assets/images/content/burger/ketchup.svg"),
  }

  const ME = {
    sliceWrapperStyle: cxs({
      marginTop: "-60px",
      animationDelay: "25ms",
      animationDuration: isCustom === true ? "2565ms" : "",
      zIndex: 6,
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-1deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(90%, -50%)",
    }),
    name: "Me, Myself and I",
    data: null,
    img: require("assets/images/content/burger/steak.svg"),
  }

  const OTHER = {
    sliceWrapperStyle: cxs({
      marginTop: "-45px",
      animationDuration: isCustom === true ? "2650ms" : "",
      zIndex: 5,
      transform: "translateX(4.5%)",
      animationDelay: "85ms",
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(3deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(98.5%, -50%)",
    }),
    name: "Other",
    data: null,
    img: require("assets/images/content/burger/cheddar.svg"),
  }

  const ARMY = {
    sliceWrapperStyle: cxs({
      marginTop: "-65px",
      animationDuration: isCustom === true ? "2450ms" : "",
      animationDelay: "135ms",
      zIndex: 4,
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-2deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(103.5%, -50%)",
    }),
    name: "Army",
    data: null,
    img: require("assets/images/content/burger/galette.svg"),
  }

  const COMPANY = {
    sliceWrapperStyle: cxs({
      marginTop: "-45px",
      animationDuration: isCustom === true ? "2250ms" : "",
      animationDelay: "45ms",
      zIndex: 3,
      transform: "translateX(0.5%)",
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(4deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(90%, -50%)",
    }),
    name: "Trump Company",
    data: null,
    img: require("assets/images/content/burger/steak.svg"),
  }

  const FAMILY = {
    sliceWrapperStyle: cxs({
      animationDuration: isCustom === true ? "1950ms" : "",
      marginTop: "-28px",
      zIndex: 2,
      transform: "translateX(9.5%)",
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-1deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(92.5%, -50%)",
    }),
    name: "Family",
    data: null,
    img: require("assets/images/content/burger/tomates.svg"),
  }

  const WORLD_NEWS = {
    sliceWrapperStyle: cxs({
      animationDuration: isCustom === true ? "2055ms" : "",
      transform: "translateX(-3.5%)",
      animationDelay: "85ms",
      marginTop: "-70px",
      zIndex: 1,
    }),
    sliceTextStyle: cxs({
      transform: "translate(98.5%, -50%)",
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-2deg)",
      },
    }),
    name: "World News",
    data: null,
    img: require("assets/images/content/burger/salade.svg"),
  }

  const MAGA = {
    sliceWrapperStyle: cxs({
      animationDuration: isCustom === true ? "2175ms" : "",
      marginTop: "-75px",
      zIndex: 0,
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-4deg)",
      },
    }),
    sliceTextStyle: cxs({ transform: "translate(102.5%, -50%)" }),
    name: "MAGA",
    data: null,
    img: require("assets/images/content/burger/pain_bottom.svg"),
  }

  let slices = [
    PRESIDENTIAL_ELECTIONS,
    FAKE_NEWS,
    CROOKED_HILARY,
    GOVERNMENT,
    DRAIN_THE_SWAMP,
    OBAMACARE,
    ME,
    OTHER,
    ARMY,
    COMPANY,
    FAMILY,
    WORLD_NEWS,
    MAGA,
  ]
  let slicesNames = slices.map((slice) => slice.name)
  if (isCustom === true) {
    let actualSlicesIndex = slicesNames.map((slice) => {
      if (currentBurger.indexOf(slice) > -1) return slicesNames.indexOf(slice)
    })
    slices = slices.filter((slice, index) => actualSlicesIndex.indexOf(index) > -1 && slice)
  }
  return (
    <div
      key={key}
      class={cxs({
        transform:
          isSelectSliceView === true
            ? "scale(0.4)"
            : isCustom === true && currentBurger.length > 10 && currentBurger.length < slicesNames.length
              ? "translateY(-45px) scale(1)"
              : isCustom === true &&
                currentBurger.length <= 10 &&
                currentBurger.length < slicesNames.length &&
                currentBurger.length > 7
                ? "translateY(-55px) scale(1)"
                : isCustom === true && currentBurger.length < slicesNames.length && currentBurger.length <= 6
                  ? "translateY(5%) scale(1)"
                  : "scale(1)",
        "@media (min-height: 899px)": {
          transform:
            isSelectSliceView === true
              ? "scale(0.4)"
              : isCustom === true &&
                currentBurger.length > 10 &&
                currentBurger.length < slicesNames.length &&
                currentBurger.length > 7
                ? "translateY(-10px) scale(1)"
                : isCustom === true && currentBurger.length < slicesNames.length && currentBurger.length <= 6
                  ? "translateY(5%) scale(1)"
                  : "scale(1)",
        },
        filter: isSelectSliceView === true ? "grayscale(1)" : "grayscale(0)",
        transition: "all 550ms ease-in-out",
        ":hover": {
          "> img": {
            transform: "scale(0)",
            opacity: 0,
          },
          "> div": {
            animationName: isCustom === true ? "floatBurgerSlice" : "",
            ":first-child": {
              margin: isCustom === true && slicesNames.length === currentBurger.length ? "-130px 0 -50px 0" : 0,
              "@media (min-height: 899px)": {
                margin: 0,
              },
            },
            ":not(:first-child)": {
              paddingTop:
                currentBurger.length === slicesNames.length && isCustom === false && isSelectSliceView === false
                  ? "25px !important"
                  : isCustom === true && currentBurger.length < slicesNames.length
                    ? "25px"
                    : isSelectSliceView === true
                      ? "55px"
                      : "30px",
              "@media (min-height: 899px)": {
                paddingTop:
                  currentBurger.length === slicesNames.length && isCustom === false && isSelectSliceView === false
                    ? 0
                    : isCustom === true
                      ? "30px"
                      : isSelectSliceView === true
                        ? "55px"
                        : "45px",
              },
            },
            "> img": {
              opacity: isCustom === true ? 1 : 0.5,
            },
          },
        },
        "> div": {
          transition: "all 550ms ease-in-out",
          position: "relative",
          animationName: isCustom === true && currentBurger.length < slicesNames.length ? "floatBurgerSlice" : "",
          animationIterationCount: isCustom === true ? "infinite" : "",
          animationTimingFunction: isCustom === true ? "ease-in-out" : "",
          ":nth-child(odd)": {
            animationDirection: isCustom === true ? "alternate" : "",
          },
          ":nth-child(even)": {
            animationDirection: isCustom === true ? "alternate-reverse" : "",
          },
          ":hover": {
            animationPlayState: isCustom === true ? "paused" : "",
          },
          ":not(:first-child)": {
            paddingTop:
              isSelectSliceView === true
                ? "50px !important"
                : isCustom === true && currentBurger.length < slicesNames.length
                  ? "25px"
                  : 0,
            "@media (min-height: 899px)": {
              paddingTop:
                isSelectSliceView === true
                  ? "50px !important"
                  : isCustom === true && currentBurger.length < slicesNames.length
                    ? "35px"
                    : 0,
            },
          },
          ":nth-child(2)": {
            paddingTop: "0",
          },
          "> div": {
            pointerEvents: "none",
            transition: "all 350ms ease-in-out",
            opacity: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "100%",
            left: "50%",
          },
          "> img": {
            transition: "250ms ease-in-out all",
            opacity: isSelectSliceView === true ? 0.425 : 1,
            ":hover": {
              opacity: isSelectSliceView === true ? 0.75 : 1,
              cursor: "pointer",
              animation:
                isSelectSliceView === false ? "shakeBurgerSlice 1550ms ease-in-out infinite alternate" : "none",
              "~ div": {
                opacity: "1 !important",
              },
            },
          },
        },
      })}
      onmouseenter={() =>
        isSelectSliceView === false &&
        actions.toggleUnfoldBurger({
          value: true,
        })
      }
      onmouseleave={() => isSelectSliceView === false && actions.toggleUnfoldBurger({ value: false })}
    >
      {isSelectSliceView === false &&
        isCustom === false && (
          <img
            src={require("assets/images/content/shadows/burger.svg")}
            alt=""
            class={cxs({
              left: "-30px",
              position: "absolute",
              bottom: "30px",
              width: "220px",
              height: "235px",
              transition: "550ms ease-in-out",
            })}
          />
        )}
      {slices.map((slice) => (
        <Slice
          sliceWrapperStyle={slice.sliceWrapperStyle}
          sliceTextStyle={slice.sliceTextStyle}
          img={slice.img}
          name={slice.name}
          data={slice.data}
          isSelectSliceView={isSelectSliceView}
          isActive={currentBurger.indexOf(slice.name) > -1}
          toggleSlice={actions.toggleSlice}
          isLastAddedSlice={slice.name === addedSlice}
          isCustom={isCustom}
        />
      ))}
    </div>
  )
}
