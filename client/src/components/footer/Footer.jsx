import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <footer>
            <section
                className="d-flex justify-content-between p-4 text-white"
                style={{ backgroundColor: '#21D192' }}>
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="!#" className="text-white me-4 icons">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="!#" className="text-white me-4 icons">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="!#" className="text-white me-4 icons">
                        <i className="bi bi-google"></i>
                    </a>
                    <a href="!#" className="text-white me-4 icons">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="!#" className="text-white me-4 icons">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Company name</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto Companyname"
                            />
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Products</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto Products"
                            />
                            <p>
                                <a href="!#" className="text-dark">No products</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto Usefullinks"
                            />
                            <p>
                                <a href="!#" className="text-dark">Your Account</a>
                            </p>
                            <p>
                                <a href="!#" className="text-dark">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="!#" className="text-dark">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="!#" className="text-dark">Help</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto Contact"
                            />
                            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer