// THIS WILL LOOP THROUGH ALL OF THE BOOKMARKS AND DISPLAY EACH ONE AS A LIST ITEM

import {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Update from "../pages/Update";


function List(props){
    const [bookmark, setBookmark] = useState (null);

    const URL = "https://mnr-bookmarkd.herokuapp.com/bookmarks/";

    const getBookmark = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setBookmark(data);
    };

    const createBookmark = async (item) => {
        await fetch(URL, {
            method: "post",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(item),
        });
        getBookmark();
    };

    const updateBookmark = async (item, id) => {
        // making put request to update
        await fetch(URL + id, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        })

        // update list of Bookmarks
        getBookmark()
      }

      const deleteBookmark = async id => {
        // make delete request to delete bookmark
        await fetch(URL + id, {
          method: "delete",
        })

        // update list of Bookmark
        getBookmark()
      }

    useEffect(() => getBookmark(), []);
    

    const loaded = () => {

        return (
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home bookmark={bookmark} createBookmark={createBookmark}/>
                    </Route>
                    <Route 
                        path="/bookmarks/:id" 
                        render={(rp)=>(
                            <Update 
                            {...rp}
                            bookmark={bookmark}
                            updateBookmark={updateBookmark}
                            deleteBookmark={deleteBookmark}
                            />)} 
                    />
                </Switch>
            </main>
        )
    }
    const loading = () => {
        return <h1>Loading ...</h1>
    }
    return bookmark ? loaded() : loading()
  } 
  
  export default List