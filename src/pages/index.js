import { Geist, Geist_Mono } from "next/font/google";

import Head from "@/components/base/Head";
import Header from "@/components/base/Header";
import Main from "@/components/main";
import About from "@/components/main/About";
import Experience from "@/components/main/Exprience";
import Skills from "@/components/main/Skills";
import Portfolio from "@/components/main/Portfolio";
import Service from "@/components/main/Service";
import Contact from "@/components/main/Contact";
import Footer from "@/components/base/Footer";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Head />
      <Toaster />
      <div className="index-page">
        <Header />
        <main className="main p-4">
          <Main />
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Service />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
