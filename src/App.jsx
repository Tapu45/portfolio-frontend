import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { BrowserRouter as Router, Routes, Route , useLocation} from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/miniComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeAnalytics, logPageView } from "./lib/analytics.js"; 
import { useEffect } from "react";

function App() {
  useEffect(() => {
    initializeAnalytics(); // Initialize Google Analytics
  }, []);
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <PageTracker /> {/* Component to track page views */}
      <Router>
        {/* <ModeToggle /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" />
      </Router>
    </ThemeProvider>
  );
}
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname); // Log page views on route change
  }, [location]);

  return null;
};

export default App;