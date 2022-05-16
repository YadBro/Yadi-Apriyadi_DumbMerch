import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DumbMerchLogo from '../assets/img/DumbMerch_Logo.png';


export default function Register(){
    let [name, setName] = useState('');
    let [email, setEmail]= useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');
    const navigate = useNavigate();

    function register(e){
        e.preventDefault();
        const checkEmail = localStorage.getItem(email);

        // Check if the email is registered
        if (checkEmail !== null){
            return setMessage("Your email in input has been registered!");
        }else{
            localStorage.setItem(email, `{"name" : "${name}","email" : "${email}","password" : "${password}"}`);
            return navigate('/login');
        }
    }

    return (
        <section id="register">
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
                        <div style={{width: '65%'}}>
                            <div className="m-5 p-4 pt-2" style={{ backgroundColor: '#181818', borderRadius: '10px'}}>
                                <div className="d-flex flex-column">
                                    <p className='fw-bold mb-4' style={{ fontSize: '36px' }}>Register</p>
                                    <form onSubmit={register}>
                                        <div className="mb-3">
                                            <input onChange={(e)=>{setName(e.target.value)}} required autoComplete="true" type="text" className="form-control p-2 form-input" placeholder='Name' id="name" />
                                        </div>
                                        <div className="mb-3">
                                            <input onChange={(e)=>{
                                                setEmail(e.target.value);
                                                setMessage('');
                                                }} required autoComplete="true" type="email" className="form-control p-2 form-input" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <input onChange={(e)=>{setPassword(e.target.value)}} required autoComplete="true" type="password" className="form-control p-2 form-input" placeholder='Password' id="exampleInputPassword1" />
                                        </div>
                                        {message && <div className='text-danger'><p>{message}</p></div>}
                                        <button type="submit" className="btn w-100 mt-4 p-2 submit-button">Register</button>
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