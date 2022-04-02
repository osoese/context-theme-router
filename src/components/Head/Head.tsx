import React from 'react';
import { Routes, Route } from "react-router-dom";
import './Head.css';
import { useTheme, Theme } from '../../ThemeContext';
import Mode from '../../components/Mode/Mode';
import IPFSNode from '../../components/IPFSNode/IPFSNode';
import { createBrowserHistory } from "history";



const Head = (props:any) => {
  const { theme, setTheme } = useTheme();
  const [ routeTrack, setRouteTrack ] = [ props.routeTrack, props.setRouteTrack ]
  console.log(`page two rendering ${theme}`);
  let history = createBrowserHistory();
  history.listen(({ action, location }) => {
  console.log(
      `The current URL is ${location.pathname}${location.search}${location.hash}`
    );
    console.log(`The last navigation action was ${action}`);
  });
  console.log({ props })
  return (
    <div className={`head-container`}>
      <h3>HEAD component</h3>

      <div>
        in the head component using react router v6, and
        want to see path history. <code className={theme.toString().toLowerCase()}>yarn add history</code> and then
        this is what is in <code className={theme.toString().toLowerCase()}>history.location.pathname</code> yields
        <span className={`span-highlight-${theme.toString().toLowerCase()}`}> {history.location.pathname} </span>
        while the inline routes are just manually loading route into a state var
      </div>

      <Routes>
        <Route path="/" element={
          /** inline route **/
          <div
            style={{cursor:'pointer'}}
            onClick={()=>{
            setRouteTrack('/');
            console.log(`routeTrack ${routeTrack}`);
          }}>this is an inline route <code className={theme.toString().toLowerCase()}>/  👈 (clickme) </code> <span className={`span-highlight-${theme.toString().toLowerCase()}`}>{props.routeTrack}</span></div>
        } />

        <Route path="/play"
          element={
          /** inline route **/
          <div
            style={{cursor:'pointer'}}
            onClick={()=>{
              setRouteTrack('/play');
              console.log(`routeTrack ${routeTrack}`);
            }}>this is an inline route <code className={theme.toString().toLowerCase()}>/play 👈 (clickme) </code> <span className={`span-highlight-${theme.toString().toLowerCase()}`}>{props.routeTrack}</span></div>
        } />


        <Route path="about" element={
          /** inline route **/
          <div
            style={{cursor:'pointer'}}
            onClick={(e)=>{
              setRouteTrack('/about');
              console.log(`routeTrack ${routeTrack}`);
          }}>this is an inline route <code className={theme.toString().toLowerCase()}>/about  👈 (clickme) </code> <span className={`span-highlight-${theme.toString().toLowerCase()}`}>{props.routeTrack}</span></div>
        } />

        <Route path="cicd" element={
          /** inline route **/
          <div
            style={{cursor:'pointer'}}
            onClick={(e)=>{
              setRouteTrack('/cicd');
              console.log(`routeTrack ${routeTrack}`);
          }}>this is an inline route <code className={theme.toString().toLowerCase()}>/cicd 👈 (clickme) </code> <span className={`span-highlight-${theme.toString().toLowerCase()}`}>{props.routeTrack}</span></div>
        } />

        <Route path="ui-kit" element={
          /** inline route **/
          <div
            style={{cursor:'pointer'}}
            onClick={(e)=>{
              setRouteTrack('/ui-kit');
              console.log(`routeTrack ${routeTrack}`);
          }}>this is an inline route <code className={theme.toString().toLowerCase()}>/ui-kit 👈 (clickme) </code> <span className={`span-highlight-${theme.toString().toLowerCase()}`}>{props.routeTrack}</span></div>
        } />

      </Routes>

      <p>
        So I have a head component which is visibe on the page. I can deploy navigations or other components like stats or notifications.
      </p>

      <p>
        here is what the mode and components making up the mode look like independently rendered. note they both require the overarching context api to work.
      </p>

      <div>
        <Mode />
      </div>
      <div>
        <span>{theme === 'Dark' ? "🌙" : "🌞"}</span>
        <button onClick={() => {
          if(theme === 'Dark'){
            setTheme(Theme.Light)
          }else{
            setTheme(Theme.Dark)
          }
        }}>
          switch to dark theme {theme}
        </button>
      </div>
    </div>
  )
}

export default Head;
