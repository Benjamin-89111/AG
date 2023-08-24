import logo from './Agfs.png'
import { Icon } from '@iconify/react'

function Footer() {
    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div style={{background:'lightgrey'}}>
                {/* <!-- Footer --> */}
                <footer
                    class="text-center text-lg-start text-dark"

                >
                    {/* <!-- Grid container --> */}
                    <div class="container p-4 pb-0">
                        {/* <!-- Section: Links --> */}
                        <section class="">
                            {/* <!--Grid row--> */}
                            <div class="row">
                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <img src={logo} width="80px" />
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr class="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 class="text-uppercase mb-4 font-weight-bold">SERVICES</h5>
                                    <p>
                                        <a >Commercial Cleaning</a>
                                    </p>
                                    <p>
                                        <a >Building Maintenance</a>
                                    </p>
                                    <p>
                                        <a >Man-Power</a>
                                    </p>
                                    <p>
                                        <a >Facility Management</a>
                                    </p>
                                    <p>
                                        <a >Maintenance</a>
                                    </p>
                                    <p>
                                        <a >Cleaning</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr class="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 class="text-uppercase mb-4 font-weight-bold">
                                        Properties
                                    </h5>
                                    <p>
                                        <a >Property Management</a>
                                    </p>
                                    <p>
                                        <a >Warm Shell Spaces</a>
                                    </p>
                                    <p>
                                        <a >Office Spaces</a>
                                    </p>
                                    <p>
                                        <a >Large Office Spaces</a>
                                    </p>
                                    <p>
                                        <a >Event Spaces</a>
                                    </p>
                                </div>

                                {/* <!-- Grid column --> */}
                                <hr class="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h5 class="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
                                    <p><span style={{ textDecoration: 'underline' }}>Location </span> {' '}: <i class="fas fa-home mr-3"></i>India , Singapore , Malaysia</p>
                                    <p><i class="fas fa-envelope mr-3"></i> info@agpropertyfacility.com</p>
                                    <p><i class="fas fa-phone mr-3"></i> +91 9840389051</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!--Grid row--> */}
                        </section>
                        {/* <!-- Section: Links --> */}

                        <hr class="my-3" />

                        {/* <!-- Section: Copyright --> */}
                        <section class="p-3 pt-0">
                            <div class="row d-flex align-items-center">
                                {/* <!-- Grid column --> */}
                                <div class="col-md-7 col-lg-8 text-center text-md-start">
                                    {/* <!-- Copyright --> */}
                                    <div class="p-3">
                                        © 2023 Copyright <span className='fw-semibold'>AG Property & Facility</span>
                                    </div>
                                    {/* <!-- Copyright --> */}
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <div className="social-icons">
                                        <div className='fw-bold'>
                                            Follow Us On 
                                        </div>{' '}:
                                        <a href="#" className="icon-link" title="Facebook">
                                            <Icon icon="la:facebook-square" color="black" width="34" height="34" />
                                        </a>
                                        <a href="#" className="icon-link" title="Twitter">
                                            <Icon icon="ri:twitter-x-line" color="black" width="28" height="28" />
                                        </a>
                                        <a href="#" className="icon-link" title="Youtube">
                                            <Icon icon="ant-design:youtube-outlined" color="black" width="28" height="28" />
                                        </a>
                                        <a href="#" className="icon-link" title="Instagram">
                                            <Icon icon="mdi:instagram" color="black" width="28" height="28" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </footer>
            </div>
        </>
    )
}
export default Footer
