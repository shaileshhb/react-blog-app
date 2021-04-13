import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("person-1")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        const blog = { title, body, author }
        console.log(JSON.stringify(blog));
        setIsLoading(true)
        fetch(`http://localhost:8000/blogs`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Blog successfully added");
            setIsLoading(false)
            history.push("/")
        })
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            
            { !isLoading && 
                <form onSubmit={handleSubmit}>
                    <label>Title: </label>
                    <input type="text" placeholder="Enter blog title" 
                        value={ title } onChange={(event) => setTitle(event.target.value)} required/>

                    <label>Blog Body: </label>
                    <textarea type="text" placeholder="Enter blog body"
                        value={ body } onChange={(event) => setBody(event.target.value)} required></textarea>

                    <label>Blog Author: </label>
                    <select value={ author } onChange={(event) => setAuthor(event.target.value)}>
                        <option value="person-1">Person-1</option>
                        <option value="person-2">Person-2</option>
                        <option value="person-3">Person-3</option>
                    </select>

                    <button>Add Blog</button>
                </form>
            }

            { isLoading && <div>Ading blog...</div>}
        </div>
    );
}
 
export default Create;