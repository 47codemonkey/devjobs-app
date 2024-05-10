import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '../Home/HomePage';
import { JobPage } from '../JobPage/JobPage';

import { HOME, JOB } from './path';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={`${JOB}/:id`} element={<JobPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
