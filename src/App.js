import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DisclosureDisclaimer from "./Components/DisclosureDisclaimer";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Kyc from "./Components/Kyc";
import Policy from "./Components/Policy";
import Service from "./Components/Service";
import Complaint from "./Components/Complaint";
import Investor from "./Components/Investor";
import Complaint2 from "./Components/Complaint2";

function App() {
  return (
    <>
    <div style={{overflow: "clip"}}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/service"
            element={
              <>
                <Header />
                <Service />
                <Footer />
              </>
            }
          />
          <Route
            path="/investor"
            element={ 
              <>
                <Header />
                <Investor />
                <Footer />
              </>
            }
          />
          <Route
            path="/complaint"
            element={
              <>
                <Header/>
                <Complaint2/>
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/policy"
            element={
              <>
                <Header />
                <Policy />
                <Footer />
              </>
            }
          />
          <Route
            path="/disclosure-disclaimer"
            element={
              <>
                <Header />
                <DisclosureDisclaimer />
                <Footer />
              </>
            }
          />
          <Route
            path="/kyc"
            element={
              <>
                <Header />
                <Kyc />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
