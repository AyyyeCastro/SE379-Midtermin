import "./App.css";
import { useNavigate, Outlet } from "react-router-dom";
import React, { useContext, useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
// import ToggleSwitch from "./components/ToggleSwitch";
import { ThemeContext, themes } from "./context/themeContext";

function App() {
  // THEMES
  const [theme, setTheme] = useState(themes.light); // default theme

  const toggleLightTheme = () => {
    setTheme(themes.light);
  };

  const toggleDarkTheme = () => {
    setTheme(themes.dark);
  };

  const toggleOldTheme = () => {
    setTheme(themes.old);
  };

  // NAVIGATION
  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate("home");
  };

  const handleShowProducts = () => {
    navigate("products");
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" style={{ background: theme.background, color: theme.foreground }}>
        <nav>
          <button onClick={handleShowHome} className="btnNav">
            Home
          </button>
          <button onClick={handleShowProducts} className="btnNav">
            Products
          </button>
        </nav>

        <header
          className="header"
          style={{
            background: theme.background,
            color: theme.foreground,
            border: theme.border,
          }}
        >
          <div className="header-content">
            <p className="dmText">Toggle Themes!</p>
            <Button label="Light" onClick={toggleLightTheme} active={theme ==themes.light} className="btnThemes" />
            <Button label="Dark" onClick={toggleDarkTheme} active={theme == themes.dark}  className="btnThemes"/>
            <Button label="Old" onClick={toggleOldTheme} active={theme == themes.old} className="btnThemes"/>
          </div>
        </header>

        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
