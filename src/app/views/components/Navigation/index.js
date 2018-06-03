import { h } from "hyperapp"
import { Link } from "@hyperapp/router"
import { ds } from "assets/styles/theme"
import cxs from "cxs"
import { homePageUrl, aboutPageUrl, donaldMenuPageUrl,  aboutPageName, donaldMenuPageName } from "app/routes"

export default ({ location }) => <nav>
    <ul>
        <li><Link to={homePageUrl}>Home</Link></li>
        <li><Link to={aboutPageUrl}>{aboutPageName}</Link></li>
        <li><Link to={donaldMenuPageUrl}>{donaldMenuPageName}</Link></li>
    </ul>
</nav>