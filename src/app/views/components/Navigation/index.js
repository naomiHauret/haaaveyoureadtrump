import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { homePageUrl, aboutPageUrl, donaldMenuPageUrl, aboutPageName, donaldMenuPageName } from "app/routes"
const baseFontSize = ds.get("typo.sizes.base")

export default ({ location, showGraph }) => (
  <nav
    class={cxs({
      position: "absolute",
      zIndex: location.pathname === homePageUrl ? -1 : showGraph === true ? 0 : 2,
      right: ds.pxTo(65, baseFontSize, "rem"),
      top: "50%",
      transform: "translateY(-50%)",
      opacity: location.pathname === homePageUrl ? 0 : 1,
    })}
  >
    <ul
      class={cxs({
        listStyle: "none",
        margin: 0,
        padding: 0,
        "> li:not(:last-child)": {
          marginBottom: ds.pxTo(25, baseFontSize, "rem"),
        },
        "> li span": {
          display: "none",
        },
        "> li a": {
          display: "block",
          width: ds.pxTo(10, baseFontSize, "rem"),
          height: ds.pxTo(10, baseFontSize, "rem"),
          borderWidth: ds.pxTo(1, baseFontSize, "rem"),
          borderRadius: "100%",
          borderStyle: "solid",
        },
      })}
    >
      <li>
        <Link
          to={homePageUrl}
          class={cxs({
            borderColor:
              location.pathname === homePageUrl ? ds.get("colors.texts.navigation") : ds.get("colors.americanDarkGrey"),
            backgroundColor: location.pathname === homePageUrl ? ds.get("colors.texts.navigation") : "transparent",
          })}
        >
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          to={aboutPageUrl}
          class={cxs({
            borderColor:
              location.pathname === aboutPageUrl
                ? ds.get("colors.texts.navigation")
                : ds.get("colors.americanDarkGrey"),
            backgroundColor: location.pathname === aboutPageUrl ? ds.get("colors.texts.navigation") : "transparent",
          })}
        >
          <span>{aboutPageName}</span>
        </Link>
      </li>
      <li>
        <Link
          to={donaldMenuPageUrl}
          class={cxs({
            borderColor:
              location.pathname === donaldMenuPageUrl
                ? ds.get("colors.texts.navigation")
                : ds.get("colors.americanDarkGrey"),

            backgroundColor:
              location.pathname === donaldMenuPageUrl ? ds.get("colors.texts.navigation") : "transparent",
          })}
        >
          <span>{donaldMenuPageName}</span>
        </Link>
      </li>
    </ul>
  </nav>
)
