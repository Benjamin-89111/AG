import { Row,Col } from "react-bootstrap"
import logo from './SIA-logo-min.png'
function Certificate() {
    return (
        <>
            <div className="p-5 container">
                <div className="d-flex justify-content-center">
                <img src={logo} width="120px" className="mb-3"/>
                </div>
                <p className="text-center">Crystal Facilities Management currently holds SIA Approved Contractor Scheme (ACS) status for the provision of Security Guarding.</p>
               <h2 className="text-center">What Is SIA</h2>
                <p className="text-center">The Security Industry Authority (SIA) is the organisation responsible for regulating the private security industry in the UK. Crystal Facilities Management is an SIA Approved Contractor reflecting our commitment to quality security delivery. We are audited annually for our operational and performance standards.</p>
            </div>
        </>
    )
}
export default Certificate