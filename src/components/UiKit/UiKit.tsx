import { useTheme, Theme } from '../../ThemeContext';
export default function UiKit() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main>
        <h3 className={`h3 h3-${theme.toString().toLowerCase()}`}>UiKit: There will be UiKit here</h3>
        <p>
          UiKit components and how to use them
        </p>
      </main>
    </>
  );
}
