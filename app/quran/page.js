import Link from 'next/link';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function QuranPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header/>
      {/* Back Button */}
      <div className="bg-[#0a4240] text-white py-6 px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          العودة للرئيسية
        </Link>
      </div>

      {/* Header */}
      <Header/>
      <section className="bg-gradient-to-r from-teal-50 to-teal-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">القرآن الكريم</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            تلاوة، استماع، ودراسة كتاب الله مع خيارات متعددة للقراء والتفاسير المعتمدة
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">تلاوة متعددة الأصوات</h3>
            <p className="text-gray-600">استمع للقرآن من أشهر القراء بجودة عالية</p>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الترجمات</h3>
            <p className="text-gray-600">اقرأ الترجمات الموثوقة بلغات مختلفة</p>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">خيارات البحث المتقدمة</h3>
            <p className="text-gray-600">ابحث عن آيات وسور بسهولة</p>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الحفظ والمشاركة</h3>
            <p className="text-gray-600">احفظ آياتك المفضلة وشارك معهم</p>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">القراءة السريعة</h3>
            <p className="text-gray-600">ميزة القراءة السريعة لاستكشاف السور بسرعة</p>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">وقت قراءة مقدر</h3>
            <p className="text-gray-600">معرفة الوقت المقدر لقراءة كل سورة</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a4240] text-white py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك مع القرآن الآن</h2>
          <p className="text-lg text-gray-200 mb-8">
            اختر من مجموعتنا الشاملة من السور والآيات
          </p>
          <button className="bg-[#169b8b] hover:bg-[#128274] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1">
            ابدأ الآن
          </button>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
