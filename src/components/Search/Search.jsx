import { IconSearch } from '../../assets/desktop/icons/IconSearch';
import { IconLocation } from '../../assets/desktop/icons/IconLocation';
import './search.css';

export const Search = () => {
  return (
    <div className="search-wrapper">
      <form className="search-form-wrapper">
        <div className="search-input-wrapper">
          <IconSearch />
          <input className="search-input" type="text" name="" placeholder="Filter by title, companies, expertise..." />
        </div>
        <div className="location-input-wrapper">
          <IconLocation />
          <input className="location-input" type="text" name="" placeholder="Filter by location..." />
        </div>
        <div className="search-btn-wrapper">
          <input className="checkbox-input" type="checkbox" id="myCheckbox" name="" />
          <label className="label-name" htmlFor="myCheckbox">
            Full Time Only
          </label>
          <button className="search-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
