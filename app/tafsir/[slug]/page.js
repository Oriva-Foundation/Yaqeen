import Link from 'next/link';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

const tafsirData = {
  'tafsir-al-saadi': { name: 'تفسير السعدي', author: 'عبد الرحمن السعدي', desc: 'تفسير ميسر وشامل مشهور' },
  'tafsir-al-jalalayn': { name: 'تفسير الجلالين', author: 'الجلالين', desc: 'تفسير مختصر وعميق' },
  'tafsir-ibn-kathir': { name: 'تفسير ابن كثير', author: 'إسماعيل بن كثير', desc: 'من أشهر التفاسير الأثرية' },
  'tafsir-al-tabari': { name: 'تفسير الطبري', author: 'محمد بن جرير الطبري', desc: 'أقدم التفاسير المسندة' },
};

export default function TafsirBookPage({ params }) {
  const { slug } = params;
  const tafsir = tafsirData[slug];

  if (!tafsir) {
    return (
      <main className="min-h-screen bg-white">
        <Header activeTab="التفسير" />
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800">التفسير غير موجود</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="التفسير" />

      {/* Back Button */}
      <div className="bg-[#0a4240] text-white py-6 px-6 md:px-12">
        <Link href="/tafsir" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          العودة لصفحة التفسير
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">{tafsir.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-2">
            {tafsir.author}
          </p>
          <p className="text-gray-600">{tafsir.desc}</p>
        </div>
      </section>

      {/* Placeholder for Tafsir Content */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0a4240] mb-4">التفسير قيد الإضافة</h2>
          <p className="text-gray-600">سيتم إضافة تفاسير هذا الكتاب قريباً. يمكنك المساهمة في إضافة المحتوى عبر دليل المساهمة.</p>
          <Link href="/contribute" className="inline-block mt-6 bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full transition-all">
            اقرأ دليل المساهمة
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
