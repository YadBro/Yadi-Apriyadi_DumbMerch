import { Link } from 'react-router-dom';
import NavbarPartial from '../partials/NavbarPartial';

export default function ProductList(){
    return (
        <>
        <NavbarPartial />
        <div id="listProduct" className="content mt-5 mb-5 ms-auto me-auto">
            <h4 className='text-white fw-bold mb-4'>List Product</h4>
            <table className="text-white w-100" style={{ border: '0.2px #C4C4C4' }}>
                <thead>
                    <tr>
                        <th scope="col" className='ps-3'>No</th>
                        <th scope="col" style={{ width: '15%' }}>Photo</th>
                        <th scope="col" style={{ width: '15%' }}>Product Name</th>
                        <th scope="col" style={{ width: '20%' }}>Product Decs</th>
                        <th scope="col" style={{ width: '10%' }}>Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* PRODUCT NAME */}
                    <tr>
                        <td className='ps-3'><b>1</b></td>
                        <td><Link to="mouse-img" style={{ color: '#ffffffa7' }}>Mouse.jpg</Link></td>
                        <td>Mouse</td>
                        <td>lorem ipsum mouse ...</td>
                        <td>500.000</td>
                        <td>600</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '40%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '40%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body text-black mt-3 mb-3">
                                                <h4 className='fw-bold'>Deleted Data</h4>
                                                <p>Are you sure you want to delete this data?</p>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4 gap-3" style={{ width: '95%' }}>
                                                <button type="button" className="btn edit-button" style={{ width: '25%' }}>Yes</button>
                                                <button type="button" className="btn submit-button" data-bs-dismiss="modal" style={{ width: '25%'}}>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='ps-3'><b>2</b></td>
                        <td><Link to="keyboard-img" style={{ color: '#ffffffa7' }}>Keyboard.jpg</Link></td>
                        <td>Keyboard</td>
                        <td>lorem ipsum keyboard ...</td>
                        <td>700.000</td>
                        <td>600</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '40%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '40%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body text-black mt-3 mb-3">
                                                <h4 className='fw-bold'>Deleted Data</h4>
                                                <p>Are you sure you want to delete this data?</p>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4 gap-3" style={{ width: '95%' }}>
                                                <button type="button" className="btn edit-button" style={{ width: '25%' }}>Yes</button>
                                                <button type="button" className="btn submit-button" data-bs-dismiss="modal" style={{ width: '25%'}}>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='ps-3'><b>3</b></td>
                        <td><Link to="bag-img" style={{ color: '#ffffffa7' }}>Bag.jpg</Link></td>
                        <td>Bag</td>
                        <td>lorem ipsum bag ...</td>
                        <td>300.000</td>
                        <td>600</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '40%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '40%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body text-black mt-3 mb-3">
                                                <h4 className='fw-bold'>Deleted Data</h4>
                                                <p>Are you sure you want to delete this data?</p>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4 gap-3" style={{ width: '95%' }}>
                                                <button type="button" className="btn edit-button" style={{ width: '25%' }}>Yes</button>
                                                <button type="button" className="btn submit-button" data-bs-dismiss="modal" style={{ width: '25%'}}>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='ps-3'><b>4</b></td>
                        <td><Link to="stationary-img" style={{ color: '#ffffffa7' }}>Stationary.jpg</Link></td>
                        <td>Stationary</td>
                        <td>lorem ipsum stationary ...</td>
                        <td>25.000</td>
                        <td>600</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '40%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '40%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body text-black mt-3 mb-3">
                                                <h4 className='fw-bold'>Deleted Data</h4>
                                                <p>Are you sure you want to delete this data?</p>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4 gap-3" style={{ width: '95%' }}>
                                                <button type="button" className="btn edit-button" style={{ width: '25%' }}>Yes</button>
                                                <button type="button" className="btn submit-button" data-bs-dismiss="modal" style={{ width: '25%'}}>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='ps-3'><b>5</b></td>
                        <td><Link to="doll-img" style={{ color: '#ffffffa7' }}>Doll.jpg</Link></td>
                        <td>Doll</td>
                        <td>lorem ipsum doll ...</td>
                        <td>125.000</td>
                        <td>600</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '40%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '40%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body text-black mt-3 mb-3">
                                                <h4 className='fw-bold'>Deleted Data</h4>
                                                <p>Are you sure you want to delete this data?</p>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4 gap-3" style={{ width: '95%' }}>
                                                <button type="button" className="btn edit-button" style={{ width: '25%' }}>Yes</button>
                                                <button type="button" className="btn submit-button" data-bs-dismiss="modal" style={{ width: '25%'}}>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='ps-3'><b>6</b></td>
                        <td><Link to="pillow-img" style={{ color: '#ffffffa7' }}>Pillow.jpg</Link></td>
                        <td>Pillow</td>
                        <td>lorem ipsum pillow ...</td>
                        <td>300.000</td>
                        <td>600</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '40%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '40%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body text-black mt-3 mb-3">
                                                <h4 className='fw-bold'>Deleted Data</h4>
                                                <p>Are you sure you want to delete this data?</p>
                                            </div>
                                            <div className="d-flex justify-content-end mb-4 gap-3" style={{ width: '95%' }}>
                                                <button type="button" className="btn edit-button" style={{ width: '25%' }}>Yes</button>
                                                <button type="button" className="btn submit-button" data-bs-dismiss="modal" style={{ width: '25%'}}>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* PRODUCT NAME */}





                </tbody>
            </table>
        </div>
        </>
    )
}