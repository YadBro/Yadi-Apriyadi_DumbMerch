import DumbMerchLogo from '../assets/img/DumbMerch_Logo.png';


export default function Register(){
    return (
        <section id="register">
            <div className="container text-white p-3 mt-5 width-content">
                <div className="row mt-5 mb-5 ms-auto me-auto">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column justify-content-between w-100">
                            <img src={DumbMerchLogo} className="rounded float-start mb-4" alt=""  width='250'/>
                            <h1 className='fw-bold mb-3' style={{ fontSize: '56px' }}>Easy, Fast and Reliable</h1>
                            <p className='col-md-9' style={{ fontWeight: 400, color: '#6A6A6A', fontSize: '18px' }}>Go shopping for merchandise, just go to dumb merch shopping, the biggest merchandise in <b>Indonesia</b></p>
                            <div className="d-flex justify-content-between mt-5" style={{ width: '18rem' }}>
                                <a className="btn p-2 rounded me-2 w-50 submit-button">Login</a>
                                <a className="btn p-2 rounded w-50" style={{ fontWeight: '800', color: '#B7B7B7' }}>Register</a>
                            </div>
                        </div>
                        <div style={{width: '65%'}}>
                            <div className="m-5 p-4 pt-2" style={{ backgroundColor: '#181818', borderRadius: '10px'}}>
                                <div className="d-flex flex-column">
                                    <p className='fw-bold mb-4' style={{ fontSize: '36px' }}>Register</p>
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="form-control p-2 form-input" placeholder='Name' id="name" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control p-2 form-input" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control p-2 form-input" placeholder='Password' id="exampleInputPassword1" />
                                        </div>
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