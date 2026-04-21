const Footer = () => {
  const footerLinks = ['رؤيتنا', 'رسالتنا', 'اتصل بنا', 'سياسة الخصوصية'];

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-[#f1f5f9] mt-auto border-t border-gray-200">
      
      <div className="text-xl font-extrabold text-[#0a4240] tracking-wide mb-4 md:mb-0">
        Yaqeen
      </div>

      <nav dir="rtl" className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
        {footerLinks.map((link) => (
          <span key={link} className="text-sm text-gray-500 hover:text-[#0a4240] transition-colors font-medium cursor-pointer">
            {link}
          </span>
        ))}
      </nav>

      <div dir="rtl" className="text-sm text-gray-500 font-medium">
        © 2026 يقين. جميع الحقوق محفوظة.
      </div>
      
    </footer>
  );
};

export default Footer;