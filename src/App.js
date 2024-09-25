import React, { useEffect } from 'react';
import { 
  Home, Services, Work, Blog, Career, About ,Header , Route ,useLocation ,Router , Routes,
  QuoteSection, Footer
} from './components/import';
import './components/style/common.css';

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
      <SetTitle />
       
      <QuoteSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;