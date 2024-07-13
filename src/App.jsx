import React, { useEffect, useState } from 'react';
import { Navbar, Preloader } from './components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Contact, Home, Store, Work, WorkDetails } from './pages';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const loadContent = async () => {
      // const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    };

    loadContent();
  }, [pathname]);

  return (
    <div>
          {isLoading ? "" : <Navbar />}
          <AnimatePresence mode='wait'>
              {isLoading && <Preloader />}
          </AnimatePresence>
          <>
            
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:id" element={<WorkDetails />} />
              <Route path="/store" element={<Store />} />
            </Routes>
          </>
    </div>
  );
};

export default App;