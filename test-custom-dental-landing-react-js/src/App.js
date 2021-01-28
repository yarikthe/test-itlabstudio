import React from 'react';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sections from "./components/section/sections";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = (props) => {

  const state = props.state;
    AOS.init({
        duration : 2000
    })
  return (
    <div className="app">
        <Header/>
        <Sections state={state} />
        <Footer links={state.about.socialLink}/>
    </div>
  );
}

export default App;
