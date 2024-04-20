
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import SideNav from "./layout/SideNav";
import AddInventory from "./Inventory/AddInventory";
import EditInventory from "./Inventory/EditInventory";
import ViewInventory from "./Inventory/ViewInventory";
import Inventory from "./pages/Inventory";
import AddItem from "./Item/AddItem";
import EditItem from "./Item/EditItem";
import ViewItem from "./Item/ViewItem";
import Item from "./pages/Item";
import AddSupplier from "./supplier/AddSupplier";
import EditSupplier from "./supplier/EditSupplier";
import ViewSupplier from "./supplier/ViewSupplier";
import Supplier from "./pages/Supplier";
import Order from "./pages/Order";
import AddOrder from "./order/AddOrder";
import EditOrder from "./order/EditOrder";
import ViewOrder from "./order/ViewOrder";
import EditLocation from "./location/EditLocation";
import ViewLocation from "./location/ViewLocation";
import AddLocation from "./location/AddLocation";
import Location from "./pages/Location";
import Auth from "./layout/Auth";
import NavigationHandler from "./NavigationHandler";


function App() {


  return (
    <div className="App">
      <Router>
      <NavigationHandler>
        <Routes>
          <Route exact path="/user" element={<Home />} />
          <Route exact path="/Inventory" element={<Inventory />} />
          <Route exact path="/Item" element={<Item />} />
          <Route exact path="/Supplier" element={<Supplier/>} />
          <Route exact path="/Order" element={<Order/>} />
          <Route exact path="/Location" element={<Location/>} />
          <Route exact path="/" element={<Auth/>} />




          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />

          <Route exact path="/addinventory" element={<AddInventory />} />
          <Route exact path="/editinventory/:id" element={<EditInventory />} />
          <Route exact path="/viewinventory/:id" element={<ViewInventory />} />


          <Route exact path="/additem" element={<AddItem />} />
          <Route exact path="/edititem/:id" element={<EditItem />} />
          <Route exact path="/viewitem/:id" element={<ViewItem />} />


          <Route exact path="/addsupplier" element={<AddSupplier />} />
          <Route exact path="/editsupplier/:id" element={<EditSupplier />} />
          <Route exact path="/viewsupplier/:id" element={<ViewSupplier />} />


          <Route exact path="/addorder" element={<AddOrder />} />
          <Route exact path="/editorder/:id" element={<EditOrder />} />
          <Route exact path="/vieworder/:id" element={<ViewOrder />} />


          <Route exact path="/addlocation" element={<AddLocation />} />
          <Route exact path="/editlocation/:id" element={<EditLocation />} />
          <Route exact path="/viewlocation/:id" element={<ViewLocation />} />

        </Routes>
        </NavigationHandler>
      </Router>
     
    </div>
  );
}

export default App;
