import { useState } from "react"
import BlogList from "./BlogList"

const Home = () => {

    // let [name, setName] = useState("John Smith")

    // const handleClick = (e) => {
    //     console.log("Hello");
    //     setName("Bob")
    //     console.log(e);
    // }

    // const handleParameterFunc = (text, e) => {
    //     console.log(text);
    //     console.log(e.target);
    // }

    const [blogs, setBlogs] = useState([
        
        { title: "blog-1", body: "loreum ipsum", author: "person-1", id: 1},
        { title: "blog-2", body: "loreum ipsum", author: "person-2", id: 2},
        { title: "blog-3", body: "loreum ipsum", author: "person-1", id: 3},
    ])

    const handleBlogDelete = (id) => {
        console.log(id);
        setBlogs(blogs.filter(blog => blog.id !== id) )
    }

    return (
        <div className="home">
            {/* <h2>Home Page</h2> */}
            {/* <h3>{ name }</h3> */}
            {/* <button onClick={handleClick}>Button</button> */}
            {/* <button onClick={(e) => handleParameterFunc("Bob", e)}>Parameter Button</button> */}

            <br />

            <BlogList blogs={ blogs } title="All blogs!" handleBlogDelete={handleBlogDelete} />
            <BlogList blogs={ blogs.filter((blog) => blog.author === 'person-1') } title="Person-1 blogs!" handleBlogDelete={handleBlogDelete}  />

        </div>
    );
}
 
export default Home;