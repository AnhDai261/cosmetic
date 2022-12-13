import { Toaster } from "react-hot-toast";
import { Routes, Route, Router } from "react-router-dom";
import LayoutDashboard from "./dashboard/layout/LayoutDashboard";
import Home from "./dashboard/page/Home";
import Index from "./dashboard/page/index";
import LayoutAuth from "./main/pages/LayoutAuth";
import LayoutAbout from "./main/pages/LayoutAbout";
import LayoutStore from "./main/pages/LayoutStore";
import SignIn from "./main/component/SignIn";
import SignUp from "./main/component/SignUp";
import LayoutCart from "./main/pages/LayoutCart";
import Contact from "./main/component/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<LayoutAuth />} />

          <Route path="/about" element={<LayoutAbout />} />
          <Route path="/store" element={<LayoutStore />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<LayoutCart />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/dashboard">
          <Route
            index
            element={
              <LayoutDashboard>
                <Index />
              </LayoutDashboard>
            }
          />

          <Route
            path="/dashboard/product"
            element={
              <LayoutDashboard>
                <Home />
              </LayoutDashboard>
            }
          />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
