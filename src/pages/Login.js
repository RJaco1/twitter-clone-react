import React, { useState, useRef, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthContext from '../context/auth-context';

const Login = () => {

    const authCtx = useContext(AuthContext);

    const history = useHistory();
    const [error, setError] = useState('');
    const [disabledSubmit, setDisabledSubmit] = useState(false);
    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (emailRef.current.value === '') return;
        if (passRef.current.value === '') return;
        try {
            setError('');
            setDisabledSubmit(true);
            await authCtx.login(emailRef.current.value, passRef.current.value);
            history.push('/');
        } catch (error) {
            setError('Incorrect email or password');
        }
        setDisabledSubmit(false);
    }

    useEffect(() => {
        return () => {
            emailRef.current = false;
            passRef.current = false;
        }
    }, []);

    return (
        <div className="container d-flex align-items-center justify-content-center mt-3">
            <div>
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        <h3 className="card-title">Log in</h3>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form className="row" onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label htmlFor="email" className="visually-hidden">Email</label>
                                    <input type="email" ref={emailRef} required className="form-control" id="email" placeholder="email@example.com" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label htmlFor="pass" className="visually-hidden">Password</label>
                                    <input type="password" ref={passRef} required className="form-control" id="pass" placeholder="Password" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary mb-3" disabled={disabledSubmit}>Log in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card shadow p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        New to Twitter clone? <Link to="/register">Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
