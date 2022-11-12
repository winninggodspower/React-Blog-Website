import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true);
        
        fetch('http://localhost:8000/blog', {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(blog)
        }).then(data=>{
            console.log(data);
            setIsPending(false)
            navigate('/')
        })
    }
    return (

        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Blog title: </label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                </div>

                <div className="form-group">
                    <label>Blog body: </label>
                    <textarea
                        required
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Blog author: </label>
                    <select
                        required
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                </div>

                <div className="form-group">
                    {!isPending && <button type="submit">Add Blog</button>}
                    {isPending && <button disabled type="submit">Adding Blog...</button>}
                </div>
            </form>

        </div>
    );
}

export default Create;