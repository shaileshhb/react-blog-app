import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom"
import useBlogsService from "./useBlogsService"

const BlogDetails = () => {
    // get id from params
    const { id } = useParams()
    const history = useHistory()

    const { data: blog, isLoading, error } = useBlogsService(`http://localhost:8000/blogs/${id}`)

    const handleDelete = () => {

        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Blog deleted");
            history.push("/")
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{ error }</div>}
            { isLoading  && <div>Loading...</div> }
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Author: { blog.author }</p>
                    <div>body: {blog.body }</div>
                    <button onClick={ handleDelete }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;