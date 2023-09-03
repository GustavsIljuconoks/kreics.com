import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Main from "./Main";
import About from "./About";
import Contact from "./Contacts";
import Work from "./WorkIndex";
import Project from "./WorkShowcase";


const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Main /> }/>
                <Route exact path="/about" element={ <About/> }/>
                <Route exact path="/contact" element={ <Contact/> }/>
                <Route exact path="/works" element={ <Work/> }/>
                <Route exact path="/work/:project" element={ <Project/> }/>
            </Routes>
        </Router>
    )
}
export default RoutesApp;