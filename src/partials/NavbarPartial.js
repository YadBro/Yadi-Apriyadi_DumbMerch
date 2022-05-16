import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import DumbMerchLogo from '../assets/img/DumbMerch_Logo.png';
import { LoginContext } from '../context/AuthenticatedContext';
import { UserContext } from '../context/User';
import { useContext } from 'react';


export default function NavbarPartial(){
    let {isLogin, setIsLogin} =  useContext(LoginContext);
    let {user, setUser} =  useContext(UserContext);
    if(isLogin){
        user = JSON.parse(user);
    }
    const navigate = useNavigate();
    function logOut(){
        setIsLogin(false);
        setUser({
            ...user,
            isAdmin : false
        });
        return navigate('/login');
    }
    const isActiveStyle ={
        color: '#F74D4D'
    }
    return(
        <nav className="navbar fw-bold navbar-expand-lg navbar-dark p-4" style={{ fontSize: '18px' }}>
            <div className="container-fluid">
            <Link className="navbar-brand" to='/'>
                <img src={DumbMerchLogo} alt="DumbMerch Logo" width="70" height="68.22" />
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav me-auto mb-lg-0">
                </div>
                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item dropdown me-2">
                            <a className="nav-link dropdown-toggle" href="/cart" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={solid('cart-shopping')} size='lg' />
                                <sup className="ms-1 text-white" style={{ fontSize: '15px' }}>+3</sup>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="cart">Mouse (1x)</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><span className="dropdown-item">Total Product</span></li>
                            </ul>
                        </li>
                        <li className="nav-item me-2">
                            <NavLink className="nav-link text-white" style={({isActive}) => isActive ? isActiveStyle : undefined} to="/complain">Complain</NavLink>
                        </li>
                        {user?.isAdmin &&
                        <li className="nav-item me-2">
                            <NavLink className="nav-link text-white" style={({isActive}) => isActive ? isActiveStyle : undefined} to="/category">Category</NavLink>
                        </li>
                        }
                        <li className="nav-item me-2">
                            <NavLink className="nav-link text-white" style={({isActive}) => isActive ? isActiveStyle : undefined} to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                        {
                            (isLogin) 
                            ?
                            <button className="nav-link text-white logout-button fw-bold" style={{ cursor: "pointer" }} onClick={logOut}>Logout</button>
                            :
                            <NavLink className="nav-link text-white" to="/login">Login</NavLink>
                        }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}