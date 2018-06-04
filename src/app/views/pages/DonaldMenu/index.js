import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import Heading from "app/views/components/Heading"
import TweetChart from "app/views/components/TweetChart"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import { donaldMenuMetaTitle } from "app/routes"
import Burger from "app/views/components/Burger"
import data from "assets/data/data.csv"
import anime from "animejs"

const baseFontSize = ds.get("typo.sizes.base")

export default () => (state, actions) => {
  const metaTitle = donaldMenuMetaTitle

  const key = "kdonaldmenu"
  return (
    <Page state={state} actions={actions} metaTitle={metaTitle} key={key}>
      <div
        class={cxs({
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        })}
      >
        {state.currentBurger.length > 0 && (
          <div
            class={cxs({
              position: "fixed",
              right: "8.5%",
              top: state.showGraph === true ? "12.9%" : "calc(100vh - 75px)",
              transition: "top 250ms ease-in-out",
            })}
          >
            <button
              onclick={actions.toggleGraph}
              class={cxs({
                display: "inline-flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                border: 0,
                ":focus": {
                  outline: 0,
                },
                "::after": {
                  content: "' '",
                  backgroundColor: ds.get("colors.backgrounds.dark"),
                  borderRadius: "100%",
                  width: "45px",
                  height: "45px",
                  position: "absolute",
                  zIndex: -1,
                  opacity: state.showGraph === false ? 0 : 1,
                  transform: state.showGraph === false ? "scale3d(2, 2, 1)" : "scale3d(120, 120, 1)",
                  transition: "325ms cubic-bezier(0.7,0,0.9,1) all",
                },
              })}
            >
              <img
                src={require("assets/images/icons/toggleGraphView.svg")}
                class={cxs({
                  cursor: "pointer",
                  transform: state.showGraph === true ? "rotate(45deg)" : "rotate(0)",
                  transition: "250ms ease-in-out",
                })}
              />
            </button>
          </div>
        )}
        <div class={cxs({ zIndex: 2 })}>
          <Heading level={1} brand={state.showGraph === true ? "light" : "dark"} margin={0}>
            The<br />Donald's menu
          </Heading>
        </div>
        <div
          class={cxs({
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "55vh",
            minHeight: "450px",
            maxHeight: "500px",
          })}
        >
          {state.showGraph === false && (
            <div
              class={cxs({
                marginRight: state.currentBurger.length > 0 ? `calc(${(1 / 12) * 100}% + 27px)` : 0,
                marginLeft: state.currentBurger.length > 0 ? "-65px" : `${(1 / 12) * 100}%`,
                width: state.currentBurger.length > 0 ? "auto" : `${(4 / 12) * 100}%`,
                "> p": {
                  margin: 0,
                  ":first-child": {
                    marginBottom: ds.pxTo(35, baseFontSize, "rem"),
                  },
                },
              })}
            >
              {state.currentBurger.length > 0 && (
                <Burger
                  key="selectsliceburger"
                  isSelectSliceView={true}
                  isCustom={false}
                  actions={actions}
                  unfoldBurger={state.unfoldBurger}
                  currentBurger={state.currentBurger}
                />
              )}
              {state.currentBurger.length === 0 && (
                <p>
                  Reading Donald Trump is a real<br />
                  feast! See how is composed the<br />
                  most american menu possible by<br />
                  clicking on the ingredients.
                </p>
              )}
              {state.currentBurger.length === 0 && (
                <p>
                  Add some #MAGA over here, some<br />
                  #DrainTheSwamp over there and<br />
                  create your own Donald burger!
                </p>
              )}
            </div>
          )}
          <div
            class={cxs({
              marginLeft: state.showGraph === false ? `calc(${(3 / 12) * 100}% - 90px)` : `${(1 / 12) * 100}%`,
              width: state.showGraph === false ? `${(4 / 12) * 100}%` : `${(10 / 12) * 100}%`,
            })}
          >
            <div
              class={cxs({
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: state.showGraph === false ? "auto" : "inherit",
                marginTop: state.showGraph === false ? 0 : ds.pxTo(80, baseFontSize, "rem"),
                zIndex: 2,
                ":hover": {
                  transform: "translateY(calc(-50 % + 100px))",
                },
              })}
            >
              {state.currentBurger.length > 0 &&
                state.showGraph === false && (
                  <Burger
                    key="customburger"
                    unfoldBurger={state.unfoldBurger}
                    currentBurger={state.currentBurger}
                    isSelectSliceView={false}
                    isCustom={true}
                    actions={actions}
                    state={state}
                  />
                )}
              {state.currentBurger.length === 0 &&
                state.showGraph === false && (
                  <Burger
                    key="helloburger"
                    unfoldBurger={state.unfoldBurger}
                    currentBurger={state.currentBurger}
                    isSelectSliceView={false}
                    isCustom={false}
                    actions={actions}
                    state={state}
                  />
                )}
              {state.currentBurger.length > 0 &&
                state.showGraph === true && (
                  <TweetChart
                    categories={state.currentBurger}
                    tweets={data.filter((content) => state.currentBurger.indexOf(content.categories) > -1)}
                  />
                )}
            </div>
          </div>
        </div>
        {state.currentBurger.length > 0 && (
          <div class={cxs({ zIndex: 1, pointerEvents: "none" })}>
            {() => {
              const summarize = (accumulator, currentValue) => accumulator + currentValue

              const filteredData = data.filter((content) => state.currentBurger.indexOf(content.categories) > -1)
              const displayedData = filteredData.length
              const likesData = filteredData.map((d) => d.likes).reduce(summarize)

              const retweetsData = filteredData.map((d) => d.retweets).reduce(summarize)

              const tweetsPercentage = Math.round((displayedData / data.length) * 100 * 100) / 100
              return (
                <div
                  class={cxs({
                    position: "absolute",
                    width: "100%",
                    height: "auto",
                    bottom: `${(55 / 1440) * 100}%`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    color:
                      state.showGraph === false
                        ? ds.get("colors.texts.legends.colorful")
                        : ds.get("colors.texts.legends.light"),
                  })}
                >
                  <div
                    class={cxs({
                      fontWeight: ds.get("typo.fontWeight.normal"),
                      fontFamily: ds.get("typo.fontFamily.burgerData.percentage"),
                      marginBottom: ds.pxTo(12.5, baseFontSize, "rem"),
                    })}
                  >
                    {tweetsPercentage} %
                  </div>
                  <div
                    class={cxs({
                      fontWeight: ds.get("typo.fontWeight.light"),
                      fontFamily: ds.get("typo.fontFamily.burgerData.default"),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: ds.pxTo(12.5, baseFontSize, "rem"),
                    })}
                  >
                    <div
                      class={cxs({
                        width: ds.pxTo(25, baseFontSize, "rem"),
                        marginRight: ds.pxTo(10, baseFontSize, "rem"),
                      })}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 61.5" fill="currentColor">
                        <path d="M56.9 61.1H27.3c-7.1 0-12.9-5.8-12.9-12.9V3.8h3.7v44.4c0 5.1 4.1 9.2 9.2 9.2h29.6v3.7z" />
                        <path d="M29.8 19.9L16.3 6.4 2.8 19.9.2 17.3 16.3 1.2l16.1 16.1zm43.8 39.4h-3.7V14.9c0-5.1-4.1-9.2-9.2-9.2H30.1V2h30.5c7.1 0 12.9 5.8 12.9 12.9l.1 44.4z" />
                        <path d="M71.7 61.9L55.6 45.8l2.6-2.6 13.5 13.5 13.5-13.5 2.6 2.6z" />
                      </svg>
                    </div>
                    {(retweetsData / 1000).toFixed(2)} K
                  </div>
                  <div
                    class={cxs({
                      fontWeight: ds.get("typo.fontWeight.light"),
                      fontFamily: ds.get("typo.fontFamily.burgerData.default"),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    })}
                  >
                    <div
                      class={cxs({
                        width: ds.pxTo(25, baseFontSize, "rem"),
                        marginRight: ds.pxTo(10, baseFontSize, "rem"),
                      })}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.5 78" fill="currentColor">
                        <path d="M26 .538c-15 0-25 12.3-25 26 0 12.8 7.3 24 16.2 32.7 8.9 8.8 19.6 15.3 26.9 19 .6.3 1.2.3 1.8 0 7.3-3.8 18-10.3 26.9-19 8.9-8.8 16.2-19.9 16.2-32.7 0-13.7-10-26-25-26-8.8 0-14.7 4.5-19 10.6-4.3-6.1-10.2-10.6-19-10.6zm0 4c8.6 0 13.3 4.3 17.3 11 .6.9 1.8 1.3 2.7.7.3-.2.5-.4.7-.7 4-6.7 8.7-11 17.3-11 12.8 0 21 10.2 21 22 0 11.3-6.5 21.5-15 29.8-8.2 8-18 14.2-25 17.8-7-3.7-16.8-9.8-25-17.8-8.5-8.3-15-18.5-15-29.8 0-11.8 8.2-22 21-22z" />
                      </svg>
                    </div>
                    <span>{(likesData / 1000).toFixed(2)}</span> K
                  </div>
                </div>
              )
            }}
          </div>
        )}
      </div>
    </Page>
  )
}
