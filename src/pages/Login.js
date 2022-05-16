import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DumbMerchLogo from '../assets/img/DumbMerch_Logo.png'
import { LoginContext } from '../context/AuthenticatedContext';
import { UserContext } from '../context/User';


export default function Login(){
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    let [emailInput, setEmailInput] = useState('');
    let [passwordInput, setPasswordInput] = useState('');
    const {setIsLogin} = useContext(LoginContext);
    const { setUser } = useContext(UserContext);

    function validateUser(e){
        e.preventDefault();
        const isRegistered = localStorage.getItem(emailInput);
        
        if (isRegistered !== null){
            
            const {email, password} = JSON.parse(isRegistered);
            
            if (emailInput === email && passwordInput === password){
                setIsLogin(true);
                setUser(isRegistered);
                return navigate('/');
            }else{
                return setMessage("Something went wrong to your input.");
            }
        }
        else {
            return setMessage('The email is not registered.');
        }
    }
    return (
        <section id="login">
            <div className="container text-white p-3 mt-5 width-content">
                <div className="row mt-5 mb-5 ms-auto me-auto">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column justify-content-between w-100">
                            <img src={DumbMerchLogo} className="rounded float-start mb-4" alt="DumbMerchLogo"  width='250'/>
                            <h1 className='fw-bold mb-3' style={{ fontSize: '56px' }}>Easy, Fast and Reliable</h1>
                            <p className='col-md-9' style={{ fontWeight: 400, color: '#6A6A6A', fontSize: '18px' }}>Go shopping for merchandise, just go to dumb merch shopping, the biggest merchandise in <b>Indonesia</b></p>
                            <div className="d-flex justify-content-between mt-5" style={{ width: '18rem' }}>
                                <Link to='/login' className="btn p-2 rounded me-2 w-50 submit-button">Login</Link>
                                <Link to='/register' className="btn p-2 rounded w-50" style={{ fontWeight: '800', color: '#B7B7B7' }}>Register</Link>
                            </div>
                        </div>
                        <div style={{ width: '65%' }}>
                            <div className="m-5 p-4 pt-2" style={{ backgroundColor: '#181818', borderRadius: '10px'}}>
                                <div className="d-flex flex-column">
                                    <p className='fw-bold mb-4' style={{ fontSize: '36px' }}>Login</p>
                                    <form onSubmit={validateUser}>
                                        <div className="mb-3">
                                            <input required type="email" autoComplete="true" className="form-control p-2 form-input form-login" placeholder='Email' id="email" onChange={(event)=>{
                                                setEmailInput(event.target.value);
                                                setMessage('');
                                            }}/>
                                        </div>
                                        <div className="mb-3">
                                            <input required type="password" autoComplete="true" className="form-control p-2 form-input form-password" placeholder='Password' id="password" onChange={(event)=>{
                                                setPasswordInput(event.target.value);
                                                setMessage('');
                                            }}/>
                                        </div>
                                        {message && <div className='text-danger'><p>{message}</p></div>}
                                        <button type="submit" className="btn w-100 mt-4 p-2 submit-button">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}