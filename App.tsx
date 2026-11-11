import React, { useCallback, useState } from 'react';
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

  // Every page change starts at the top of the new page.
  const navigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={navigate} />;
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
        return <GalleryPage kind="photo" />;
      case 'gallery-video':
        return <GalleryPage kind="video" />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#main"
        className="btn btn-ink sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200]"
      >
        Skip to content
      </a>
      <Navbar currentPage={currentPage} setCurrentPage={navigate} />

      <main id="main" className="flex-1" key={currentPage}>
        {renderPage()}
      </main>

      <Footer setCurrentPage={navigate} />
      <ChatAssistant />
    </div>
  );
}

export default App;
