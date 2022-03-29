import { useTheme, Theme } from '../../ThemeContext';
import './UiKit.css';
import Media from '../../components/Media/Media';
import Mode from '../../components/Mode/Mode';
import QRCode from 'react-qr-code';
export default function UiKit() {
  const { theme, setTheme } = useTheme();
  return (
    <>
        <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>UiKit: There will be UiKit here</h3>
        <p>
          UiKit components (WIP)
        </p>
        <p>
          (just under core) Components that can overly other components ea focused on a unique function
        </p>
        <p>
          <span>
            ...and tinkering with css, animations, svg and javascript for re-use
          </span>
          <ul>
            <li>
              <div className="liHeader">IPFS Media</div>
              <div className="divRow">
                <div className="uiKit-media-wrap">
                  <Media url="https://ipfs.io/ipfs/QmWJ3HnbLKm3WM2rkjugbUJ1tNj5iWLb8ZbUJUw5GkhWmJ" />
                </div>
                <div className="uiKit-media-wrap">
                  <Media url="https://ipfs.io/ipfs/QmZLGyUfssNR4xmkLS2oYA1h9HwpUbCPSbLKZVq97xftZ5" />
                </div>
              </div>
            </li>
            <li>
              <div className="liHeader">IPFS Media</div>
              <div className="divRow">

                {/***}
                <div className="uiKit-media-wrap">
                  <Media url="https://ipfs.io/ipfs/QmXm4MSrS2mWznkRTe5GKhwHcH7HzNuszrEXJYTo1tD3gk" />
                </div>
                ***/}


                <div className="uiKit-media-wrap">
                  <Media url="https://ipfs.io/ipfs/QmXiwDZXtqm3zXWMdaZS1XgK9KxaNVoLiTMawG8HwQbLVg" />
                </div>


                <div className="uiKit-media-wrap">
                  <Media url="https://ipfs.io/ipfs/QmPrewaM8pGH8GjjMGHRpwz2TMuVUEwA1254pi5nQ2HgVP" />
                </div>
              </div>
            </li>
            <li>
              <div className="liHeader">Mode Toggle</div>
              <div className="divRow">
                <div style={{border:'1px dashed green',padding:'20px',margin:'10px'}}>can I put the component here?</div>
                <div className="uiKit-media-wrap">
                  <Mode />
                </div>
                <div className="uiKit-media-wrap">
                  <Mode />
                </div>
              </div>
            </li>
            <li>
              <div>ThirdParty React package component</div>
              <div><QRCode value="hey" /></div>
            </li>
            <li>another one</li>
            <li>another one</li>
            <li>video to qr code</li>
          </ul>
        </p>
    </>
  );
}
