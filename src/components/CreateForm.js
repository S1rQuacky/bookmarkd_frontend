

const CreateForm =(props) => {
    return (
        <section>
            <h1>Add a new Bookmark</h1>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.newForm.title}
                    name="title"
                    placeholder="Website"
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    value={props.newForm.url}
                    name="url"
                    placeholder="https://"
                    onChange={props.handleChange}
                />
                
                <input type="submit" value="Add!!" />
            </form>
        
      </section>
    )
}
export default CreateForm