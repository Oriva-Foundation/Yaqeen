import Image from "next/image";

import Header from './components/Header'; 
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header activeTab="الرئيسية" />

      <main className="flex-grow bg-white" dir="rtl">
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}
