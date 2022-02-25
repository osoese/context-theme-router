import * as React from 'react';
import './PageOne.css';
import { useTheme } from '../../ThemeContext';
import PageTwo from '../../pages/PageTwo/PageTwo'; // nested component
import Media from '../../components/Media/Media';
import Mode from '../../components/Mode/Mode';

const PageOne = () => {
  const { theme, setTheme } = useTheme();
  console.log(`page one function rendering ${theme}`);

  return (
    <div className={`p1p-${theme.toString().toLowerCase()}`}>
        <div style={{margin:'20px'}}>
          <span style={{padding:'5px'}}>this Mode component toggles between light and dark mode and is nested in page one</span>
            <Mode />
          <span style={{padding:'5px'}}>i'm in the process of refining the css</span>
        </div>
        <div className={`p1p-wrap-${theme.toString().toLowerCase()}`}>
          <span style={{padding:'15px'}}>this Media component calls an ipfs gif image and is nested in page one</span>
          <div className={`divRow`}>
            <Media url="https://ipfs.io/ipfs/QmWJ3HnbLKm3WM2rkjugbUJ1tNj5iWLb8ZbUJUw5GkhWmJ" />
            <Media url="https://ipfs.io/ipfs/Qmeio5BXCSTmnuu6SXznXpSiaZpBDewoThQXDs5kpcS3iM" />
          </div>
          <span style={{padding:'15px'}}>this Media component calls an ipfs video (mp4) and is nested in page one</span>
          <div className={`divRow`}>
            <Media url="https://ipfs.io/ipfs/QmcNtgAdi9fnHWHQa5QxWLFtRYNuyiHCe8VJyYXxLm55HX" />
            <Media url="https://ipfs.io/ipfs/QmZLGyUfssNR4xmkLS2oYA1h9HwpUbCPSbLKZVq97xftZ5" />
          </div>
          <span style={{padding:'15px'}}>i'm in the process of refining the css</span>
        </div>
        <div className={`p1p-wrap-${theme.toString().toLowerCase()}`}>
          <p>Page One needs some style</p>
          <p>PageTwo is the component 👇</p>
        </div>
        <div className="page-wrapper">
          <PageTwo />
        </div>
    </div>
  )
}

export default PageOne;
