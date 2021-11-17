

const CreateForm =(props) => {
    return (
        <section className="createform">
            <h1>Add a new Bookmark</h1>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.newForm.title}
                    name="title"
                    placeholder="Website Name"
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    value={props.newForm.url}
                    name="url"
                    placeholder="Website URL"
                    onChange={props.handleChange}
                />
                
                <input type="submit" value="Add Bookmark" />
            </form>
        
      </section>
    )
}
export default CreateForm