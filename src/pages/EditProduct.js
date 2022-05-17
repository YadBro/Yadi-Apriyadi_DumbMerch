import NavbarPartial from "../partials/NavbarPartial";

export default function EditProduct(){
    return (
        <>
            <NavbarPartial />
            <div id="editProduct" className="content mt-5 mb-5 ms-auto me-auto">
                <h4 className="text-white mb-4 fw-bold">Edit Product</h4>
                <div className="mt-5 mb-5">
                    <div className="mb-4">
                        <input class="form-control p-2 upload-box fw-light text-white" type="file"/>
                    </div>
                    <div className="mb-4">
                        <input class="form-control form-input p-2" type="text" placeholder="Product Name"/>
                    </div>
                    <div className="mb-4">
                        <textarea className="form-control form-input p-2" style={{ height: '130px' }}></textarea>
                    </div>
                    <div className="mb-4">
                        <input class="form-control form-input p-2" type="text" placeholder="Product Price"/>
                    </div>
                    <div className="mb-4">
                        <input class="form-control form-input p-2" type="text" placeholder="Quantity Product"/>
                    </div>
                </div>
                    <button type="submit" className="btn w-100 edit-button" to='edit'>Save</button>
            </div>
        </>
    )
}