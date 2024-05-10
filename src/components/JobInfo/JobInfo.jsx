import './jobInfo.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

  return (
    <>
      <div className="job-wrapper">
        <div className="job-header">
          <img className="job-img" src={jobData.logo} alt="Company Logo" />
          <div className="company-info-wrapper">
            <div className="company-info">
              <div>{jobData.company}</div>
              <div>{jobData.website}</div>
            </div>
            <button className="company-site-btn">Company site</button>
          </div>
        </div>
      </div>
      <div className="job-description">
        <div>{jobData.description}</div>
        <div className="dot">.</div>
        {jobData?.requirements?.content && <div>{jobData.requirements.content}</div>}
      </div>
      <div>
        <div className="position-name">{jobData.position}</div>
        <button>Apply Now</button>
      </div>
      <div className="location-name">{jobData.location}</div>
      <p>ppp</p>
      <footer>
        <div>
          <div>jjj</div>
          <div>kkk</div>
        </div>
        <button>Apply Now</button>
      </footer>
    </>
  );
};

{
  /* <div className="job-wrapper">
<div className="job-header">
  <img className="job-img" src={jobData.logo} alt="Company Logo" />
  <div className="company-info-wrapper">
    <div className="company-info">
      <div>{jobData.company}</div>
      <div>{jobData.website}</div>
    </div>
    <button className="company-site-btn">Company site</button>
  </div>
</div>
</div>
<div className="job-description">
<div>{jobData.description}</div>
<div className="dot">.</div>
<div>{jobData.requirements}</div>
</div>
<div>
<div className="position-name">{jobData.position}</div>
<button>Apply Now</button>
</div>
<div className="location-name">{jobData.location}</div>
<p>ppp</p>
<footer>
<div>
  <div>jjj</div>
  <div>kkk</div>
</div>
<button>Apply Now</button>
</footer> */
}
