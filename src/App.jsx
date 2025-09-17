import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardHomepage from "./pages/DashboardHomepage";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboardlayout from "./layouts/Dashboardlayout";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Public pages routes */}
        <Route element={<Mainlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<Dashboardlayout />}>
          <Route path="/dashboard" element={<DashboardHomepage/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
