import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
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
import Commercial from "../Components/Commercial";

function Router() {
  // Scroll to the top of the page when a route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Route path="/Commercial">
            <Commercial />
          </Route>
          <Route path="/property/:id" component={PropertyDetails} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
