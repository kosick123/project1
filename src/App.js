import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import all 10 pages
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import Page10 from "./Pages/Page10";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} /> {/* Default home */}
        <Route path="/living-room" element={<Page1 />} />
        <Route path="/bedroom" element={<Page2 />} />
        <Route path="/dining-room" element={<Page3 />} />
        <Route path="/organisers" element={<Page4 />} />
        <Route path="/decor" element={<Page5 />} />
        <Route path="/furnishings" element={<Page6 />} />
        <Route path="/kitchen" element={<Page7 />} />
        <Route path="/tableware" element={<Page8 />} />
        <Route path="/bath-laundry" element={<Page9 />} />
        <Route path="/gifting" element={<Page10 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
