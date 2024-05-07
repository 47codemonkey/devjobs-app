import { IconSearch } from '../../assets/desktop/icons/IconSearch';
import { IconLocation } from '../../assets/desktop/icons/IconLocation';
import './search.css';

export const Search = () => {
  return (
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
        <input type="checkbox" name="" />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
