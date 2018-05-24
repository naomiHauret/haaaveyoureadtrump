import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import cxs from "cxs"
import { ds } from "assets/styles/theme"
import { aboutPageName, aboutMetaTitle } from "app/routes"

const baseFontSize = ds.get("typo.sizes.base")

export default () => (state, actions) => {
  const metaTitle = aboutMetaTitle
  const pageName = aboutPageName
  const key = "kabout"
  return (
    <Page state={state} actions={actions} metaTitle={aboutMetaTitle} key={key}>
      <h1>{pageName}</h1>
    </Page>
  )
}
