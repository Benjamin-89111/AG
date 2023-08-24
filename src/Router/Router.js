import React from "react";
import { BrowserRouter,Route,Switch,Link } from "react-router-dom";
import Home from "../Components/Home";
function Router(){
    return(
        <>
        <BrowserRouter>
        <Switch>
            <Route path="/Home">
                <Home/>
            </Route>
        </Switch>
        </BrowserRouter>
        </>
    )
}
export default Router