import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import Heading from "app/views/components/Heading"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import { donaldMenuMetaTitle } from "app/routes"
import Burger from "app/views/components/Burger"

const baseFontSize = ds.get("typo.sizes.base")

export default () => (state, actions) => {
  const metaTitle = donaldMenuMetaTitle

  const key = "kdonaldmenu"
  return (
    <Page state={state} actions={actions} metaTitle={metaTitle} key={key}>
      <div class={cxs({ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" })}>
        <Heading level={1} brand="dark" margin={`0 0 ${ds.pxTo(100, baseFontSize, "rem")} 0`}>
          The<br />Donald's menu
        </Heading>
        <div class={cxs({ display: "flex", justifyContent: "flex-start", alignItems: "center" })}>
          <div
            class={cxs({
              marginRight: state.currentBurger.length > 0 ? `calc(${(1 / 12) * 100}% + 65px)` : 0,
              marginLeft: state.currentBurger.length > 0 ? "-65px" : `${(1 / 12) * 100}%`,
              width: state.currentBurger.length > 0 ? "auto" : `${(4 / 12) * 100}%`,
            })}
          >
            {state.currentBurger.length > 0 && (
              <Burger
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
          <div class={cxs({ marginLeft: `calc(${(3 / 12) * 100}% - 90px)`, width: `${(4 / 12) * 100}%` })}>
            <div
              class={cxs({
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                ":hover": {
                  transform: "translateY(calc(-50 % + 100px))",
                },
              })}
            >
              {state.currentBurger.length > 0 && (
                <Burger
                  unfoldBurger={state.unfoldBurger}
                  currentBurger={state.currentBurger}
                  isSelectSliceView={false}
                  isCustom={true}
                  actions={actions}
                  state={state}
                />
              )}
              {state.currentBurger.length === 0 && (
                <Burger
                  unfoldBurger={state.unfoldBurger}
                  currentBurger={state.currentBurger}
                  isSelectSliceView={false}
                  isCustom={false}
                  actions={actions}
                  state={state}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
