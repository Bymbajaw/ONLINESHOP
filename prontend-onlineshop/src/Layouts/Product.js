import React from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import ProductMain from "./ProductMain";



export default function Product() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ProductMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </>  
  );
}
