import Link from 'next/link';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function HadithPage() {
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
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">الحديث الشريف</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            موسوعة شاملة للأحاديث النبوية الصحيحة من المصادر الموثوقة
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">تصنيفات متعددة</h3>
            <p className="text-gray-600">أحاديث منظمة حسب المصادر والموضوعات</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">تقييمات الصحة</h3>
            <p className="text-gray-600">معلومات عن درجة صحة كل حديث</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">السند الكامل</h3>
            <p className="text-gray-600">الإسناد الكامل لكل حديث من المصادر الأصلية</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">البحث المتقدم</h3>
            <p className="text-gray-600">ابحث عن أحاديث بالراوي أو الموضوع</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">التراجم والرواة</h3>
            <p className="text-gray-600">معلومات عن الرواة والمحدثين</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الحفظ والتعليقات</h3>
            <p className="text-gray-600">احفظ الأحاديث واضف تعليقاتك عليها</p>
          </div>
        </div>
      </section>

      {/* Hadith Collections */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4240] mb-12 text-center">مصادر الحديث</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'صحيح البخاري', count: '7,275', reliability: 'صحيح' },
              { name: 'صحيح مسلم', count: '5,033', reliability: 'صحيح' },
              { name: 'سنن الترمذي', count: '3,956', reliability: 'متنوع' },
              { name: 'سنن ابن ماجة', count: '4,341', reliability: 'متنوع' },
              { name: 'سنن النسائي', count: '5,270', reliability: 'صحيح' },
              { name: 'سنن أبي داود', count: '5,274', reliability: 'متنوع' },
            ].map((collection, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#0a4240] mb-2">{collection.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">{collection.count} حديث</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{collection.reliability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a4240] text-white py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">استكشف كنوز السنة</h2>
          <p className="text-lg text-gray-200 mb-8">
            اطلع على أحاديث موثوقة من أشهر المصادر الإسلامية
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1">
            ابدأ البحث الآن
          </button>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
