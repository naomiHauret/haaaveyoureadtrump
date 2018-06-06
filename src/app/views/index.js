import { h } from "hyperapp"
import { Switch, Route } from "@hyperapp/router"
import { homePageUrl, aboutPageUrl, donaldMenuPageUrl } from "app/routes"
import Home from "app/views/pages/Home"
import About from "app/views/pages/About"
import DonaldMenu from "app/views/pages/DonaldMenu"

export default ({ state, actions, match }) => {
  return (
    <Switch>
      <Route render={Home} path={homePageUrl} />
      <Route render={About} path={aboutPageUrl} />
      <Route render={DonaldMenu} path={donaldMenuPageUrl} />
    </Switch>
  )
}
