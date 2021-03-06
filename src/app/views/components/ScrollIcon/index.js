import { h } from "hyperapp"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import { pxTo } from "design-system-utils"
import { Link } from "@hyperapp/router"

const baseFontSize = ds.get("typo.sizes.base")

export default (props) => {
  const { next } = props
  return (
    <div
      class={cxs({
        width: pxTo(40, baseFontSize, "rem"),
        height: pxTo(40, baseFontSize, "rem"),
        margin: "auto",
      })}
    >
      <Link to={next} class={cxs({ color: "inherit" })}>
        <svg
          class={cxs({
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            "> circle": { animation: "iconScrollMotion 2650ms ease-in-out infinite" },
          })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.75 62.5"
        >
          <rect
            x="1.97"
            y="1.93"
            width="36.78"
            height="58.85"
            rx="18.39"
            ry="18.39"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <circle cx="20.36" cy="21.18" r="2.08" fill="currentColor" />
        </svg>
      </Link>
    </div>
  )
}
