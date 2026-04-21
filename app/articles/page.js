import Link from 'next/link';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="المقالات"/>
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
      <section className="bg-gradient-to-r from-slate-50 to-slate-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">المعرفة الإسلامية</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            مقالات وبحوث معمقة في مختلف فروع العلوم الإسلامية المعاصرة
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">مقالات متنوعة</h3>
            <p className="text-gray-600">مقالات في مختلف المجالات الإسلامية</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">بحوث معمقة</h3>
            <p className="text-gray-600">دراسات شاملة وبحثية متخصصة</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">مواضيع معاصرة</h3>
            <p className="text-gray-600">معالجة القضايا الإسلامية المعاصرة</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">أسئلة وأجوبة</h3>
            <p className="text-gray-600">إجابات على أسئلة إسلامية متكررة</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">خاطرات روحانية</h3>
            <p className="text-gray-600">تأملات روحية وعبر تربوية</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">حفظ ومشاركة</h3>
            <p className="text-gray-600">احفظ مقالاتك المفضلة وشاركها</p>
          </div>
        </div>
      </section>

      {/* Article Categories */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4240] mb-12 text-center">فئات المقالات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'العقيدة والتوحيد', count: '24' },
              { name: 'الفقه والأحكام', count: '38' },
              { name: 'السيرة والتاريخ', count: '19' },
              { name: 'التربية الإسلامية', count: '31' },
              { name: 'الأخلاق والسلوك', count: '27' },
              { name: 'الأسرة والزواج', count: '22' },
              { name: 'الاقتصاد الإسلامي', count: '16' },
              { name: 'الطب والعلوم', count: '14' },
              { name: 'الدعوة والتبليغ', count: '20' },
            ].map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-lg font-bold text-[#0a4240] mb-2">{category.name}</h3>
                <p className="text-sm text-slate-600">{category.count} مقالة</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0a4240] mb-12 text-center">المقالات المختارة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'أهمية العلم في الإسلام', author: 'د. محمد الشنقيطي', date: '15 أبريل 2026' },
            { title: 'التعامل مع الضغوط النفسية من منظور إسلامي', author: 'د. طارق السويدان', date: '12 أبريل 2026' },
            { title: 'حقوق الوالدين في الإسلام', author: 'الشيخ محمود المصري', date: '10 أبريل 2026' },
            { title: 'الشفافية والأمانة في التجارة الإسلامية', author: 'د. علي السلمي', date: '8 أبريل 2026' },
          ].map((article, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-[#0a4240] mb-3">{article.title}</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a4240] text-white py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">اغوص في المعرفة الإسلامية</h2>
          <p className="text-lg text-gray-200 mb-8">
            اقرأ مقالات وبحوث عميقة تثري معرفتك الإسلامية
          </p>
          <button className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1">
            اكتشف المقالات
          </button>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
