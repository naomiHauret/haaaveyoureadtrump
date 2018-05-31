import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import bacon from "assets/images/content/burger/bacon.svg"
import cheddar from "assets/images/content/burger/cheddar.svg"
import drapeau from "assets/images/content/burger/drapeau.svg"
import galette from "assets/images/content/burger/galette.svg"
import ketchup from "assets/images/content/burger/ketchup.svg"
import mayonnaise from "assets/images/content/burger/mayonnaise.svg"
import oignons from "assets/images/content/burger/oignons.svg"
import painBottom from "assets/images/content/burger/pain_bottom.svg"
import painTop from "assets/images/content/burger/pain_top.svg"
import salade from "assets/images/content/burger/salade.svg"
import steak from "assets/images/content/burger/steak.svg"
import tomates from "assets/images/content/burger/tomates.svg"
import Slice from "app/views/components/Burger/Slice"

export default (props) => {
    const {
      unfoldBurger, currentBurger, actions, isSelectSliceView, isCustom
    } = props
  const PRESIDENTIAL_ELECTIONS = {
    sliceWrapperStyle: cxs({
      transform: "translateX(50%)",
      marginBottom: "-20px",
      "> img": {
        transform:
          isSelectSliceView === true
            ? "translate(-100%, -20%) rotate(5deg)"
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
    img: drapeau,
  }

  const FAKE_NEWS = {
    sliceWrapperStyle: cxs({
      zIndex: 15,
      marginTop: "-15px",
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-5deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(95%, -50%)",
    }),
    name: "Fake News",
    data: null,
    img: painTop,
  }

  const CROOKED_HILARY = {
    sliceWrapperStyle: cxs({
      transform: "translateX(5.5%)",
      marginTop: "-35px",
      zIndex: 10,
    }),
    sliceTextStyle: cxs({
      transform: "translate(85%, -50%)",
    }),
    name: "Crooked Hilary",
    data: null,
    img: oignons,
  }

  const GOVERNMENT = {
    sliceWrapperStyle: cxs({
      transform: "translateX(5.5%)",
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
    img: bacon,
  }

  const DRAIN_THE_SWAMP = {
    sliceWrapperStyle: cxs({
      transform: "translateX(9.5%)",
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
    img: mayonnaise,
  }

  const OBAMACARE = {
    sliceWrapperStyle: cxs({
      marginTop: "-50px",
      transform: "translateX(3.5%)",
      zIndex: 7,
    }),
    sliceTextStyle: cxs({
      transform: "translate(90%, -50%)",
    }),
    name: "Obamacare",
    data: null,
    img: ketchup,
  }

  const ME = {
    sliceWrapperStyle: cxs({
      marginTop: "-60px",
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
    img: steak,
  }

  const OTHER = {
    sliceWrapperStyle: cxs({
      marginTop: "-45px",
      zIndex: 5,
      transform: "translateX(4.5%)",
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(3deg)",
      },
    }),
    sliceTextStyle: cxs({
      transform: "translate(98.5%, -50%)",
    }),
    name: "Other",
    data: null,
    img: cheddar,
  }

  const ARMY = {
    sliceWrapperStyle: cxs({
      marginTop: "-65px",
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
    img: galette,
  }

  const COMPANY = {
    sliceWrapperStyle: cxs({
      marginTop: "-45px",
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
    img: steak,
  }

  const FAMILY = {
    sliceWrapperStyle: cxs({
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
    img: tomates,
  }

  const WORLD_NEWS = {
    sliceWrapperStyle: cxs({
      transform: "translateX(-3.5%)",
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
    img: salade,
  }

  const MAGA = {
    sliceWrapperStyle: cxs({
      marginTop: "-75px",
      zIndex: 0,
      "> img": {
        transform: unfoldBurger === false && isSelectSliceView === false ? "rotate(0)" : "rotate(-4deg)",
      },
    }),
    sliceTextStyle: cxs({ transform: "translate(102.5%, -50%)" }),
    name: "MAGA",
    data: null,
    img: painBottom,
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
      class={cxs({
        transform: isSelectSliceView === true ? "scale(0.4)" : "scale(1)",
        filter: isSelectSliceView === true ? "grayscale(1)" : "grayscale(0)",
        ":hover": {
          "> div": {
            ":not(:first-child)": {
              paddingTop: "45px",
            },
            ":nth-child(2)": {
              paddingTop: "0",
            },
            "> img": {
              opacity: 0.5,
            },
          },
        },
        "> div": {
          transition: "all 550ms ease-in-out",
          position: "relative",
          ":not(:first-child)": {
            paddingTop: isSelectSliceView === true ? "45px" : 0,
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
            opacity: isSelectSliceView === true ? 0.5 : 1,
            ":hover": {
              opacity: isSelectSliceView === true ? 0.75 : 1,
              cursor: "pointer",
              animation:
                isSelectSliceView === false ? "shakeBurgerSlice 1550ms ease-in-out infinite alternate" : "none",
              "~ div": {
                opacity: 1,
              },
            },
          },
        },
      })}
      onmouseenter={() => isSelectSliceView === false && actions.toggleUnfoldBurger({ value: true })}
      onmouseleave={() => isSelectSliceView === false && actions.toggleUnfoldBurger({ value: false })}
    >
      {slices.map((slice) => (
        <Slice
          sliceWrapperStyle={slice.sliceWrapperStyle}
          sliceTextStyle={slice.sliceTextStyle}
          img={slice.img}
          name={slice.name}
          data={slice.data}
          isSelectSliceView={isSelectSliceView}
          toggleSlice={actions.toggleSlice}
        />
      ))}
    </div>
  )
}
