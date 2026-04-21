import Link from 'next/link';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

export default function HadithExplanationPage() {
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
    
      <section className="bg-gradient-to-r from-indigo-50 to-indigo-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">شرح الأحاديث</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            شروحات وافية ومبسطة للأحاديث النبوية لتسهيل فهم السنة وتطبيقها
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">شروحات مفصلة</h3>
            <p className="text-gray-600">شرح دقيق لكل جملة ولفظ في الحديث</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">التطبيقات العملية</h3>
            <p className="text-gray-600">كيفية تطبيق أحكام الحديث في الحياة اليومية</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الفوائد المستنبطة</h3>
            <p className="text-gray-600">استخراج الفوائد والحكم من الحديث</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الأحكام الفقهية</h3>
            <p className="text-gray-600">الأحكام الشرعية المستفادة من الحديث</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الشروح المتعددة</h3>
            <p className="text-gray-600">وجهات نظر مختلفة من العلماء</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">التحقق من الألفاظ</h3>
            <p className="text-gray-600">التحقق من الكلمات الصعبة والمشكلة</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الأمثلة التطبيقية</h3>
            <p className="text-gray-600">أمثلة عملية تساعدك على فهم الحديث</p>
          </div>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a4240] mb-2">الحفظ والتعليقات</h3>
            <p className="text-gray-600">احفظ الشروحات واضف ملاحظاتك الخاصة</p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4240] mb-12 text-center">موضوعات الشروحات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'أحاديث العقيدة',
              'أحاديث الطهارة والعبادات',
              'أحاديث الأحوال الشخصية',
              'أحاديث الأخلاق والسلوك',
              'أحاديث الآداب العامة',
              'أحاديث الدعاء والأذكار',
              'أحاديث فضائل الأعمال',
              'أحاديث التجارة والبيع',
              'أحاديث الطب والصحة',
            ].map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="font-medium text-gray-800">{topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a4240] text-white py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">افهم السنة بعمق</h2>
          <p className="text-lg text-gray-200 mb-8">
            شروحات شاملة تسهل فهم وتطبيق الأحاديث النبوية
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:-translate-y-1">
            استكشف الشروحات
          </button>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
