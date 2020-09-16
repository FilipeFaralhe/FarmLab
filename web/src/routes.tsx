import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import PageLogin from './pages/PageLogin';
import PageRegister from './pages/PageRegister';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={PageLogin}/>
      <Route path='/register' component={PageRegister}/>
    </BrowserRouter>
  );
}

export default Routes;