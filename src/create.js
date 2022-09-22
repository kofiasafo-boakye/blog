import { useState } from "react";
import {useNavigate} from "react-router-dom"; 

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kofman');
    const [isPending, setisPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setisPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("added"); 
            setisPending(false);
            navigate("/")
        })
    }
    

    return ( 
        <div className="create">
            <h2>Create New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange = {(e) => {setTitle(e.target.value)}}
                />

                <label>Blog body: </label>
                <textarea required value={body} onChange = {(e) => {setBody(e.target.value)}}>

                </textarea>

                <label>Blog author: </label>
                <select value={author} onChange = {(e) => {setAuthor(e.target.value)}}>
                    <option value="Kofman">Kofman</option>
                    <option value="Xanthippe">Xanthippe</option>
                </select>

                {!isPending && <button>Submit</button>}
                {isPending && <button>Submitting blog</button>}

            </form>
        </div>
     );
}
 
export default Create;