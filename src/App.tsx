import './App.scss';
import React, { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Preloader from './components/Preloader/Preloader';

const App = () => {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    },2000);
  });

  return (
  <React.Fragment>
    {isLoading ? <Preloader /> : <Home />}
  </React.Fragment>
  );
}

export default App;
