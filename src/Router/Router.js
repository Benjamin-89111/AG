import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import ProductList from "../Components/ProductList";
import ProductDetail from "../Components/ProductDetail";
import CommercialCleaning from "../Components/CommercialCleaning";
import BuildingMaintainence from "../Components/BuildingMaintainence";
import ManPower from "../Components/ManPower";
import FacilityManagement from "../Components/FacilityManagement";
import Maintainence from "../Components/Maintainence";
import Cleaning from "../Components/Cleaning";
import PropertyManagement from "../Components/PropertyManagement";
import WarmShellSpaces from "../Components/WarmShellSpaces";
import OfficeSpaces from "../Components/OfficeSpaces";
import LargeOfficeSpaces from "../Components/LargeOfficeSpaces";
import EventSpaces from "../Components/EventSpaces";
import EnquireNow from "../Components/EnquireNow";
import ResidentialSpaces from "../Components/ResidentialSpaces";
import PropertyDetails from "../Components/PropertyDetails";
function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    {/* <Route path="/productlist">
                        <ProductList />
                    </Route>
                    <Route path="/product/:id">
                        <ProductDetail />
                    </Route> */}
                    <Route path="/Commercial-Cleaning">
                        <CommercialCleaning />
                    </Route>
                    <Route path="/Building-Maintainence">
                        <BuildingMaintainence />
                    </Route>
                    <Route path="/Man-Power">
                        <ManPower />
                    </Route>
                    <Route path="/Facility-Management">
                        <FacilityManagement />
                    </Route>
                    <Route path="/Maintainence">
                        <Maintainence />
                    </Route>
                    <Route path="/Cleaning">
                        <Cleaning />
                    </Route>
                    <Route path="/Property-Management">
                        <PropertyManagement />
                    </Route>
                    <Route path="/Warm-Shell">
                        <WarmShellSpaces />
                    </Route>
                    <Route path="/Office">
                        <OfficeSpaces />
                    </Route>
                    <Route path="/Large-Office">
                        <LargeOfficeSpaces />
                    </Route>
                    <Route path="/Event">
                        <EventSpaces />
                    </Route>
                    <Route path="/Enquire">
                        <EnquireNow />
                    </Route>
                    <Route path="/Residential">
                        <ResidentialSpaces />
                    </Route>
                    <Route path="/property/:id" component={PropertyDetails} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router