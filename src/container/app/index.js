import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AppRoutes from 'config/routes';


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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