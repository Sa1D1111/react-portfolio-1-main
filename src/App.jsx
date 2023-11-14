import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        
        {/* <Router>
       <Routes>
         <Route path="/test" element={<Abouts />} />
       </Routes>
     </Router> */}

     
    </>
    
  )
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
// import Header from './components/header/Header';
// import Nav from './components/nav/Nav';
// import About from './components/about/About';
// import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
// import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import AiPage from './components/AiPage';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Nav />
//       <Routes>
//         <Route path="/ai" element={<AiPage />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// // Home component for the root path
// const Home = () => (
//   <>
//     <About />
//     <Experience />
//     <Services />
//     <Portfolio />
//     <Testimonials />
//     <Contact />
//   </>
// );

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/header/Header';
// import Nav from './components/nav/Nav';
// import About from './components/about/About';
// import Experience from './components/experience/Experience';
// import Services from './components/services/Services';
// import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';
// import NewPage from './NewPage'; // Import the NewPage component

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Nav />
//       <Routes>
//         <Route path="/new-page" element={<NewPage />} />
//         {/* Add other routes here */}
//       </Routes>
//       <About />
//       <Experience />
//       <Services />
//       <Portfolio />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </Router>
//   );
// };

// export default App;
