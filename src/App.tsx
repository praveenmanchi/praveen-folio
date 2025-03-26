import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter import
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe/AboutMe';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import PageTransition from './components/PageTransition/PageTransition';
import MyDesignProcess from './pages/MyDesignProcess/MyDesignProcess';
import CaseStudyDetails from './pages/caseStudyDetails/caseStudyDetails';

const App: React.FC = () => {
  return (
    <div style={{ margin: '0' }}>
      <Header />
      <PageTransition type='slide' duration={0.7}>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/casestudies' element={<CaseStudies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/designprocess' element={<MyDesignProcess />} />
          <Route path='/casestudies/:id' element={<CaseStudyDetails />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default App;
