// THIS WILL BE THE ACTUAL CARD, CONTAINING A TITLE, A LINK TO THE URL, AN EDIT BUTTON, AND A DELETE BUTTON
import { Link } from "react-router-dom"

function ListItem(props) {
    return(
        <div>
            <Link to={props.link}><h1>{props.title}</h1></Link>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default ListItem