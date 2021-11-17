import {useState} from "react";
import CreateForm from "../components/CreateForm";
import {Main} from "../styles";
import {Link} from "react-router-dom"


function Home (props) { 
    // state to hold formData

    const [newForm, setNewForm] = useState({
      title: "",
      url: "https://",
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
         return (
         <div className="container"> {props.bookmark.map(item => (
        <div key={item._id} className="item">
          <a href={item.url} target="_blank" className="link">
            <h1>{item.title}</h1>
          </a>
          <Link href={`/bookmarks/${item._id}`} className="update">Update</Link>
        </div>
        
         ))}
      </div>
         )}
  
    const loading = () => {
      return <h1>Loading...</h1>
    }

    return (
      <Main>
        <CreateForm handleSubmit={handleSubmit} handleChange={handleChange} newForm={newForm}/>
        {props.bookmark ? loaded() : loading()}
      </Main>
    )
  }
  


export default Home
