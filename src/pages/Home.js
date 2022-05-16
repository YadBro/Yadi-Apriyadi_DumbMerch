import NavbarPartial from '../partials/NavbarPartial';
import MouseImg from '../assets/img/Mouse.png';
import KeyboardImg from '../assets/img/Keyboard.png';
import { Link } from 'react-router-dom';



export default function Home(){
    return (
        <>
        <NavbarPartial/>
            <div id="home">
                <div className='content mt-5 mb-5 ms-auto me-auto'>
                    <h3 className='content-title'>Product</h3>

                    {/* CARD PRODUCTS START */}
                    <div className="d-flex gap-3 mt-4">
                        <Link to='product-detail' className='text-decoration-none'>
                        <div className="card overflow-hidden" style={{ width: '15rem' }}>
                            <img src={MouseImg} className="card-img-top w-100" alt='ProductImage'></img>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Mouse</h5>
                                <p className="card-text mt-1">
                                    Rp.500.000
                                    <br />
                                    Stock : 600
                                </p>
                            </div>
                        </div>
                        </Link>

                        <div className="card overflow-hidden" style={{ width: '15rem' }}>
                            <img src={KeyboardImg} className="card-img-top w-100" alt='ProductImage'></img>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Keyboard</h5>
                                <p className="card-text mt-1">
                                    Rp.700.000
                                    <br />
                                    Stock : 600
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* CARD PRODUCTS END */}

                </div>
            </div>
        </>
    )
}