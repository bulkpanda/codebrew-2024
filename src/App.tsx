import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NutritionAnalysis from "./pages/NutritionAnalysis";
import ScanningResult from "./pages/ScanningResult";
import MainDisplay from "./pages/MainDisplay";
import LOGINPAGE from "./pages/LOGINPAGE";
import SignUpPage from "./pages/SignUpPage";
import UploadFiles from "./pages/UploadFiles";
import Leaderboard from "./pages/Leaderboard";
import Social from "./pages/Social";
import CustomizePlanning from "./pages/CustomizePlanning";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/3-nutrition-analysis":
        title = "";
        metaDescription = "";
        break;
      case "/6-scanning-result":
        title = "";
        metaDescription = "";
        break;
      case "/4main-display":
        title = "";
        metaDescription = "";
        break;
      case "/3-login-page":
        title = "";
        metaDescription = "";
        break;
      case "/2-sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/5-uploading-files":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/3-nutrition-analysis" element={<NutritionAnalysis />} />
      <Route path="/6-scanning-result" element={<ScanningResult />} />
      <Route path="/4main-display" element={<MainDisplay />} />
      <Route path="/3-login-page" element={<LOGINPAGE />} />
      <Route path="/2-sign-up-page" element={<SignUpPage />} />
      <Route path="/5-uploading-files" element={<UploadFiles />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/social" element={<Social />} />
      <Route path="/8-customize-planning" element={<CustomizePlanning />} />
    </Routes>
  );
}
export default App;
