import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import Header from "./Header";
import ProductMain from "./ProductMain";



export default function Product() {
  return (
    <>
      <main>
        <ProductMain />
      </main>
    </>  
  );
}
