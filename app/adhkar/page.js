import Link from 'next/link';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

export default function AdhkarPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="عن المنصة"/>
      <div className="bg-[#0a4240] text-white py-6 px-6 md:px-12">
        <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          العودة للرئيسية
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">الأذكار والأدعية</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            حصن المسلم اليومي من الأذكار والأدعية المأثورة بتصميم يسهل القراءة
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 008.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">أذكار موثوقة</h3>
            <p className="text-gray-600">أذكار وأدعية مختارة من المصادر الموثوقة</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">أذكار بوقتها</h3>
            <p className="text-gray-600">أذكار الصباح والمساء وأوقات محددة</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">أدعية مختلفة</h3>
            <p className="text-gray-600">أدعية للسفر والمرض والقنوت وغيرها</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">تلاوة صوتية</h3>
            <p className="text-gray-600">استمع للأذكار والأدعية بصوت جميل</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">حفظ وتذكير</h3>
            <p className="text-gray-600">حفظ أذكارك المفضلة وتذكيرات يومية</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الشرح والتفسير</h3>
            <p className="text-gray-600">شرح معاني الأذكار والأدعية</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zm0 0c-1.11 0-2.08.402-2.599 1M12 6v2m0-14c-1.11 0-2.08.402-2.599 1m0-14c1.11 0 2.08.402 2.599 1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">فضائل الأذكار</h3>
            <p className="text-gray-600">معرفة فضائل كل ذكر وفائدته</p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 8a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">العده الصحيحة</h3>
            <p className="text-gray-600">معرفة عدد مرات قول الذكر</p>
          </div>
        </div>
      </section>

      {/* Adhkar Categories */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4240] mb-12 text-center">فئات الأذكار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'أذكار الصباح', slug: 'morning-adhkar', desc: 'الأذكار المشروعة عند بداية اليوم' },
              { name: 'أذكار المساء', slug: 'evening-adhkar', desc: 'الأذكار المشروعة عند نهاية اليوم' },
              { name: 'أذكار النوم', slug: 'sleep-adhkar', desc: 'الأذكار المشروعة قبل النوم' },
              { name: 'أذكار الاستيقاظ', slug: 'waking-adhkar', desc: 'الأذكار المشروعة عند الاستيقاظ' },
              { name: 'أذكار الطعام', slug: 'meal-adhkar', desc: 'الأذكار عند الأكل والشرب' },
              { name: 'أذكار المسجد', slug: 'mosque-adhkar', desc: 'الأذكار المشروعة في المسجد' },
              { name: 'دعاء ختم القرآن', slug: 'quran-completion-dua', desc: 'الدعاء المستحب عند ختم القرآن' },
              { name: 'أدعية الاستسقاء', slug: 'rain-dua', desc: 'الأدعية عند طلب المطر' },
              { name: 'أدعية الشفاء', slug: 'healing-dua', desc: 'أدعية للدعاء على المريض' },
            ].map((category, idx) => (
              <Link key={idx} href={`/adhkar/${category.slug}`} className="block">
                <div className="bg-white p-6 rounded-lg border border-emerald-200 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-lg font-bold text-[#0a4240] mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a4240] text-white py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">احم نفسك بالأذكار</h2>
          <p className="text-lg text-gray-200 mb-8">
            حصن نفسك يومياً بأذكار وأدعية مختارة من السنة الصحيحة
          </p>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1">
            ابدأ الأذكار الآن
          </button>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
