import { h } from "hyperapp"
import { Enter, Exit } from "@hyperapp/transitions"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import Navigation from "app/views/components/Navigation"
import Heading from "app/views/components/Heading"
import { homePageUrl, aboutPageUrl, donaldMenuPageUrl } from "app/routes"
import debounce from "lodash.debounce"

const baseFontSize = ds.get("typo.sizes.base")

export default (props, children) => {
  const { state, key } = props
  if (window.matchMedia("(min-width: 1200px)").matches && window.matchMedia("(min-height: 799px)").matches) {
    return (
      <main
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
        oncreate={(e) => e.focus()}
        onupdate={(e) => e.focus()}
      >
        <Navigation location={state.location} showGraph={state.showGraph} />
        <Enter
          easing={"ease-in-out"}
          time={550}
          css={{
            transform:
              state.location.previous === homePageUrl && state.location.pathname === homePageUrl
                ? "translateY(0)"
                : "translateY(-50%)",
          }}
        >
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
      </main>
    )
  } else {
    return (
      <main
        class={cxs({
          flexGrow: 1,
          display: "flex",
          fontFamily: ds.get("typo.fontFamily.base"),
          fontWeight: ds.get("typo.fontWeight.normal"),
          fontSize: ds.pxTo(baseFontSize, baseFontSize, "rem"),
          backgroundColor: ds.get("colors.backgrounds.dark"),
          color: ds.get("colors.texts.paragraphs.light"),
        })}
      >
        <div
          class={cxs({
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            width: ds.get("grid.width.xs"),
            padding: `0 ${ds.pxTo(20, baseFontSize, "rem")}`,
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
          <Heading level={1} brand="light" margin={`0 0 ${ds.pxTo(50, baseFontSize, "rem")} 0`}>
            Oh no !
          </Heading>
          <div
            class={cxs({
              width: ds.pxTo(200, baseFontSize, "rem"),
              height: ds.pxTo(200, baseFontSize, "rem"),
              marginBottom: ds.pxTo(30, baseFontSize, "rem"),
            })}
          >
            <svg
              class={cxs({
                width: "100%",
                height: "100%",
              })}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 503.607 503.607"
            >
              <path d="M67.148 113.311c18.466 0 33.574-15.108 33.574-33.574S85.613 46.164 67.148 46.164c-18.466 0-33.574 15.108-33.574 33.574s15.108 33.573 33.574 33.573zm0-50.36c9.233 0 16.787 7.554 16.787 16.787S76.38 96.525 67.148 96.525s-16.787-7.554-16.787-16.787 7.554-16.787 16.787-16.787zM67.148 373.508c-18.466 0-33.574 15.108-33.574 33.574s15.108 33.574 33.574 33.574c18.466 0 33.574-15.108 33.574-33.574s-15.109-33.574-33.574-33.574zm0 50.361c-9.233 0-16.787-7.554-16.787-16.787s7.554-16.787 16.787-16.787 16.787 7.554 16.787 16.787-7.555 16.787-16.787 16.787zM395.331 433.102c6.715 5.036 14.269 7.554 21.823 7.554h2.518c9.233-.839 16.787-5.036 22.662-11.751 11.751-14.269 10.072-35.252-4.197-47.003-14.269-11.751-35.252-10.072-47.003 4.197-11.75 14.268-10.072 35.252 4.197 47.003zm9.233-36.092c3.357-4.197 7.554-5.875 12.59-5.875 4.197 0 7.554.839 10.911 4.197 6.715 5.875 7.554 16.787 1.679 23.502-2.518 3.357-6.715 5.875-10.911 5.875-5.036 0-9.233-1.679-12.59-4.197-6.715-5.876-7.554-16.787-1.679-23.502z" />
              <path d="M478.426 146.885c14.269 0 25.18-10.911 25.18-25.18V37.77c0-14.269-10.911-25.18-25.18-25.18H20.144C9.233 12.59 0 21.823 0 32.734v94.007c0 7.659 4.556 14.475 11.041 17.868.224.207.457.408.71.598l197.242 170.269c.262.33.538.653.843.958.237.237.617.472 1.066.691l23.059 19.906c.318.427.668.839 1.055 1.227.274.274.736.545 1.28.79l1.03.889H20.144C9.233 339.934 0 349.167 0 360.079v94.007c0 10.911 9.233 20.144 20.144 20.144h372.752l11.668 10.072c5.036 4.197 10.911 6.715 17.626 6.715.839 0 1.679 0 1.679-.839 7.554 0 13.43-3.357 18.466-9.233l5.624-6.715h30.468c14.269 0 25.18-10.911 25.18-25.18v-84.774c0-14.269-10.911-25.18-25.18-25.18h-38.374L211.05 146.886h267.376zM16.787 32.734c0-1.679 1.679-3.357 3.357-3.357h105.757v25.18c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393v-25.18h16.787v41.967c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393V29.377h16.787v25.18c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393v-25.18h16.787v41.967c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393V29.377h16.787v25.18c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393v-25.18h16.787v41.967c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393V29.377h16.787v25.18c0 5.036 3.357 8.393 8.393 8.393 5.036 0 8.393-3.357 8.393-8.393v-25.18h16.787v41.967c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393V29.377h16.787v25.18c0 5.036 3.357 8.393 8.393 8.393 5.036 0 8.393-3.357 8.393-8.393v-25.18h16.787v41.967c0 5.036 3.357 8.393 8.393 8.393 5.036 0 8.393-3.357 8.393-8.393V29.377h33.574c5.036 0 8.393 3.357 8.393 8.393v83.934c0 5.036-3.357 8.393-8.393 8.393H20.144c-1.679 0-3.357-1.679-3.357-3.357V32.734zm3.357 424.709c-1.679 0-3.357-1.679-3.357-2.518v-94.846c0-1.679 1.679-3.357 3.357-3.357h105.757v25.18c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393v-25.18h16.787v41.967c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393v-41.967h16.787v25.18c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393v-25.18h16.787v41.967c0 5.036 3.357 8.393 8.393 8.393s8.393-3.357 8.393-8.393v-41.967h13.363l2.204 1.902c.359.51.764.999 1.22 1.455.31.31.852.62 1.495.888l111.759 96.476H20.144zm466.676-8.394c0 5.036-3.357 8.393-8.393 8.393h-15.108l23.502-28.538v20.145zm-8.394-92.328c5.036 0 8.393 3.357 8.393 8.393v13.234l-25.768-21.628h17.375zm7.554 42.807c.247 0 .415.079.538.203.206.878.033 2.013-.538 3.155l-47.843 57.075c-.468.701-.866 1.47-1.167 2.283l-7.226 8.628c-1.679 1.679-4.197 3.357-6.715 3.357s-5.875-.839-7.554-2.518l-11.581-10.004a9.803 9.803 0 0 0-1.848-2.586l-73.08-63.155 25.237-30.012c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-25.252 30.03-12.659-10.94 14.409-17.411c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-14.424 17.43-13.054-11.281 24.121-28.811c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-24.29 29.013a19.514 19.514 0 0 0-1.509-.582l-11.51-9.943 13.807-16.809c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-13.824 16.83-13.279-11.471 25.425-28.861c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-24.709 29.514-13.095-11.312 13.463-16.523c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-13.481 16.544-13.03-11.255 23.992-28.79c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-24.009 28.811-12.56-10.85 13.068-15.443c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-13.085 15.464-12.67-10.945 23.237-28.021c3.357-3.357 2.518-8.393-.839-11.751-3.357-3.357-8.393-2.518-11.751.839l-23.254 28.042-12.688-10.96 12.44-15.402c2.518-3.357 1.679-9.233-1.679-11.751-3.357-2.518-9.233-1.679-11.751 1.679l-11.985 14.267-47.609-41.126h145.207L485.98 399.528z" />
            </svg>
          </div>
          <p>
            The size of the device you are using isn't large or high enough to offer you the best experience possible on
            this website.
          </p>
          <p>
            Please, use a device that is at least <b>1200px x 800px</b>.
          </p>
        </div>
      </main>
    )
  }
}
