import { memo } from 'react';

export default memo(function Theme({ isDark, onChangeTheme }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={isDark}
        onChange={({ target }) => {
          document.documentElement.classList.toggle('light');
          onChangeTheme(target.checked);
        }}
      />
      Dark mode
    </label>
  );
});
