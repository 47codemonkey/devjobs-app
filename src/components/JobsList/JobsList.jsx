import './jobsList.css';

import { Link } from 'react-router-dom';

export const JobsList = ({ data }) => {
  return (
    <div className="jobs-wrapper">
      <ul className="jobs-list">
        {data.map(({ postedAt, position, logo, location, id, company, contract, logoBackground }) => (
          <li key={id} className="job">
            <Link to={`/job/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ '--color': logoBackground }} className="image-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="job-info">
                <div>{postedAt}</div>
                <div className="dot">.</div>
                <div>{contract}</div>
              </div>
              <div className="position-name">{position}</div>
              <div className="company-name">{company}</div>
              <div className="location-name">{location}</div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="btn-wrapper">
        <button className="load-more-btn">Load More</button>
      </div>
    </div>
  );
};
