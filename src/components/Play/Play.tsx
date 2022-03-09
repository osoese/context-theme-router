import { useTheme, Theme } from '../../ThemeContext';
export default function Play() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main>
        <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>Play: I will be playing here</h3>
        <p>
          Building some components and functionality for UiKit
        </p>
      </main>
    </>
  );
}
