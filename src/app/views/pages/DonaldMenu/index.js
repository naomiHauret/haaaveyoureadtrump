import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import Heading from "app/views/components/Heading"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import { donaldMenuMetaTitle } from "app/routes"

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
        })}
      >
      <Heading level={1} brand="dark">
          The<br />Donald's menu
      </Heading>
      <div class={cxs({
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <div class={
          cxs({
            marginLeft: `${1 / 12 * 100}%`,
            width: `${4 / 12 * 100}%`,
          })
        }>
          <p>
            Reading Donald Trump is a real<br/>
            feast! See how is composed the<br/>
            most american menu possible by<br/>
            clicking on the ingredients. 
          </p>
          <p>
            Add some #MAGA over here, some<br/>
            #DrainTheSwamp over there and<br/>
            create your own Donald burger!
          </p>
        </div>
        <div class={cxs({
            marginLeft: `${2 / 12 * 100}%`,
            width: `${3 / 12 * 100}%`,
        })}>

        </div>
      </div>
      </div>
    </Page>
  )
}
