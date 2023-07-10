import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="inner-header pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <p className="inner-title">Dusai</p>
                        </div>
                        <div className="col-7">
                            <div className="inner-wrap d-flex align-items-center justify-content-between">
                                <ul className="d-flex list-item gap-2 m-0">
                                    <li className="block px-2 py-4">Home</li>
                                    <li className="block px-2 py-4">Find Hotel</li>
                                    <li className="block px-2 py-4">About us</li>
                                    <li className="block px-2 py-4">Contact us</li>
                                </ul>
                                <div className="btn-cus px-4 py-2">
                                    Login
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
