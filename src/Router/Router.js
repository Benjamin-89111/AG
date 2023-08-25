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
                    <Route path="/productlist">
                        <ProductList />
                    </Route>
                    <Route path="/product/:id">
                        <ProductDetail />
                    </Route>
                    <Route path="/cc">
                        <CommercialCleaning />
                    </Route>
                    <Route path="/bm">
                        <BuildingMaintainence />
                    </Route>
                    <Route path="/mp">
                        <ManPower />
                    </Route>
                    <Route path="/fm">
                        <FacilityManagement />
                    </Route>
                    <Route path="/m">
                        <Maintainence />
                    </Route>
                    <Route path="/c">
                        <Cleaning />
                    </Route>
                    <Route path="/pm">
                        <PropertyManagement />
                    </Route>
                    <Route path="/wss">
                        <WarmShellSpaces />
                    </Route>
                    <Route path="/os">
                        <OfficeSpaces />
                    </Route>
                    <Route path="/los">
                        <LargeOfficeSpaces />
                    </Route>
                    <Route path="/es">
                        <EventSpaces />
                    </Route>
                    <Route path="/en">
                        <EnquireNow />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router