import { IconMoon } from '../../assets/desktop/icons/IconMoon';
import { IconSun } from '../../assets/desktop/icons/IconSun';
import './toggleTheme.css';

export const ToggleTheme = () => {
  return (
    <div className="toggle-wrapper">
      <IconSun />
      <div class="switch">
        <input id="switch" class="switch__input" name="switch" type="checkbox" />
        <label class="switch__label" for="switch" />
      </div>
      <IconMoon />
    </div>
  );
};
