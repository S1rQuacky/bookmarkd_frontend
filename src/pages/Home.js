import {useState} from "react";
import {Link} from "react-router-dom";
import CreateForm from "../components/CreateForm";
import Nav from "../components/Nav";

function Home (props) { 
    // state to hold formData

    const [newForm, setNewForm] = useState({
      title: "",
      url: "",
    })
  
    // handleChange function for form
    const handleChange = event => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }
  
    // handle submit function for form
    const handleSubmit = event => {
      event.preventDefault()
      props.createBookmark(newForm)
      setNewForm({
        title: "",
        url: "",
      })
    }
  
    // loaded function
    const loaded = () => {
      return props.bookmark.map(item => (
        <div key={item._id} className="item">
          <Link to={item.url}>
            <h1>{item.title}</h1>
          </Link>
        </div>
      ))
    }
  
    const loading = () => {
      return <h1>Loading...</h1>
    }
    return (
      <section>
        <CreateForm handleSubmit={handleSubmit} handleChange={handleChange} newForm={newForm}/>
        {props.bookmark ? loaded() : loading()}
      </section>
    )
  }
  


export default Home
