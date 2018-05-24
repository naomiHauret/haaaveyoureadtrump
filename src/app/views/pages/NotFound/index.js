import { h } from "hyperapp"
import Page from "app/views/pages/Page"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

import { notFoundPageName, notFoundMetaTitle } from "app/routes"

const baseFontSize = ds.get("typo.sizes.base")

export default () => (state, actions) => {
  const metaTitle = notFoundMetaTitle
  const pageName = notFoundPageName
  const key = "knotFound"
  return (
    <Page state={state} actions={actions} metaTitle={notFoundMetaTitle} key={key}>
      <h1>{pageName}</h1>
    </Page>
  )
}
