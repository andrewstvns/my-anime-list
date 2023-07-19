import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AppRoutes from 'config/routes';
import { Loader } from 'components';


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;