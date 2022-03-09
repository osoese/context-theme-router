import './About.css';
import Mode from '../Mode/Mode';
import { useTheme, Theme } from '../../ThemeContext';

export default function About() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main>
        <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>About: Functional Design</h3>
        <p>
          You can set dark and light mode icon and verify state is changed.
          If you refresh the page you can verify that local storage is being used to persist.
          Right now I am adjusting component styles and their appearance under reactive state changes.
          I can see why designers make a UI kit.
        </p>
        <Mode />
      </main>
    </>
  );
}
