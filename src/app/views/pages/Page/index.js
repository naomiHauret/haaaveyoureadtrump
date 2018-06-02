import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { homePageUrl } from "app/routes"

const baseFontSize = ds.get("typo.sizes.base")

export default (props, children) => (
  <div
    key="americanPage"
    class={cxs({
      flexGrow: 1,
      display: "flex",
      fontFamily: ds.get("typo.fontFamily.base"),
      fontWeight: ds.get("typo.fontWeight.normal"),
      fontSize: ds.pxTo(baseFontSize, baseFontSize, "rem"),
    })}
  >
    <div
      class={cxs({
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor:
          props.state.location.pathname === homePageUrl
            ? ds.get("colors.backgrounds.dark")
            : props.state.location.pathname !== homePageUrl && props.state.showGraph === true
              ? "transparent"
              : ds.get("colors.backgrounds.light"),
        color:
          props.state.location.pathname === homePageUrl || props.state.showGraph === true
            ? ds.get("colors.texts.paragraphs.light")
            : ds.get("colors.texts.paragraphs.dark"),
      })}
      key={props.key}
    >
      <div
        class={cxs({
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          width: ds.get("grid.width.xs"),
          backgroundImage:
            props.state.location.pathname !== homePageUrl && props.state.showGraph === false
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
  </div>
)
