// JUST A NAV WITH A TITLE OR SOMETHING
import {Link} from "react-router-dom";
import {Title} from "../styles"

function Nav(props) {
    return (
        <div className="nav">
          <Link to="/">
            <h1>Bookmarks</h1>
          </Link>
        </div>
    ) 
 
}

export default Nav