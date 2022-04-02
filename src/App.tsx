import * as React from 'react';
import { useState } from "react";
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import { ThemeContext, Theme } from './ThemeContext';
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Transition } from 'react-transition-group';
import IPFSNode from './components/IPFSNode/IPFSNode';
import Mode from './components/Mode/Mode';
import PageOne from './pages/PageOne/PageOne';
import Home from './components/Home/Home';
import About from './components/About/About';
import Play from './components/Play/Play';
import CiCd from './components/CiCd/CiCd';
import UiKit from './components/UiKit/UiKit';
import Head from './components/Head/Head';
import Modal from "./components/Modal/Modal";
import { Web3Button, Web3Address } from './components/'

function App() {
  const [theme, setTheme] = useLocalStorage("storeTheme",Theme.Light);
  const [routeTrack, setRouteTrack] = useLocalStorage("storeRouteTrack",'/');
  const [navVisible, setNavVisible] = useLocalStorage("visibleNav","visible");
  const [myNode, setMyNode] = React.useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [modalCID, setModalCID] = useState(`QmXiwDZXtqm3zXWMdaZS1XgK9KxaNVoLiTMawG8HwQbLVg`)

  const ipfsFileUpload = async (fileBuffer:Buffer) => {
    console.log(`ipfsFileUpload called in App.tsx`,fileBuffer.toString());
    const node:any = myNode;
    let status = node.isOnline() ? 'online' : 'offline';
    console.log(`Node status: ${status}`);

      if(status === 'online'){
        console.log(`status was online`)
        console.log(fileBuffer.toString())
        const { cid } = await node.add(fileBuffer)
        await console.log(`successfully stored ${cid.toString()}`);
        await setModalCID(cid);
        await setIsOpen(true);
        // The address of your files.
        const addr = `/ipfs/${cid.toString()}`

        const res = await node.name.publish(addr)
        // You now have a res which contains two fields:
        //   - name: the name under which the content was published.
        //   - value: the "real" address to which Name points.
        await console.log(`https://ipfs.io/ipns/${res.name}`)
      }else{
        console.log(`node is not online`)
      }
  }

  return (
    <>
    <Web3Button />
    <button className="primaryBtn" onClick={() => setIsOpen(true)}>
      Open Modal
    </button>
    {isOpen && <Modal setIsOpen={setIsOpen} cid={modalCID}/>}
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <IPFSNode myNode={myNode} setMyNode={setMyNode} ipfsFileUpload={ipfsFileUpload} />
      {/*** <RouteTrackContext.Provider value{{ routeTrack, setRouteTrack }}> ***/}
      <div className="App">
        <header className={`App-header App-header-${theme.toString().toLowerCase()}`}>
          <>
            <div className="header-fiex-wrapper">
              <div className={`header-nav-column ${navVisible}`}>
                <div className="header-route-container">

                  <nav>
                    <input
                      style={{marginTop:'12px',fontSize:'1.5rem'}}
                      type="checkbox"
                      checked={(navVisible==='visible')?true:false}
                      onClick={()=>{(navVisible==='visible')?setNavVisible('invisible'):setNavVisible('visible')}} />
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
                      to="/cicd">CiCd</NavLink>
                    <NavLink
                      className={({ isActive }) => (isActive ? `Nav-${theme.toString().toLowerCase()}-active` : `Nav-${theme.toString().toLowerCase()}`)}
                      to="/ui-kit">UiKit</NavLink>
                  </nav>

                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div>
                    <Transition in={(navVisible==='visible')?true:false} timeout={1500}>
                    <ul className="header-left-nav">
                      <li className={`home not-wrapped`}>
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : `ul-li-${theme.toString().toLowerCase()}`)}
                          to="/">
                            <div className={`nav-tab en-${navVisible}`}>🏠</div>
                            <div className={`nav-text-extension ${navVisible}`}>home</div>
                        </NavLink>
                      </li>
                      <li className="about not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : `ul-li-${theme.toString().toLowerCase()}`)}
                          to="/about">
                          <div className={`nav-tab en-${navVisible}`}>⚛</div>
                          <div className={`nav-text-extension ${navVisible}`}>about</div>
                        </NavLink>
                      </li>
                      <li className="play not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : `ul-li-${theme.toString().toLowerCase()}`)}
                          to="/play">
                          <div className={`nav-tab en-${navVisible}`}>▶</div>
                          <div className={`nav-text-extension ${navVisible}`}>play</div>
                        </NavLink>
                      </li>
                      <li className="cicd not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : `ul-li-${theme.toString().toLowerCase()}`)}
                          to="/cicd">
                          <div className={`nav-tab en-${navVisible}`}>⚡</div>
                          <div className={`nav-text-extension ${navVisible}`}>cicd</div>
                        </NavLink>
                      </li>
                      <li className="ui-kit not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : `ul-li-${theme.toString().toLowerCase()}`)}
                          to="/ui-kit">
                          <div className={`nav-tab en-${navVisible}`}>♒</div>
                          <div className={`nav-text-extension ${navVisible}`}>UiKit</div>
                        </NavLink>
                      </li>
                      <li className="rocket not-wrapped">
                        <NavLink
                          className={({ isActive }) => (isActive ? `ul-li-${theme.toString().toLowerCase()}-active` : `ul-li-${theme.toString().toLowerCase()}`)}
                          to="/about">
                            <div className={`nav-tab en-${navVisible}`}>🚀</div>
                            <div className={`nav-text-extension ${navVisible}`}>about</div>
                          </NavLink>
                      </li>
                    </ul>
                    </Transition>
                  </div>
                  <div className={`header-page-wrapper wr-${navVisible}`}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="about" element={<About />} />
                      <Route path="play" element={<Play />} />
                      <Route path="cicd" element={<CiCd />} />
                      <Route path="ui-kit" element={<UiKit />} />
                    </Routes>
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
