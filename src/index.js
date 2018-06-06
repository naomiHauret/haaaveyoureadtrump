import { h, app } from "hyperapp"
import { location } from "@hyperapp/router"
import state from "app/state"
import actions from "app/actions"
import App from "app/views"
import "assets/styles/index.css"

const images = [
  require("assets/images/content/background.png"),
  require("assets/images/content/trumpBody.png"),
  require("assets/images/content/shadows/burger.svg"),
  require("assets/images/content/shadows/trump.svg"),
  require("assets/images/animations/eyes/img_0.png"),
  require("assets/images/animations/eyes/img_1.png"),
  require("assets/images/animations/eyes/img_2.png"),
  require("assets/images/animations/eyes/img_3.png"),
  require("assets/images/animations/eyes/img_4.png"),
  require("assets/images/animations/eyes/img_5.png"),
  require("assets/images/animations/eyes/img_6.png"),
  require("assets/images/animations/hair/img_0.png"),
  require("assets/images/animations/mouth/img_0.png"),
  require("assets/images/animations/mouth/img_1.png"),
  require("assets/images/animations/mouth/img_2.png"),
  require("assets/images/animations/tie/img_0.png"),
  require("assets/images/content/burger/bacon.svg"),
  require("assets/images/content/burger/cheddar.svg"),
  require("assets/images/content/burger/drapeau.svg"),
  require("assets/images/content/burger/galette.svg"),
  require("assets/images/content/burger/ketchup.svg"),
  require("assets/images/content/burger/mayonnaise.svg"),
  require("assets/images/content/burger/oignons.svg"),
  require("assets/images/content/burger/pain_top.svg"),
  require("assets/images/content/burger/pain_bottom.svg"),
  require("assets/images/content/burger/salade.svg"),
  require("assets/images/content/burger/steak.svg"),
  require("assets/images/content/burger/tomates.svg"),
]

images.forEach((image, index) => {
  images[index] = new Image()
  images[index].src = image
})

const enhancedActions = Object.assign({}, { location: location.actions }, actions)
const view = (state, actions) => <App state={state} actions={actions} />
const main = app(state, enhancedActions, view, document.body)
const unsubscribe = location.subscribe(main.location)
