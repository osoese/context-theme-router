import * as React from 'react';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import { ThemeContext, Theme } from './ThemeContext';
import { RouteTrackContext } from './RouteTrackContext';
import { useLocalStorage } from "./hooks/useLocalStorage";
import IPFSNode from './components/IPFSNode/IPFSNode';
import Mode from './components/Mode/Mode';
import PageOne from './pages/PageOne/PageOne';
import PageTwo from './pages/PageTwo/PageTwo';
import Head from './components/Head/Head';
import Home from './components/Home/Home';
import About from './components/About/About';
import Play from './components/Play/Play';
import UiKit from './components/UiKit/UiKit';

function App() {
  const [theme, setTheme] = useLocalStorage("storeTheme",Theme.Light);
  const [routeTrack, setRouteTrack] = useLocalStorage("storeRouteTrack",'/');
  const [myNode, setMyNode] = React.useState({});
  return (
    <>
    <IPFSNode myNode={myNode} setMyNode={setMyNode} />
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/*** <RouteTrackContext.Provider value{{ routeTrack, setRouteTrack }}> ***/}
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
                <NavLink
                  className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                  to="/play">Play</NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                  to="/ui-kit">UiKit</NavLink>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="play" element={<Play />} />
                <Route path="ui-kit" element={<UiKit />} />
              </Routes>
            </div>
          </>
          <>
            <div className="header-page-container">
              {/** will probably re-locate to a component **/}
              <Head routeTrack={routeTrack} setRouteTrack={setRouteTrack} />
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
