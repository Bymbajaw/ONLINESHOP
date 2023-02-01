import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin/Admin";
import Apps from "./components/admin/components/Applications/Apps";
import Documentation from "./components/admin/components/Applications/Documentation";
import Dashboard from "./components/admin/components/Dashboard/Dashboard";
import Widgets from "./components/admin/components/Dashboard/Widgets";
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
          <Route path="/admin" element={<Admin />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/widgets" element={<Widgets />} />
            <Route path="/uielements" element={<UIElements />} />
            <Route path="/advencedui" element={<AdvancedUI />} />
            <Route path="/formelements" element={<FormElements />} />
            <Route path="/popups" element={<Popups />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/userpages" element={<UserPages />} />
            <Route path="/errorpages" element={<ErrorPages />} />
            <Route path="/general" element={<GeneralPages />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/documentation" element={<Documentation />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
