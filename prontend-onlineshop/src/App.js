import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin/Admin";
import AddMenu from "./components/admin/Dashboard/AddMenu";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import EditMenu from "./components/admin/Menu/EditMenu";
import Menu from "./components/admin/Menu/Menu";
import AddCate from "./components/admin/Category/AddCate";
import Addproducts from "./components/admin/Products/Addproduct";
import Products from "./components/admin/Products/Products";
import AdminLogin from "./components/admin/AdminLogin";
import Main from "./Layouts/Main";
import Category from "./components/admin/Category/Category";
import Product from "./Layouts/Product";
import Article from "./Layouts/Article";
import Services from "./Layouts/Services";
import Aboutus from "./Layouts/Aboutus";

function App() {
  return (
    <div className="container">
      <div>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/article" element={<Article />} />
            <Route path="/aboutus" element={<Aboutus />} />
          </Route>
          {/* </Routes>
        <Routes> */}
          <Route path="/login" element={<AdminLogin />} />
          <Route exact path="/admin/*" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="menu" element={<Menu />} />
            <Route path="addmenu" element={<AddMenu />} />
            <Route path="products" element={<Products />} />
            <Route path="addproduct" element={<Addproducts />} />
            <Route path="category" element={<Category />} />
            <Route path="addcate" element={<AddCate />} />
            <Route path="editmenu/:id" element={<EditMenu />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
