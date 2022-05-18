import NavbarPartial from "../partials/NavbarPartial";
import myImage from "../assets/img/my-img.PNG";
import { useContext } from "react";
import { UserContext } from "../context/User";
import { LoginContext } from "../context/AuthenticatedContext";
import { useNavigate } from "react-router-dom";
import AbangTampan from "../assets/img/AbangTampan.png";

export default function Complain(){
    let { user } = useContext(UserContext);
    let { isLogin } = useContext(LoginContext);
    const navigate = useNavigate();


    if (isLogin) {
        user = JSON.parse(user);
    }else{
        return navigate('/')
    }

    return(
        <>
            <NavbarPartial/>
            <div className="content-profile mt-5 mb-5 ms-auto me-auto text-white" id="complain">
            
                { (user?.isAdmin) ? 
                (
                <div className="d-flex" style={{ height: '80vh' }}>
                    <div id='contact' className="d-flex flex-column" style={{ width: '35%' }}>

                        {/* CONTACT NAME SIDE <start>*/}
                        <div className="d-flex mb-3">
                            <img src={AbangTampan} alt="profileImage" className="profile-message-side img-fluid" />
                            <div className="d-flex flex-column contact-name-side mt-3 ms-3">
                                <h1>{user?.name}</h1>
                                <p>Hello Admin, I Need Your Help</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <img src="https://4.bp.blogspot.com/-422B1rj4WCM/WAYkMwxaPjI/AAAAAAAAXk8/Gfy_BhKMjsIHfkbGJlnizdzq9nc9Kp7YwCLcB/s1600/boss%2Bbaby.JPG" alt="profileImage" className="profile-message-side img-fluid" />
                            <div className="d-flex flex-column contact-name-side mt-3 ms-3">
                                <h1>Bussines Man</h1>
                                <p>Hello Admi, This Problem Product to Me</p>
                            </div>
                        </div>
                        {/* CONTACT NAME SIDE <end>*/}
                        
                    </div>
                    <div className="d-flex flex-column justify-content-end" style={{ width: '65%' }}>


                        {/* CHAT USER <START>*/}
                        {/* <div className="my-2 p-2 position-relative align-self-end col-md-9 rounded-2 d-flex">
                            <div className="speech2 position-absolute"></div>
                            <p className="text-white m-auto me-4 p-2 px-3 d-inline-block rounded-2" style={{ backgroundColor: '#262626' }}>
                                Hello Admin, I need your help
                            </p>
                        </div> */}
                        {/* CHAT USER <END>*/}



                        {/* ANOTHER CHAT USER <START>*/}
                        <div className="my-2 p-2 position-relative col-md-9 rounded-2 d-flex">
                            <img src={AbangTampan}
                                alt="profileImage" className="profile-message img-fluid" />
                            <div className="speech position-absolute"></div>
                            <p className="text-white fw-lighter m-auto ms-4 p-2 px-3 d-inline-block rounded-2" style={{ backgroundColor: 'rgb(87,87,87)' }}>
                                Hello Admin, I Need Your Help
                            </p>
                        </div>
                        {/* ANOTHER CHAT USER <END>*/}

                        <form>
                            <div className="mt-4 mb-5">
                                <div className="mb-4">
                                    <input className="form-control message-input ps-4" type="text" placeholder="Send Message"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                )
                :
                (
                <div className="d-flex" style={{ height: '80vh' }}>
                    <div id='contact' className="d-flex flex-column" style={{ width: '35%' }}>

                        {/* CONTACT NAME SIDE <start>*/}
                        <div className="d-flex">
                            <img src={myImage} alt="profileImage" className="profile-message-side img-fluid" />
                            <div className="d-flex flex-column contact-name-side mt-3 ms-3">
                                <h1>Admin</h1>
                                <p>Yes, Is there anything I can help</p>
                            </div>
                        </div>
                        {/* CONTACT NAME SIDE <end>*/}
                        
                    </div>
                    <div className="d-flex flex-column justify-content-end" style={{ width: '65%' }}>


                        {/* CHAT USER <START>*/}
                        <div className="my-2 p-2 position-relative align-self-end col-md-9 rounded-2 d-flex">
                            <div className="speech2 position-absolute"></div>
                            <p className="text-white m-auto me-4 p-2 px-3 d-inline-block rounded-2" style={{ backgroundColor: '#262626' }}>
                                Hello Admin, I need your help
                            </p>
                        </div>
                        {/* CHAT USER <END>*/}



                        {/* ANOTHER CHAT USER <START>*/}
                        <div className="my-2 p-2 position-relative col-md-9 rounded-2 d-flex">
                            <img src={myImage}
                                alt="profileImage" className="profile-message img-fluid" />
                            <div className="speech position-absolute"></div>
                            <p className="text-white fw-lighter m-auto ms-4 p-2 px-3 d-inline-block rounded-2" style={{ backgroundColor: 'rgb(87,87,87)' }}>
                                Yes, Is there anything I can help ?
                            </p>
                        </div>
                        {/* ANOTHER CHAT USER <END>*/}

                        <form>
                            <div className="mt-4 mb-5">
                                <div className="mb-4">
                                    <input className="form-control message-input ps-4" type="text" placeholder="Send Message"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                )}

            </div>
        </>
    )
}