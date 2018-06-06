import { h } from "hyperapp"

const homePageName = "Haaave you read Trump ?"
export const aboutPageName = "Meet Donald"
export const donaldMenuPageName = "The Donald’s menu"

export const baseUrl = "/"
export const homePageUrl = baseUrl
export const aboutPageUrl = `${baseUrl}about`
export const donaldMenuPageUrl = `${baseUrl}donaldmenu`

const baseTitle = homePageName
const titleSeparator = "|"

export const homeMetaTitle = baseTitle
export const aboutMetaTitle = `${aboutPageName} ${titleSeparator} ${baseTitle}`
export const donaldMenuMetaTitle = `${donaldMenuPageName} ${titleSeparator} ${baseTitle}`
