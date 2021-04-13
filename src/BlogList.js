import { Link } from "react-router-dom"

const BlogList = ({ blogs, title }) => {

    // const blogs = props.blogs

    // console.log(props);

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={ `/blogs/${blog.id}` }>
                        <h3>Title: { blog.title }</h3>
                        <p>Author: { blog.author }</p>
                    </Link>
                    
                    {/* <button onClick={() => {
                        handleBlogDelete(blog.id)
                    }}>Delete</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;