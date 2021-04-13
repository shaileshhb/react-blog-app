import useBlogsService from "./useBlogsService"
import BlogList from "./BlogList"

const Home = () => {

    // service for promise
    const { data: blogs, isLoading, error } = useBlogsService("http://localhost:8000/blogs")

    return (
        <div className="home">
            <br />
            { error && <div>{ error }</div>}
            { isLoading  && <div>Loading...</div> }
            {blogs && <BlogList blogs={ blogs } title="All blogs!" />}

        </div>
    );
}
 
export default Home;