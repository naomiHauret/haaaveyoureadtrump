import pageActions from "app/actions/page"
import aboutActions from "app/actions/about"
import burgerActions from "app/actions/burger"

export default {
  ...pageActions,
  ...aboutActions,
  ...burgerActions,
}
