import './Home.css';
import { useTheme, Theme } from '../../ThemeContext';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main className="page-main">
        <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>Functional [web3] Design in React on IPFS</h3>
        <p>refresh page and state remains (TODO: add a state reset to clear local storage)</p>
        <p>
          Perhaps a CI/CD to IPFS deployment; at the momment I am working on
          the in browser node for IPFS, and will move scripts over that work with
          IPFS and NFT crypto functions to work with that IPFS in a dynamic manner.
          Every deployment is being <code className={theme.toString().toLowerCase()}>yarn build</code> for a production release
          which is then loaded onto ipfs and published using ipns. This is to maintain
          the same decentralized web address (because the CID changes with each
          update, but the ipns hash remains the same). Automating that process will
          allow me to tie in web3 capabilities like the previously mentioned NFT,
          and general blockchain activities. This is a very powerful decentralized
          combo of technologies, and to think a React App running in the wild with
          the ability to re-deploy itself, store data, store wealth, and make transactions,
          based on user interaction with any number of blockchains. And, of course we
          are going to make a UI Kit with it to spread the fun.
        </p>
      </main>
    </>
  );
}
