import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin/Admin";
import Apps from "./components/admin/components/Applications/Apps";
import Documentation from "./components/admin/components/Applications/Documentation";
import AddMenu from "./components/admin/components/Dashboard/AddMenu";
import Dashboard from "./components/admin/components/Dashboard/Dashboard";
import EditMenu from "./components/admin/components/Dashboard/EditMenu";
import Menu from "./components/admin/components/Dashboard/Menu";
// import Product from "./components/admin/components/Dashboard/product";
import Charts from "./components/admin/components/Data/Charts";
import Maps from "./components/admin/components/Data/Maps";
import Tables from "./components/admin/components/Data/Tables";
import FormElements from "./components/admin/components/Forms/FormElements";
import Notification from "./components/admin/components/Forms/Notification";
import Popups from "./components/admin/components/Forms/Popups";
import ECommerce from "./components/admin/components/Pages/ECommerce";
import ErrorPages from "./components/admin/components/Pages/ErrorPages";
import GeneralPages from "./components/admin/components/Pages/GeneralPages";
import UserPages from "./components/admin/components/Pages/UserPages";
import AdvancedUI from "./components/admin/components/UI Elements/AdvancedUI";
import UIElements from "./components/admin/components/UI Elements/UIElements";
import Login from "./components/admin/Login";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/admin/*" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="menu" element={<Menu />} />
            <Route path="addmenu" element={<AddMenu />} />
            {/* <Route path="product" element={<Product />} /> */}
            <Route path="editmenu/:id" element={<EditMenu />} />
            <Route path="uielements" element={<UIElements />} />
            <Route path="advencedui" element={<AdvancedUI />} />
            <Route path="formelements" element={<FormElements />} />
            <Route path="popups" element={<Popups />} />
            <Route path="notification" element={<Notification />} />
            <Route path="charts" element={<Charts />} />
            <Route path="tables" element={<Tables />} />
            <Route path="maps" element={<Maps />} />
            <Route path="userpages" element={<UserPages />} />
            <Route path="errorpages" element={<ErrorPages />} />
            <Route path="generalpages" element={<GeneralPages />} />
            <Route path="ecommerce" element={<ECommerce />} />
            <Route path="apps" element={<Apps />} />
            <Route path="documentation" element={<Documentation />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
