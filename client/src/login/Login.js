import React from 'react';

const Login = ({ handleSubmit, handleChange, error }) => (
    <div className="Login">
        <div>
            <input type="text" onChange={handleChange} placeholder="username" name="username" />
        </div>
        <div>
            <input type="password" placeholder="password" onChange={handleChange} name="password" />
        </div>
        {error ? <span style={{ "color": "red" }}>Login failed</span> : null}
        <div>
            <button onClick={handleSubmit}>Login</button>
        </div>

    </div>
);
export default Login;