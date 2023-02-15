import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import ServicesMain from "./ServicesMain";

export default function Services() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main><ServicesMain /></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
