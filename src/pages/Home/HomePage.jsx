import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { JobsList } from '../../components/JobsList/JobsList';

import axios from 'axios';

import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  const URL = 'https://6610fce60640280f219de13f.mockapi.io/jobs';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setJobs(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Search />
      <JobsList data={jobs} />
    </>
  );
};
