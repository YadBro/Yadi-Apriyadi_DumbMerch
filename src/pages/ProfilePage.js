import NavbarPartial from '../partials/NavbarPartial';
import AbangTampan from '../assets/img/AbangTampan.png';
import my_img from '../assets/img/my-img.PNG';
import Mouse from '../assets/img/Mouse.png';
import DumbMerchLogo from '../assets/img/DumbMerch_Logo.png';
import { UserContext } from '../context/User';
import { LoginContext } from '../context/AuthenticatedContext';
import { useContext } from 'react';

export default function ProfilePage(){
    let { user } = useContext(UserContext);
    let { isLogin } = useContext(LoginContext);
    if (isLogin){
        user = JSON.parse(user);
    }
    return(
        <>
        <NavbarPartial/>
        <section id='profile'>
            <div className="d-flex content-profile mt-5 mb-5 ms-auto me-auto">
                <div style={{ width: '65%' }}>
                    <h3 className="content-title">My Profile</h3>
                    <div className="d-flex mt-5 gap-4">
                        <div className="content-image">
                            <img src={user?.name === 'Yadi Apriyadi' ? my_img : AbangTampan} alt="PhotoProfile" className="img-fluid content-profile-img" style={{ width : '338px', height: '435px' }} />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="p-1">
                                <div className="mb-4">
                                    <h4 className="biodata-title">Name</h4>
                                    <p className="biodata-main">{user?.name ? user?.name : 'Yosep'}</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="biodata-title">Email</h4>
                                    <p className="biodata-main">{user?.email ? user?.email : 'yosepgans@gmail.com'}</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="biodata-title">Phone</h4>
                                    <p className="biodata-main">083896833122</p>
                                </div>
                                <div className="mb-4">
                                    <h4 className="biodata-title">Gender</h4>
                                    <p className="biodata-main">Male</p>
                                </div>
                                <div className="mb-4" style={{ width: '350px' }}>
                                    <h4 className="biodata-title">Address</h4>
                                    <p className="biodata-main ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '45%' }}>
                    <h3 className="content-title">My Transaction</h3>
                    <div className="d-flex transaction mt-5 p-3 ps-4 w-100">
                        <div className="flex-grow-2">
                            <img className='img-fluid img-transaction' src={Mouse} alt="ProductImage" />
                        </div>
                        <div className="d-flex flex-column flex-grow-1 m-2 ms-3">
                            <h5 className='transaction-title'>Mouse</h5>
                            <h6 className='transaction-sub-title'>Saturday<small className='transaction-sub-title2'>, 14 Juli 2021</small></h6>
                            <p className='transaction-price h-75'>Price : Rp.500.000</p>
                            <h5 className='fw-bold mt-3 text-white' style={{ fontSize: '10px' }}>Sub Total : 500.000</h5>
                        </div>
                        <div className="flex-grow-2 p-3">
                            <img className='img-fluid' width='70px' height='70px' src={DumbMerchLogo} alt="DumbMerchLogo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}