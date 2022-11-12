import Bloglist from "./Bloglist";
import UseFetch from "./useFetch";


const Home = () => {
    
    const {data: blog, isPending, error} = UseFetch('http://localhost:8000/blog')

    return (
        <div className="home">
            { error && <div>{error}</div> }
            {isPending && <div>loading...</div> }
            { blog && <Bloglist blogs={blog} title="All Blogs!1" /> }
        </div>
    );
}

export default Home;
