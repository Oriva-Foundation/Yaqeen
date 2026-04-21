import Link from 'next/link';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

const adhkarData = {
  'morning-adhkar': { name: 'أذكار الصباح', desc: 'الأذكار المشروعة عند بداية اليوم' },
  'evening-adhkar': { name: 'أذكار المساء', desc: 'الأذكار المشروعة عند نهاية اليوم' },
  'sleep-adhkar': { name: 'أذكار النوم', desc: 'الأذكار المشروعة قبل النوم' },
  'waking-adhkar': { name: 'أذكار الاستيقاظ', desc: 'الأذكار المشروعة عند الاستيقاظ' },
  'meal-adhkar': { name: 'أذكار الطعام', desc: 'الأذكار عند الأكل والشرب' },
  'mosque-adhkar': { name: 'أذكار المسجد', desc: 'الأذكار المشروعة في المسجد' },
  'quran-completion-dua': { name: 'دعاء ختم القرآن', desc: 'الدعاء المستحب عند ختم القرآن' },
  'rain-dua': { name: 'أدعية الاستسقاء', desc: 'الأدعية عند طلب المطر' },
  'healing-dua': { name: 'أدعية الشفاء', desc: 'أدعية للدعاء على المريض' },
};

export default function AdhkarCategoryPage({ params }) {
  const { slug } = params;
  const category = adhkarData[slug];

  if (!category) {
    return (
      <main className="min-h-screen bg-white">
        <Header activeTab="عن المنصة" />
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800">الفئة غير موجودة</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="عن المنصة" />

      {/* Back Button */}
      <div className="bg-[#0a4240] text-white py-6 px-6 md:px-12">
        <Link href="/adhkar" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          العودة لصفحة الأذكار
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-50 to-emerald-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">{category.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {category.desc}
          </p>
        </div>
      </section>

      {/* Placeholder for Adhkar Content */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0a4240] mb-4">الأذكار قيد الإضافة</h2>
          <p className="text-gray-600">سيتم إضافة أذكار هذه الفئة قريباً. يمكنك المساهمة في إضافة المحتوى عبر دليل المساهمة.</p>
          <Link href="/contribute" className="inline-block mt-6 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-8 rounded-full transition-all">
            اقرأ دليل المساهمة
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
