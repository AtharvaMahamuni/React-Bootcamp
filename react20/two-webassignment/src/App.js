import React from "react";

import NavBar from "./NavBar";
import MasterHead from "./MasterHead";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";

const App = () => {
    return(
        <div>
            <NavBar />
            <MasterHead />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
            <Footer />
            <CopyrightSection />
        </div>
    );
}

export default App;