import {useEffect, useState} from "react"
import {Link} from "react-router-dom"

function Home (props) {

  const [newForm, setNewForm] = useState({
    name: "",
    url: "",
    
  })

  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault()
    props.createList(newForm)
    setNewForm({
        name: "",
        url: "",
    })
  }

  // loaded function
  const loaded = () => {
    return props.list.map(li => (
      <div key={li._id} className="li">
        <Link to={li.url}>
          <h1>{li.name}</h1>
        </Link>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="web"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.url}
          name="url"
          placeholder="web URL"
          onChange={handleChange}
        />
       
        <input type="submit" value="Create Bookmark" />
      </form>
      {props.list ? loaded() : loading()}
    </section>
  )
}
export default Home