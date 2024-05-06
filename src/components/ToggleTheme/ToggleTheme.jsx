import { IconMoon } from '../../assets/desktop/icons/IconMoon';
import { IconSun } from '../../assets/desktop/icons/IconSun';
import './toggleTheme.css';

export const ToggleTheme = () => {
  return (
    <div className="toggle-wrapper">
      <IconSun />
      <IconMoon />
    </div>
  );
};
