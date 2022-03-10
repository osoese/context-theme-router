import * as React from 'react';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import { ThemeContext, Theme } from './ThemeContext';
import { useLocalStorage } from "./hooks/useLocalStorage";
import IPFSNode from './components/IPFSNode/IPFSNode';
import Mode from './components/Mode/Mode';
import PageOne from './pages/PageOne/PageOne';
import Home from './components/Home/Home';
import About from './components/About/About';
import Play from './components/Play/Play';
import UiKit from './components/UiKit/UiKit';
import Head from './components/Head/Head';

function App() {
  const [theme, setTheme] = useLocalStorage("storeTheme",Theme.Light);
  const [routeTrack, setRouteTrack] = useLocalStorage("storeRouteTrack",'/');
  const [myNode, setMyNode] = React.useState({});
  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <IPFSNode myNode={myNode} setMyNode={setMyNode} />
      {/*** <RouteTrackContext.Provider value{{ routeTrack, setRouteTrack }}> ***/}
      <div className="App">
        <header className={`App-header App-header-${theme.toString().toLowerCase()}`}>
          <>
            <div className="header-fiex-wrapper">
              <div className="header-nav-column">
                <div className="header-route-container">
                  <nav>
                    <Mode />
                    <NavLink
                      className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                      to="/">Home</NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                      to="/about">About</NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                      to="/play">Play</NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                      to="/ui-kit">UiKit</NavLink>
                  </nav>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div>
                    <ul className="header-left-nav">
                      <li className="home not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : ``)}
                          to="/">🏠 home</NavLink>
                      </li>
                      <li className="about not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : ``)}
                          to="/about">⚛ about</NavLink>
                      </li>
                      <li className="play not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : ``)}
                          to="/play">⚡ play</NavLink>
                      </li>
                      <li className="ui-kit not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : ``)}
                          to="/ui-kit">♒ UiKit</NavLink>
                      </li>
                      <li className="rocket not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : ``)}
                          to="/about">🚀 about</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="header-page-wrapper">
                    <div>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="play" element={<Play />} />
                        <Route path="ui-kit" element={<UiKit />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-page-container">
              {/** will probably re-locate to a component **/}
              <Head routeTrack={routeTrack} setRouteTrack={setRouteTrack} />
            </div>
            <div style={{minHeight:'200px'}}>
              <PageOne />
            </div>
          </>
        </header>
        <div className={`App-body-${theme.toString().toLowerCase()}`}>
          <div className={`Body-wrap`}>
            <p>
              lorem dipsem ola yeah whatever lorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whatever
              lorem dipsem ola yeah whatever lorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whatever
              lorem dipsem ola yeah whatever lorem dipsem ola yeah whateverlorem dipsem ola yeah whateverlorem dipsem ola yeah whatever
            </p>
          </div>
        </div>
      </div>
      {/** </RouteTrackContext.Provider> **/}
    </ThemeContext.Provider>
    </>
  );
}

export default App;

// https://www.pluralsight.com/guides/using-react's-context-api-with-typescript
