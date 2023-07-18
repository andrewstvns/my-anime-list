import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AppRoutes from 'config/routes';


const App = () => {
  return (
    <Router>
      <Routes>
        {AppRoutes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;