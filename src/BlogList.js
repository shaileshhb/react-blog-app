const BlogList = ({ blogs, title }) => {

    // const blogs = props.blogs

    // console.log(props);

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>Title: { blog.title }</h3>
                    <p>Author: { blog.author }</p>
                    {/* <button onClick={() => {
                        handleBlogDelete(blog.id)
                    }}>Delete</button> */}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;