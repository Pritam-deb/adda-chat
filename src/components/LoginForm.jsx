import {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "443eaa57-95f6-4e88-8d93-afdcc65c9792", 'User-Name':username, 'User-Secret':password }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Incorrect credentials!');
        }
    };

    // const handleClick = () => {
    //     console.log("clicked");
    //     history.push("/signup");
    // }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Adda-Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={ username } 
                        onChange={(e) => setUsername(e.target.value)} 
                        className="input" 
                        placeholder="Username" 
                        required/>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="input" 
                    placeholder="Password" 
                    required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                        {/* <button className="button"><SignUp>Don't have an account? SignUp</SignUp> </button>  */}
                        
                    </div>
                    <h2 className="error">{error}</h2>
                    
                    <Link to="sign-up">Sign Up</Link>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default LoginForm;