import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import { 
  HistoryPage, 
  ImpactPage, 
  AnthemPage, 
  PublicationsPage, 
  BlogPage, 
  NewsPage, 
  GalleryPage,
  RegistrationPage,
  AboutUsPage
} from './components/Pages';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about-us':
        return <AboutUsPage />;
      case 'history':
        return <HistoryPage />;
      case 'impact':
        return <ImpactPage />;
      case 'registration':
        return <RegistrationPage />;
      case 'anthem':
        return <AnthemPage />;
      case 'publications':
        return <PublicationsPage />;
      case 'blog':
        return <BlogPage />;
      case 'news':
        return <NewsPage />;
      case 'gallery-photo':
      case 'gallery-video':
        return <GalleryPage />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-navy font-sans selection:bg-brand-pink selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <ChatAssistant />
    </div>
  );
}

export default App;