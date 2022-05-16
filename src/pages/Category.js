import { Link } from 'react-router-dom';
import NavbarPartial from '../partials/NavbarPartial';

export default function Category(){
    return(
        <>
        <NavbarPartial />
        <div id="category" className="content mt-5 mb-5 ms-auto me-auto">
            <h4 className='text-white fw-bold mb-4'>List Category</h4>
            <table className="text-white w-100" style={{ border: '0.2px #C4C4C4' }}>
                <thead>
                    <tr>
                        <th scope="col" className='ps-3' style={{ width: '30%' }}>No</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='ps-3'><b>1</b></td>
                        <td>Mouse</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '30%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '30%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

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
                        <td>Keyboard</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '30%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '30%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

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
                        <td>Bag</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '30%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '30%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

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
                        <td>Stationary</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '30%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '30%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

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
                        <td>Doll</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '30%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '30%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

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
                        <td>Pillow</td>
                        <td>
                            <div className="d-flex gap-3">
                                <Link type="button" className="btn edit-button" style={{ width: '30%' }} to='edit'>Edit</Link>
                                <button type="button" className="btn submit-button" style={{ width: '30%' }} data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>

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
                </tbody>
            </table>
        </div>
        </>
    );
}