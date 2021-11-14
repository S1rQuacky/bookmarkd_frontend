// JUST A NAV WITH A TITLE OR SOMETHING
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <nav className="nav">
      <Link to="/">
        <div>Bookmark APP</div>
      </Link>
    </nav>
    ) 
 
}

export default Nav