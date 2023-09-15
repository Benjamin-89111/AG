import { Button, Col, Container, Row } from "react-bootstrap"
import wideservice from './WideService.jpg'
import { Icon } from '@iconify/react';
// import { Icon } from '@iconify/react'
import X from './X-01.png'
import Facebook from './FB-01.png'
import Youtube from './Youtube-01.svg'
import Pinterest from './Pintrest-01.svg'
import Instagram from './Insta-01.svg'
import Linkedin from './Lindin-01.png'
import { Link } from 'react-router-dom'

function WideCoverage() {
    return (
        <>
            <div className="ps-3 pe-3">
                <Row className="">
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        <h3 style={{fontSize:"45px"}} className="mt-3 text-capitalize text-white">Our Services <span className="text-lowercase">are</span> like <span className="text-lowercase">a</span> Beacon <span className="text-lowercase">a</span> Change that Shines brightly across every sector</h3>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="pt-4 pb-4" src="https://media.istockphoto.com/id/1212773703/photo/covid-19-wiping-down-surfaces.jpg?s=612x612&w=0&k=20&c=Yh0hegDBwXXWrzqayCSaWCKmRy_8O7qSiar7TGcLXf8=" width="80%" />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default WideCoverage