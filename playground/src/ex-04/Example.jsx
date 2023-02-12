import { createContext, useCallback, useContext, useDebugValue, useMemo, useState } from 'react';

const NameContext = createContext('Lucas');

export default function Example() {
  const [theme, onThemeChange] = useTheme();

  return (
    <>
      <label>
        <input type="checkbox" checked={theme === 'dark'} onChange={onThemeChange} />
        Dark mode
      </label>
      <NameContext.Provider value="Julia">
        <NameContainer myName="Lucy">
          <NameContainer />
        </NameContainer>
      </NameContext.Provider>
      <NameContainer />
    </>
  );
}

function NameContainer({ myName, children }) {
  const name = useContext(NameContext);

  return (
    <NameContext.Provider value={myName}>
      <p>{name}</p>
      {children}
    </NameContext.Provider>
  );
}

function useTheme() {
  const [isDark, setIsDark] = useState(true);

  const handleChange = useCallback(({ target }) => {
    setIsDark(target.checked);
    document.documentElement.classList.toggle('light');
  }, []);

  const propTheme = useMemo(() => {
    return [isDark ? 'dark' : 'light', handleChange];
  }, [isDark]);

  useDebugValue(propTheme[0]);

  return propTheme;
}
