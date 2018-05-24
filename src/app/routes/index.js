import { h } from "hyperapp"

import state from "app/state"
import actions from "app/actions"

import Home from "app/views/pages/Home"
import About from "app/views/pages/About"
import DonaldMenu from "app/views/pages/DonaldMenu"
import NotFound from "app/views/pages/NotFound"

export const homePageName = "Haaave you read Trump ?"
export const aboutPageName = "Meet Donald"
export const donaldMenuPageName = "The Donald’s menu"
export const notFoundPageName = "You just hit a wall..."

export const baseUrl = "/"
export const homePageUrl = baseUrl
export const aboutPageUrl = `${baseUrl}about`
export const donaldMenuPageUrl = `${baseUrl}donaldmenu`

const baseTitle = homePageName
const titleSeparator = "|"

export const homeMetaTitle = baseTitle
export const aboutMetaTitle = `${aboutPageName} ${titleSeparator} ${baseTitle}`
export const donaldMenuMetaTitle = `${donaldMenuPageName} ${titleSeparator} ${baseTitle}`
export const notFoundMetaTitle = `${notFoundPageName} ${titleSeparator} ${baseTitle}`
