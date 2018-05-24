import { h } from "hyperapp"
import { ds } from "assets/styles/theme"
import cxs from "cxs"

export default (props, children) => {
  const { level, margin, brand } = props
  const baseFontSize = ds.get("typo.sizes.base")

  switch (level) {
    case 1:
      return (
        <h1
          class={cxs({
            color: ds.get(`colors.texts.headings[${brand}]`),
            fontSize: ds.pxTo(ds.get("typo.sizes.headings.h1"), baseFontSize, "rem"),
            fontWeight: ds.get("typo.fontWeight.black"),
            fontFamily: ds.get("typo.fontFamily.headings.h1"),
            lineHeight: ds.pxTo(ds.get("typo.sizes.lineHeight.h1"), baseFontSize, "rem"),
            textTransform: "uppercase",
            margin,
          })}
        >
          {children}
        </h1>
      )

    case 2:
      return (
        <h2
          class={cxs({
            color: ds.get(`colors.texts.headings[${brand}]`),
            fontSize: ds.pxTo(ds.get("typo.sizes.headings.h2"), baseFontSize, "rem"),
            fontWeight: ds.get("typo.fontWeight.light"),
            fontFamily: ds.get("typo.fontFamily.headings.h2"),
            lineHeight: ds.pxTo(ds.get("typo.sizes.lineHeight.h2"), baseFontSize, "rem"),
            margin,
          })}
        >
          {children}
        </h2>
      )
  }
}
