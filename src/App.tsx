import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyEpoxySection from './components/WhyEpoxySection';
import ServicesSection from './components/ServicesSection';
import FloorTypesSection from './components/FloorTypesSection';
import FinitionsSection from './components/FinitionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FloatingQuoteButton from './components/FloatingQuoteButton';
import MentionsLegales from './pages/MentionsLegales';
import Blog from './pages/Blog';
import Guides from './pages/Guides';
import Conseils from './pages/Conseils';
import Entretien from './pages/Entretien';
import Securite from './pages/Securite';
import Support from './pages/Support';
import DevisPage from './pages/DevisPage';
import ScrollToHash from './components/ScrollToHash'; // Import the new component
import HeaderSwitcher from './components/HeaderSwitcher';
import HiddenAdminBlog from './pages/HiddenAdminBlog';
import BlogDetails from './pages/BlogDetails';
import AdminLogin from './pages/AdminLogin'; // Import AdminLogin component

const HomePage = () => (
  <div className="font-manrope">
    <HeroSection />
    <AboutSection />
    <WhyEpoxySection />
    <ServicesSection />
    <FloorTypesSection />
    <FinitionsSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
  </div>
);

// ProtectedRoute component to check authentication status
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <HeaderSwitcher />
      <ScrollToHash isLoading={isLoading} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route path="/entretien" element={<Entretien />} />
        <Route path="/securite" element={<Securite />} />
        <Route path="/support" element={<Support />} />
        <Route path="/devis" element={<DevisPage />} />
        <Route path="/admin/login" element={<AdminLogin />} /> {/* Admin Login Route */}
        <Route element={<ProtectedRoute />}> {/* Protected Route Wrapper */}
          <Route path="/admin/blog-import" element={<HiddenAdminBlog />} />
        </Route>
      </Routes>
      <Footer />
      <FloatingQuoteButton />
    </Router>
  );
}

export default App;