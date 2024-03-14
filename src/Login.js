import React, {useState} from 'react'
import HomePage from './HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'   // this will call all the library of bootstrap
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const onSubmitForm = (e) => {
        e.preventDefault()

        if (!username || !password) {
            setError('Please enter both username and password')
        }
        if(username === "username" && password === 'password'){
            setIsLoggedIn(true)
            setError('')
        } else {
            const error = 'Invalid Username or Password'
            setError(error)
        }
    }


    return(
        <div className='joke-app w-100'>
            <div className='form-container d-flex flex-column justify-content-center align-items-center p-5'>
                {!isLoggedIn ? (
                    <form onSubmit={onSubmitForm} className='form d-flex flex-column justify-content-center align-items-center p-5'>
                        <h1 className='mb-4 joke-heading'>Jokes</h1>
                        <div className='d-flex flex-column justify-content-center align-items-center mb-4'>
                            <h1 className='dummy'>Username: username</h1>
                            <h1 className='dummy'>Password: password</h1>
                        </div>
                        <FloatingLabel controlId="floatingInput" label="Username" className="label inputarea">
                            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="label inputarea">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </FloatingLabel>
                        {error && <p className="error-message">{error}</p>}
                        <Button variant="outline-primary" type='submit' size='md'>Login</Button>
                    </form>
                ) : (
                    <HomePage />
                )}
            </div>
        </div>
    )
}

export default Login