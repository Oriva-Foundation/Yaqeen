import Link from 'next/link';

export default function HeroSection() {
  const cardsData = [
    {
      id: 1,
      title: 'القرآن الكريم',
      desc: 'تلاوة، استماع، ودراسة كتاب الله مع خيارات متعددة للقراء والتفاسير المعتمدة.',
      href: '/quran',
      wrapperClass: 'bg-teal-50/40 border-teal-600 hover:shadow-teal-100',
      iconBg: 'bg-teal-800',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'التفسير',
      desc: 'غص في معاني الآيات من خلال أبرز كتب التفسير المعتمدة بأسلوب ميسر.',
      href: '/tafsir',
      wrapperClass: 'bg-amber-50/40 border-amber-600 hover:shadow-amber-100',
      iconBg: 'bg-amber-700',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'الحديث الشريف',
      desc: 'موسوعة شاملة للأحاديث النبوية الصحيحة من المصادر الموثوقة.',
      href: '/hadith',
      wrapperClass: 'bg-blue-50/50 border-blue-500 hover:shadow-blue-100',
      iconBg: 'bg-blue-300',
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'شرح الأحاديث',
      desc: 'شروحات وافية ومبسطة للأحاديث النبوية لتسهيل فهم السنة وتطبيقها.',
      href: '/hadith-explanation',
      wrapperClass: 'bg-indigo-50/50 border-indigo-500 hover:shadow-indigo-100',
      iconBg: 'bg-indigo-600',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'الأذكار والأدعية',
      desc: 'حصن المسلم اليومي من الأذكار والأدعية المأثورة بتصميم يسهل القراءة.',
      href: '/adhkar',
      wrapperClass: 'bg-emerald-50/50 border-emerald-600 hover:shadow-emerald-100',
      iconBg: 'bg-emerald-800',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'المعرفة الإسلامية / المقالات',
      desc: 'مقالات وبحوث معمقة في مختلف فروع العلوم الإسلامية المعاصرة.',
      href: '/articles',
      wrapperClass: 'bg-slate-50 border-slate-400 hover:shadow-slate-100',
      iconBg: 'bg-slate-300',
      icon: (
        <svg className="w-8 h-8 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="relative bg-[#0a4240] text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#169b8b] opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
           يقين <br /> من القرآن والسنة… .
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            منصة شاملة لتقديم المعرفة الإسلامية الأصيلة، نجمع لك بين دقة المصادر وسهولة الوصول، ليكون القرآن والسنة رفيقيك في كل مكان.
          </p>
          <button className="bg-[#169b8b] hover:bg-[#128274] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1 shadow-lg">
            ابدأ رحلتك المعرفية
          </button>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0a4240] mb-4">أقسام المنصة</h2>
          <div className="w-24 h-1 bg-[#169b8b] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <Link 
              key={card.id}
              href={card.href}
              className={`flex flex-col items-center text-center p-8 rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 shadow-sm cursor-pointer ${card.wrapperClass}`}
            >
              <div className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 shadow-sm ${card.iconBg}`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f1f5f9] py-16 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-[#169b8b]"></div>
          <h3 className="text-lg font-bold text-[#169b8b] mb-6 tracking-wide">آيـــــة اليـــــوم</h3>
          <p className="text-2xl md:text-3xl font-amiri text-[#0a4240] leading-loose mb-8">
            "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا"
          </p>
          <span className="text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-full text-sm border border-gray-100">
            سورة الإسراء - آية ٩
          </span>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#0a4240] rounded-2xl flex items-center justify-center mb-6 text-white rotate-3 hover:rotate-0 transition-all">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">الأصالة والموثوقية</h4>
            <p className="text-gray-600">نستند إلى المصادر المعتمدة والتراث العلمي الرصين لضمان دقة المعرفة.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#0a4240] rounded-2xl flex items-center justify-center mb-6 text-white -rotate-3 hover:rotate-0 transition-all">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">الوضوح واليسر</h4>
            <p className="text-gray-600">نقدم المحتوى بأسلوب مبسط ومعاصر يسهل فهمه للمستخدم العادي والمتخصص.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#0a4240] rounded-2xl flex items-center justify-center mb-6 text-white rotate-3 hover:rotate-0 transition-all">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">الشمولية</h4>
            <p className="text-gray-600">نسعى لتغطية مختلف جوانب المعرفة الإسلامية لتلبية احتياجات الباحثين.</p>
          </div>
        </div>
      </section>
    </>
  );
}