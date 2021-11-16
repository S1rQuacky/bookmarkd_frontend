// THIS WILL BE USED FOR UPDATING EXISTING BOOKMARKS 
function UpdateForm (props){

    console.log(props)
    return(
        <div className="form">
            <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                value={props.editForm.title}
                name="title"
                placeholder="Website"
                onChange={props.handleChange}
            />
            <input
                type="text"
                value={props.editForm.url}
                name="url"
                placeholder="https://"
                onChange={props.handleChange}
            />
            
            <input type="submit" value="Update Bookmark" />
            </form>
      </div>
    )
}
export default UpdateForm