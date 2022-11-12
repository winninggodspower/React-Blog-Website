import {useNavigate, useParams } from 'react-router-dom'
import UseFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isPending, error} = UseFetch(`http://localhost:8000/blog/${id}`) 

    const navigate = useNavigate()

    const handleDelete = ()=>{
        fetch(`http://localhost:8000/blog/${id}`,{
            method: 'DELETE',
        })
        .then(()=>{
            navigate('/')
        })
    }


    return ( 
        <div className='blog-list'>
            {isPending && <div>Loading ..</div>}
            {error && <div>error</div>}
            {blog && (

            <article>
                <h1>{blog.title}</h1>
                <p>written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
                            
            )}
        </div>

     );
}

export default BlogDetails;