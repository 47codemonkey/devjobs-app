import { IconMoon } from '../../assets/desktop/icons/IconMoon';
import { IconSun } from '../../assets/desktop/icons/IconSun';
import './toggleTheme.css';

export const ToggleTheme = () => {
  return (
    <div className="toggle-wrapper">
      <IconSun />
      <div className="switch">
        <input id="switch" className="switch__input" name="switch" type="checkbox" />
        <label className="switch__label" htmlFor="switch" />
      </div>
      <IconMoon />
    </div>
  );
};
