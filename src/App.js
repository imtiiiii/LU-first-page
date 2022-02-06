import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <>
      <div className='bg-[#eee]'>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;