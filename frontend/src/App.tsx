import NavBar from "./Component/NavBar";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Component/pages/SignUpPage";
import LoginInPage from "./Component/pages/logInPage";
import SettingPage from "./Component/pages/SettingPage";
import ProfilePage from "./Component/pages/ProfilePage";
import HomePage from "./Component/pages/HomePage";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginInPage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
