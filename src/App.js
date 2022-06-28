import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import ContactForm from './components/Contact';
import About from './components/About';

function App() {
  const [categories] = useState([
    { name: 'About Me' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <main>
        <div>
          { currentCategory.name === 'About Me' && 
          <About currentCategory={currentCategory}></About> }
          {/* <ContactForm></ContactForm> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
