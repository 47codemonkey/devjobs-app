import './jobsList.css';

export const JobsList = ({ data }) => {
  return (
    <div className="jobs-wrapper">
      <ul className="jobs-list">
        {data.map(({ postedAt, position, logo, location, id, company, contract, logoBackground }) => (
          <li key={id} className="job">
            <div style={{ '--color': logoBackground }} className="image-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="job-info">
              <div>{postedAt}</div>
              <div className="dot">.</div>
              <div>{contract}</div>
            </div>
            <div>{position}</div>
            <div>{company}</div>
            <div>{location}</div>
          </li>
        ))}
      </ul>
      <div className="btn-wrapper">
        <button className="load-more-btn">Load More</button>
      </div>
    </div>
  );
};
