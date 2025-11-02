import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Head from "@/components/ui/Head";
import Header from "@/components/ui/Header";
import Main from "@/components/main";
import About from "@/components/main/About";
import Experience from "@/components/main/Exprience";
import Contact from "@/components/main/Contact";
import Footer from "@/components/ui/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Head />
      <Toaster />
      <div className="index-page">
        <Header />
        <main className="main p-4">
          <Main />
          <About />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
