import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { ListPage } from './pages/ListPage';
import { DetailsPage } from './pages/DetailsPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<ListPage />} />
            <Route path=":briefId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};