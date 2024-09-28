import React, { useEffect } from 'react';
import { 
  Home, Services, Work, Blog, Career, About ,Header , Route ,useLocation ,Router , Routes,
  QuoteSection, Footer , ScrollToTopBtn ,ServiceDetailedPage
} from './components/import';
import './components/style/common.css';
import Contact from './components/Contact';
import { StartWithTop } from './components/common/scrollToTopBtn';
 
 

function SetTitle() {
  const location = useLocation();
  const baseTitle = "potato-studio.vercel.app";

  useEffect(() => {
    document.title = location.pathname === '/' || location.pathname === '/home'
      ? baseTitle
      : `${baseTitle} ${location.pathname}`;
  }, [location]);

  return null;
}

function App() {
  
  return (
    <Router>
      <Header />
      <StartWithTop />
      <ScrollToTopBtn />
      <SetTitle />
       
      <QuoteSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetailedPage />} /> 
        {/* <Route path="/services/:serviceId" element={<ServiceDetailedPage />} />  */}
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;