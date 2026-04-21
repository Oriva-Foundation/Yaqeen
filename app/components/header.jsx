import Link from 'next/link';

const Header = ({ activeTab = 'الرئيسية' }) => {
  const navLinks = [
    { name: 'عن المنصة', href: '/adhkar' },
    { name: 'المقالات', href: '/articles' },
    { name: 'التفسير', href: '/tafsir' },
    { name: 'الحديث', href: '/hadith' },
    { name: 'القرآن', href: '/quran' },
    { name: 'الرئيسية', href: '/' },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
      
      <div className="text-2xl font-extrabold text-[#0a4240] tracking-wide">
        Yaqeen
      </div>

      <nav dir="rtl" className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
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

      
      <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#0a4240] text-[#0a4240] cursor-pointer hover:bg-gray-50 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </div>
      
    </header>
  );
};

export default Header;