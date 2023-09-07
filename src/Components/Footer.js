import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo from './FinalLogo.png'
import { Icon } from '@iconify/react'

function Footer() {
    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div className='service-bg'>
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
                                    <Link to="/" target="_blank">
                                        <img src={logo} width="170px" className='mb-3' />
                                    </Link>
                                    <Link to="/about" target="_blank">
                                        <p className='text-white'>
                                            We are a medium-sized company providing Facilities Management and Building Services in Chennai. We put our people first, resulting in a hardworking and skilled team who are committed to getting the job done right...
                                        </p>
                                    </Link>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr class="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 class="text-uppercase mb-4 font-weight-bold text-white ">SERVICES</h5>

                                    <Link to="/Property-Management" target="_blank">
                                        <p>
                                            <a className="text-white">Property Management</a>
                                        </p>
                                    </Link>
                                    <Link to="/Commercial-Cleaning" target="_blank">
                                        <p>
                                            <a className="text-white">Commercial Cleaning</a>
                                        </p>
                                    </Link>
                                    <Link to="/Building-Maintainence" target="_blank">
                                        <p>
                                            <a className="text-white">Building Maintainence</a>
                                        </p>
                                    </Link>
                                    <Link to="/Man-Power" target="_blank">
                                        <p>
                                            <a className="text-white">Man-Power</a>
                                        </p>
                                    </Link>
                                    <Link to="/Facility-Management" target="_blank">
                                        <p>
                                            <a className="text-white">Facility Management</a>
                                        </p>
                                    </Link>
                                    <Link to="/Maintainence" target="_blank">
                                        <p>
                                            <a className="text-white">Maintainence</a>
                                        </p>
                                    </Link>
                                    <Link to="/Cleaning" target="_blank">
                                        <p>
                                            <a className="text-white">Cleaning</a>
                                        </p>
                                    </Link>
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr class="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 class="text-uppercase mb-4 font-weight-bold text-white ">
                                        Properties
                                    </h5>
                                    <Link to="/Residential-Spaces" target="_blank">
                                        <p>
                                            <a className="text-white">Residential Spaces</a>
                                        </p>
                                    </Link>
                                    <Link to="/Warm-Shell-Spaces" target="_blank">
                                        <p>
                                            <a className="text-white">Warm Shell Spaces</a>
                                        </p>
                                    </Link>
                                    <Link to="/Office-Spaces" target="_blank">
                                        <p>
                                            <a className="text-white">Office Spaces</a>
                                        </p>
                                    </Link>
                                    <Link to="/Large-Office-Spaces" target="_blank">
                                        <p>
                                            <a className="text-white">Large Office Spaces</a>
                                        </p>
                                    </Link>
                                    <Link to="/Event-Spaces" target="_blank">
                                        <p>
                                            <a className="text-white">Event Spaces</a>
                                        </p>
                                    </Link>
                                </div>

                                {/* <!-- Grid column --> */}
                                <hr class="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div class="col-md-4 text-white col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h5 class="text-uppercase mb-4 font-weight-bold text-white ">Contact Us</h5>
                                    {/* <p><span>Location </span> {' '}: <i class="fas fa-home mr-3"></i>India , Singapore , Malaysia</p> */}
                                    <p className='mb-0'><Icon className='me-1' icon="mingcute:mail-fill" color="#ff8000" width="24" height="24" />Email Us :</p>
                                    <p className='mt-2'>info@agpropertyfacility.com</p>
                                    <p className='mb-0'><Icon className='me-1' icon="bi:phone-fill" color="#ff8000" width="24" height="24" />Call Us :</p>
                                    <p className='mt-2'> 7845800982</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!--Grid row--> */}
                        </section>
                        {/* <!-- Section: Links --> */}

                        <hr class="my-2 text-white" />

                        {/* <!-- Section: Copyright --> */}
                        <section class="p-3 pt-0">
                            <div class="row d-flex align-items-center">
                                {/* <!-- Grid column --> */}
                                <div class="col-md-7 col-lg-8 text-center text-md-start">
                                    {/* <!-- Copyright --> */}
                                    <div class="p-3 text-white">
                                        © 2023 Copyrights <span style={{ color: "#ff8000" }} className='fw-light'>AG Property & Facility</span>
                                    </div>
                                    {/* <!-- Copyright --> */}
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <div className="social-icons">
                                        {/* <div className='fw-bold text-white'>
                                            Follow :
                                        </div>{' '} */}
                                        <a target="_blank" href="https://www.facebook.com/agpropertyfacility/" className="icon-link" title="Facebook">
                                            <Icon icon="logos:facebook" width="24" height="24" />
                                        </a>
                                        <a href="https://twitter.com/AG_propfac" target='_blank' className="icon-link" title="Twitter">
                                            <Icon icon="ri:twitter-x-fill" color="black" width="24" height="24" />
                                        </a>
                                        <a target='_blank' href="https://www.youtube.com/channel/UC_OJpayOZRdt6I4vkG-9uqA" className="icon-link" title="Youtube">
                                            <Icon icon="logos:youtube-icon" color="#df2020" width="24" height="24" />
                                        </a>
                                        <a target='_blank' href="https://www.instagram.com/agpf_media/" className="icon-link" title="Instagram">
                                            <Icon icon="skill-icons:instagram" color="#df2020" width="24" height="24" />
                                        </a>
                                        <a target='_blank' href="https://www.linkedin.com/company/99914068/admin/feed/posts/" className="icon-link" title="Linkedin">
                                            <Icon icon="skill-icons:linkedin" color="#df2020" width="24" height="24" />
                                        </a>
                                        <a href="https://in.pinterest.com/agpropertymanagement/" target='_blank' className="icon-link" title="Pinterest">
                                            <Icon icon="logos:pinterest" color="#df2020" width="24" height="24" />
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
