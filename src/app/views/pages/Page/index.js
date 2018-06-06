import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import Navigation from "app/views/components/Navigation"
import { homePageUrl, aboutPageUrl, donaldMenuPageUrl } from "app/routes"
import debounce from "lodash.debounce"

const baseFontSize = ds.get("typo.sizes.base")

export default (props, children) => {
  const { state, key } = props
  return (
    <div
      tabindex="0"
      autofocus
      key="americanPage"
      onkeyup={(e) => {
        e.preventDefault()
        if (state.showGraph === false) {
          const aboutLink = document.querySelector(`nav a[href='${aboutPageUrl}']`)
          const homeLink = document.querySelector(`nav a[href='${homePageUrl}']`)
          const menuLink = document.querySelector(`nav a[href='${donaldMenuPageUrl}']`)
          let toggleGraph
          switch (e.key) {
            case "ArrowUp":
              switch (state.location.pathname) {
                case homePageUrl:
                  menuLink.click()
                  break

                case aboutPageUrl:
                  homeLink.click()
                  break
                case donaldMenuPageUrl:
                  aboutLink.click()
                  break

                default:
                  break
              }
              break
            case "ArrowDown":
              switch (state.location.pathname) {
                case homePageUrl:
                  aboutLink.click()
                  break

                case aboutPageUrl:
                  menuLink.click()
                  break
                case donaldMenuPageUrl:
                  homeLink.click()
                  break

                default:
                  break
              }
              break
            case "ArrowRight":
              toggleGraph = document.querySelector("[data-toggle='graph']")

              if (state.location.pathname === donaldMenuPageUrl) toggleGraph.click()
              break

            default:
              break
          }
        }
      }}
      onwheel={debounce((e) => {
        e.preventDefault()
        if (state.showGraph === false) {
          const direction = e.deltaY
          const aboutLink = document.querySelector(`nav a[href='${aboutPageUrl}']`)
          const homeLink = document.querySelector(`nav a[href='${homePageUrl}']`)
          const menuLink = document.querySelector(`nav a[href='${donaldMenuPageUrl}']`)
          switch (state.location.pathname) {
            case homePageUrl:
              direction > 0 ? aboutLink.click() : menuLink.click()
              break

            case aboutPageUrl:
              direction > 0 ? menuLink.click() : homeLink.click()
              break
            case donaldMenuPageUrl:
              direction > 0 ? homeLink.click() : aboutLink.click()
              break

            default:
              break
          }
        }
      }, 150)}
      class={cxs({
        flexGrow: 1,
        display: "flex",
        fontFamily: ds.get("typo.fontFamily.base"),
        fontWeight: ds.get("typo.fontWeight.normal"),
        fontSize: ds.pxTo(baseFontSize, baseFontSize, "rem"),
        backgroundColor:
          state.location.pathname === homePageUrl
            ? ds.get("colors.backgrounds.dark")
            : state.location.pathname !== homePageUrl && state.showGraph === true
              ? "transparent"
              : ds.get("colors.backgrounds.light"),
      })}
    >
      <Enter easing={"ease-in-out"} time={550} css={{ transform: state.location.previous === homePageUrl && state.location.pathname === homePageUrl ? "translateY(0)" : "translateY(-50%)" }}>
        <div
          class={cxs({
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor:
              state.location.pathname === homePageUrl
                ? ds.get("colors.backgrounds.dark")
                : state.location.pathname !== homePageUrl && state.showGraph === true
                  ? "transparent"
                  : ds.get("colors.backgrounds.light"),
            color:
              state.location.pathname === homePageUrl || state.showGraph === true
                ? ds.get("colors.texts.paragraphs.light")
                : ds.get("colors.texts.paragraphs.dark"),
          })}
          key={key}
        >
          <div
            class={cxs({
              flexGrow: "1",
              display: "flex",
              flexDirection: "column",
              width: ds.get("grid.width.xs"),
              backgroundImage:
                state.location.pathname !== homePageUrl && state.showGraph === false
                  ? `url(${require("assets/images/content/background.png")})`
                  : "",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              "@media (min-width: 768px)": {
                width: ds.pxTo(ds.get("grid.width.sm"), baseFontSize, "rem"),
                margin: "0 auto",
              },
              "@media (min-width: 992px)": {
                width: ds.pxTo(ds.get("grid.width.md"), baseFontSize, "rem"),
              },
              "@media (min-width: 1200px)": {
                width: ds.pxTo(ds.get("grid.width.lg"), baseFontSize, "rem"),
              },
            })}
          >
            {children}
          </div>
        </div>
      </Enter>
      <Navigation location={state.location} showGraph={state.showGraph} />
    </div>
  )
}
