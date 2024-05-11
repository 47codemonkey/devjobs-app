import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './jobInfo.css';

export const JobInfo = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`https://6610fce60640280f219de13f.mockapi.io/jobs/${id}`);
        setJobData(response.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobData();
  }, [id]);

  const {
    logo,
    logoBackground,
    company,
    website,
    position,
    contract,
    postedAt,
    location,
    description,
    requirements,
    role,
  } = jobData;

  return (
    <>
      <div className="job-wrapper">
        <div className="job-header">
          <div style={{ '--color': logoBackground }} className="job-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="company-info-wrapper">
            <div className="company-info">
              <div className="job-company-name">{company}</div>
              <div className="job-company-website">{website}</div>
            </div>
            <button className="company-site-btn">Company site</button>
          </div>
        </div>
        <div className="job-description-wrapper">
          <div className="job-info-wrapper">
            <div className="job-information-wrapper">
              <div className="job-information">
                <div>{postedAt}</div>
                <div className="dot">.</div>
                <div>{contract}</div>
              </div>
              <div className="job-position">{position}</div>
              <div className="job-location">{location}</div>
            </div>
            <div className="apply-now-btn-wrapper">
              <button className="apply-now-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-description">{description}</div>
          <h2>Requirements:</h2>
          {requirements?.content && <div className="job-content">{requirements.content}</div>}
          <ul className="job-item">
            {requirements?.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h2>Role:</h2>
          {role?.content && <div className="job-role-content">{role.content}</div>}
          <ul className="role-item">
            {role?.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <footer className="footer-wrapper">
        <div className="footer-job-wrapper">
          <div className="footer-job-info">
            <div className="footer-job-position">{position}</div>
            <div>{company}</div>
          </div>
          <button className="footer-btn">Apply Now</button>
        </div>
      </footer>
    </>
  );
};
