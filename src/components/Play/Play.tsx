import { useTheme, Theme } from '../../ThemeContext';
import Media from '../../components/Media/Media';
export default function Play() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>Play: I will be playing here</h3>
      <p>
        I have been building some components and functionality for a UiKit. One
        of the components is a media component that can load a number of items
        and even another html site as an iframe (not really a big deal except it's
        dynamically determining what to display by content type out of a simple ipfs
        hash). Well, I did call this page play. One of the things I built to play
        was a couple games.
      </p>
      <p>toc tac toe</p>

        <Media scale='80' height='400' url="https://ipfs.io/ipfs/QmeBbQMeK4YLYsqcBQL5DhhPQAzMnMQ3pu81XhSKxR9Wcw" />
        {/** <Media scale='80' height='400' url="https://osoese.github.io/tic-tac-toe-game.html" /> **/}


        {/** this does not scale well **/}
        {/** <Media scale='80' height='400' url="https://osoese.github.io/css-3d3.html" /> **/}

        
    </>
  );
}
