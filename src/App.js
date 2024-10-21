import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing routing components
import { AuthProvider } from './AuthContext';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import CitySection from './components/CitySection';
import InternshipTab from './components/InternshipTab';
import CoursesTab from './components/CoursesTab';
import InternshipsPage from './components/InternshipsPage';
import CoursesPage from './components/CoursesPage';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import ContactForm from './components/ContactForm';

const HomePage = () => (
  <div>
    <TopBanner />
    <HeroSection />
    <CategorySection />
    <CitySection />
     {/* Box for InternshipTab */}
     <div className="w-full mx-auto my-6 p-4 bg-white rounded-lg shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300">
      <InternshipTab />
    </div>

    {/* Box for CoursesTab */}
    <div className="w-full mx-auto my-6 p-4 bg-white rounded-lg shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 transition-shadow duration-300">
      <CoursesTab />
    </div>
    <Footer />
  </div>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use useEffect to set the class on the body based on the theme
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark'); // Add dark class to body
    } else {
      document.body.classList.remove('dark'); // Remove dark class from body
    }
  }, [isDarkMode]);

  return (
    <AuthProvider> {/* Wrap your entire app with AuthProvider */}
      <Router>  {/* Add Router */}
        <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300`}>
          <Header />
         
          <Routes> {/* Add Routes for different pages */}
            <Route path="/" element={<HomePage />} /> {/* Homepage showing various sections */}
            <Route path="/internships" element={<InternshipsPage />} /> {/* Internships Page */}
            <Route path="/courses" element={<CoursesPage />} /> {/* Courses Page */}
            <Route path="/auth" element={<Auth />} /> {/* Auth Page */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Page */}
            <Route path="/contact" element={<ContactForm />} /> {/* Contact Form Page */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
