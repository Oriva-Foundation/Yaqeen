import Link from 'next/link';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
export default function TafsirPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="التفسير"/>
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
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">التفسير</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            غص في معاني الآيات من خلال أبرز كتب التفسير المعتمدة بأسلوب ميسر
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
            <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">تفاسير معتمدة</h3>
            <p className="text-gray-600">أشهر كتب التفسير من العلماء المعروفين</p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
            <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">شرح ميسر</h3>
            <p className="text-gray-600">شروحات بسيطة وسهلة الفهم للجميع</p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
            <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">المعاني اللغوية</h3>
            <p className="text-gray-600">فهم المقاصد والمعاني العميقة للألفاظ</p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
            <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الفوائد الفقهية</h3>
            <p className="text-gray-600">استخراج الأحكام الشرعية من الآيات</p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
            <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">قصص وأمثال</h3>
            <p className="text-gray-600">القصص القرآنية والأمثال المضروبة</p>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
            <div className="w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">المقارنات التفسيرية</h3>
            <p className="text-gray-600">مقارنة بين آراء المفسرين المختلفة</p>
          </div>
        </div>
      </section>

      {/* Featured Tafsirs */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4240] mb-12 text-center">أشهر التفاسير</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'تفسير السعدي', author: 'عبد الرحمن السعدي', desc: 'تفسير ميسر وشامل مشهور' },
              { name: 'تفسير الجلالين', author: 'الجلالين', desc: 'تفسير مختصر وعميق' },
              { name: 'تفسير ابن كثير', author: 'إسماعيل بن كثير', desc: 'من أشهر التفاسير الأثرية' },
              { name: 'تفسير الطبري', author: 'محمد بن جرير الطبري', desc: 'أقدم التفاسير المسندة' },
            ].map((tafsir, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#0a4240] mb-2">{tafsir.name}</h3>
                <p className="text-sm text-amber-700 font-medium mb-2">{tafsir.author}</p>
                <p className="text-gray-600">{tafsir.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a4240] text-white py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">اغوص في معاني القرآن</h2>
          <p className="text-lg text-gray-200 mb-8">
            استفد من أشهر التفاسير والشروحات المعتمدة
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1">
            ابدأ القراءة الآن
          </button>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
