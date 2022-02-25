import * as React from 'react';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import { ThemeContext, Theme } from './ThemeContext';
import { useLocalStorage } from "./hooks/useLocalStorage";
import Mode from './components/Mode/Mode';
import PageOne from './pages/PageOne/PageOne';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const [theme, setTheme] = useLocalStorage("storeTheme",Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <header className={`App-header-${theme.toString().toLowerCase()}`}>
          <>
            <div className="header-route-container">
              <nav>
                <Mode />
                <NavLink
                  className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                  to="/">Home</NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                  to="/about">About</NavLink>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
              </Routes>
            </div>
          </>
          <>
            <div className="header-page-container">
              <PageOne />
            </div>
          </>
        </header>
        <div className={`App-body-${theme.toString().toLowerCase()}`}>
          <div className={`Body-wrap`}>
            <p>
              lorem dipsem ola yeah whatever lorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whatever
              lorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whatever
              lorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whatever
            </p>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

// https://www.pluralsight.com/guides/using-react's-context-api-with-typescript
