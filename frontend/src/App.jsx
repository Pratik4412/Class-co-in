import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ScrollToTop from "./common/ScrollToTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
    });
  }, []);
  return (
    <div>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
