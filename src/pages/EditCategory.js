import NavbarPartial from "../partials/NavbarPartial";

export default function EditCategory(){
    return (
        <>
            <NavbarPartial />
            <div id="editCategory" className="content mt-5 mb-5 ms-auto me-auto">
                <h4 className="text-white mb-4 fw-bold">Edit Category</h4>
                <div className="mt-5 mb-5">
                    <input class="form-control form-input p-2" type="text" placeholder="Product Name"/>
                </div>
                    <button type="submit" className="btn w-100 edit-button" to='edit'>Save</button>
            </div>
        </>
    )
}