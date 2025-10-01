import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardHomepage from "./pages/DashboardHomepage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboardlayout from "./layouts/Dashboardlayout";
import useSmoothScroll from "./hooks/useSmoothScroll";
import ScrollToTop from "./components/scrollTop";
import MedicationsPage from "./pages/MedicationsPage";
import VitalsPage from "./pages/VitalsPage";
import AppointmentPage from "./pages/AppointmentPage";
import SupportPage from "./pages/SupportPage";



function App() {
  useSmoothScroll();
  const location = useLocation();
  
  return (
      <AnimatePresence mode="wait">
        <ScrollToTop/>
        <Routes location={location} key={location.key}>
          {/* Public pages routes */}
          <Route element={<Mainlayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<Dashboardlayout />}>
            <Route path="/dashboard" element={<DashboardHomepage />} />
            <Route path="/medications" element={<MedicationsPage />} />
            <Route path="/vitals" element={<VitalsPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
