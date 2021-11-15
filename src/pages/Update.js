// THIS WILL SHOW THE LIST ITEM THAT WAS SELECTED, WITH A FORM THAT IS PRE-POPULATED WITH THE INFO FOR THE LIST ITEM
import ListItem from '../components/ListItem';
import UpdateForm from "../components/UpdateForm"
import {useState} from "react";

function Update(props) {
    console.log(props)
    const id = props.match.params.id
    const bookmark = props.bookmark
    const item = bookmark.find(p => p._id === id)
  
    // state for form
    const [editForm, setEditForm] = useState(item)
  
    // handleChange function for form
    const handleChange = event => {
      setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }
  
    // handlesubmit for form
    const handleSubmit = event => {
      event.preventDefault()
      props.updatePeople(editForm, item._id)
      // redirect people back to index
      props.history.push("/")
    }
    const removeBookmark = () => {
      props.deleteBookmark(item._id)
      props.history.push("/")
    }
  
    return (
        <>
            <ListItem item={item}  removeBookmark={removeBookmark}/>
            <UpdateForm  editForm={editForm}  handleSubmit={handleSubmit} handleChange={handleChange}/>   
       </>
    )
  }

export default Update