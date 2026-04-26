'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = ({ activeTab = 'الرئيسية' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'عن المنصة', href: '/about' },
    { name: 'الأذكار', href: '/adhkar' },
    { name: 'المقالات', href: '/articles' },
    { name: 'التفسير', href: '/tafsir' },
    { name: 'الحديث', href: '/hadith' },
    { name: 'القرآن', href: '/quran' },
    { name: 'الرئيسية', href: '/' },
  ];

  return (
    <header className="relative bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4 md:px-8">
        <div className="text-2xl font-extrabold text-[#0a4240] tracking-wide">Yaqeen</div>

        <nav dir="rtl" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`pb-2 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === link.name
                  ? 'text-[#169b8b] border-b-2 border-[#169b8b]'
                  : 'text-gray-600 hover:text-[#0a4240]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#0a4240] text-[#0a4240] hover:bg-gray-50 transition"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-4">
          <nav dir="rtl" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                  activeTab === link.name
                    ? 'bg-emerald-50 text-[#169b8b]'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;