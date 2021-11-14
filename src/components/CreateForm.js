const CreateForm =(props) => {
    return (
        <section>
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
                
                <input type="submit" value="Create Bookmark" />
            </form>
        
      </section>
    )
}
export default CreateForm