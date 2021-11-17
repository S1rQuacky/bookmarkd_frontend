// THIS WILL BE THE ACTUAL CARD, CONTAINING A TITLE, A LINK TO THE URL, AN EDIT BUTTON, AND A DELETE BUTTON

function ListItem(props) {
    return(
        <div className="listitem">
            <h1>{props.item.title}</h1>
            <h2>{props.item.url}</h2>
            <button id="delete" onClick={props.removeBookmark}>
            DELETE
            </button>
        </div>
        
    )
}

export default ListItem