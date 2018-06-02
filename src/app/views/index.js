import { h } from "hyperapp"
import { Switch, Route } from "@hyperapp/router"
import { homePageUrl, aboutPageUrl, donaldMenuPageUrl } from "app/routes"
import Home from "app/views/pages/Home"
import About from "app/views/pages/About"
import DonaldMenu from "app/views/pages/DonaldMenu"
import NotFound from "app/views/pages/NotFound"

export default ({ state, actions, match }) => {
  return (
    <Switch>
      <Route render={Home} path={homePageUrl} />
      <Route render={About} path={aboutPageUrl} />
      <Route render={DonaldMenu} path={donaldMenuPageUrl} />
      <Route render={NotFound} />
    </Switch>
  )
}
