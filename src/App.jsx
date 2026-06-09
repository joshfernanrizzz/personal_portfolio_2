import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { ScrollToTop } from "./components/ui.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
