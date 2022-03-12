import { useTheme, Theme } from '../../ThemeContext';
import './UiKit.css';
import Media from '../../components/Media/Media';
import Mode from '../../components/Mode/Mode';
export default function UiKit() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main>
        <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>UiKit: There will be UiKit here</h3>
        <p>
          UiKit components and how to use them
        </p>
        <p>
          While not required for raw material, we have a need for some
          compontent break out functionlity that can be parted out and
          sourceed as enhanced function. Components with plug and
          play parts that can overly more professional base layers.
        </p>
        <p>
          ...and can play with css, animations, svg and javascript tweaks that
          might be re-used. We have a small collection:
          <ul style={{margin:'10px'}}>
            <div className="ul-row">
              <li>
                <div className="divRow">
                  <div>IPFS Media</div>
                  <div className="uiKit-media-wrap">
                    <Media url="https://ipfs.io/ipfs/QmWJ3HnbLKm3WM2rkjugbUJ1tNj5iWLb8ZbUJUw5GkhWmJ" />
                  </div>
                  <div className="uiKit-media-wrap">
                    <Media url="https://ipfs.io/ipfs/QmZLGyUfssNR4xmkLS2oYA1h9HwpUbCPSbLKZVq97xftZ5" />
                  </div>
                </div>
              </li>

            </div>
            <div className="ul-row">
              <li>
                <div className="divRow">
                  <div style={{minWidth:'100%'}}>Mode Toggle</div>
                  <div style={{border:'1px dashed green',padding:'20px',margin:'10px'}}>can I put the component here?</div>
                  <div className="uiKit-media-wrap">
                    <Mode />
                  </div>
                  <div className="uiKit-media-wrap">
                    <Mode />
                  </div>
                </div>
              </li>
            </div>
            <li>another one</li>
            <li>another one</li>
            <li>another one</li>
            <li>video to qr code</li>
          </ul>
        </p>
      </main>
    </>
  );
}
