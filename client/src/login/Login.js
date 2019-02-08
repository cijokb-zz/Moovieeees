//@flow
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type FunctionType = () => void;

// const Login = ({ handleSubmit, handleChange, error }: { handleSubmit: FunctionType, handleChange: FunctionType, error: boolean }) => (
//     <div className="Login">
//         <div>
//             <input type="text" onChange={handleChange} placeholder="username" name="username" />
//         </div>
//         <div>
//             <input type="password" placeholder="password" onChange={handleChange} name="password" />
//         </div>
//         {error ? <span style={{ "color": "red" }}>Login failed</span> : null}
//         <div>
//             <button onClick={handleSubmit}>Login</button>
//         </div>

//     </div>
// );

const Login = ({ handleSubmit, handleChange, error }: { handleSubmit: FunctionType, handleChange: FunctionType, error: boolean }) => (
    <section style={{ maxWidth: "360px", margin: "auto" }}>
        <Form>
            <Form.Group controlId="formUserName">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter user name" onChange={handleChange} name="username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" />
            </Form.Group>
            {error ? <div style={{ "color": "red" }}>Login failed</div> : null}
            <Button variant="primary" type="button" onClick={handleSubmit}>
                Login
  </Button>
        </Form>
    </section >);
export default Login;