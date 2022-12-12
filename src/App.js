import { Toaster } from "react-hot-toast";
import { Routes, Route, Router } from "react-router-dom";
import LayoutDashboard from "./dashboard/layout/LayoutDashboard";
import Home from "./dashboard/page/Home";
import Index from "./dashboard/page/index";
import LayoutAuth from "./main/pages/LayoutAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <LayoutAuth>
                <Index />
              </LayoutAuth>
            }
          />

          {/* <Route
            path="/product"
            element={
              <LayoutAuth>
                <Home />
              </LayoutAuth>
            }
          /> */}
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
