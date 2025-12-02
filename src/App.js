import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import DownloadsScreen from './screens/DownloadsScreen';

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/product/:id" element={<Container className="py-3"><ProductScreen /></Container>} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/downloads" element={<DownloadsScreen />} />
          </Routes>
        </main>
        <Footer />  
      </>
    </Router>
  );
}

export default App;
