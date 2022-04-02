import './About.css';
import Mode from '../Mode/Mode';
import { useTheme, Theme } from '../../ThemeContext';

export default function About() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>About: Functional Design</h3>
      <p>This site is deployed on ipfs, using react.</p>
      <p>
        It's getting uglier but better, I promise. If you stop by every so often
        you notice I am modernizing my css. Maybe too slowly for some, but I'm
        not really on a timeline here. Most of the focus is on ipfs interaction,
        I want to add in the web3 interaction I've been working with, and then I'm
        improving react, html, and css
      </p>
      <p>
        You can set dark and light mode icon and verify state is changed.
        If you refresh the page you can verify that local storage is being used to persist.
        Right now I am adjusting component styles and their appearance under reactive state changes.
        I can see why designers make a UI kit.
      </p>
      <p>eventually a progressive web app on ipfs with an ecommerce equiped CICD</p>
      <p>what if I get that CICD running docker on a decentralized network?</p>
      <Mode />
    </>
  );
}
