import MouseImg from '../assets/img/Mouse.png';
import NavbarPartialHome from '../partials/NavbarPartialHome';

export default function DetailPage() {
    return (
        <>
        <NavbarPartialHome />
            <div className="content-detail mt-5 mb-5 ms-auto me-auto">
                <div className="d-flex gap-5">
                    <div style={{ width: '49%' }}>
                        <img className="img-fluid" src={MouseImg} alt="Product Image" />
                    </div>
                    <div className="d-flex flex-column" style={{ width: '60%' }}>
                        <h1 className='detail-title mt-4'>Mouse</h1>
                        <div className="detail-product mt-2">
                            <p>Stock : 600</p>
                            <p className='mt-5'>
                                - Wireless Mouse <br />
                                - Konektivitas wireless 2.4 GHz <br />
                                - Jarak wireless hingga 10 m <br />
                                - Plug and Play <br />
                                - Baterai tahan hingga 12 bulan <br />
                            </p>
                            <p className='detail-description'>
                                Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol
                                mouse yang ringan dan mudah dibawa. Mouse ini menggunakan
                                frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor
                                canggih optik pelacakan dengan penerima USB yang kecil. Mouse
                                ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai).
                                Mendukung sistem operasi Windows 7, 8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                            </p>
                            <div className="d-flex justify-content-end mt-4 mb-4">
                                <h2 className='detail-price'>Rp.300.900</h2>
                            </div>
                            <a className='btn w-100 submit-button pt-2 pb-2' href="#" style={{ fontWeight: '700', fontSize: '18px', color: '#FFFFFF', lineHeight: '21.83px' }}>Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}