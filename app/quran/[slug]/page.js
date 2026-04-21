import Link from 'next/link';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

const surahs = {
  'surah-1': { number: 1, name: 'الفاتحة', englishName: 'Al-Fatiha', verses: 7, revelation: 'Meccan' },
  'surah-2': { number: 2, name: 'البقرة', englishName: 'Al-Baqarah', verses: 286, revelation: 'Medinan' },
  'surah-3': { number: 3, name: 'آل عمران', englishName: 'Ali Imran', verses: 200, revelation: 'Medinan' },
  'surah-4': { number: 4, name: 'النساء', englishName: 'An-Nisa', verses: 176, revelation: 'Medinan' },
  'surah-5': { number: 5, name: 'المائدة', englishName: 'Al-Maidah', verses: 120, revelation: 'Medinan' },
  'surah-6': { number: 6, name: 'الأنعام', englishName: 'Al-Anam', verses: 165, revelation: 'Meccan' },
  'surah-7': { number: 7, name: 'الأعراف', englishName: 'Al-Araf', verses: 206, revelation: 'Meccan' },
  'surah-8': { number: 8, name: 'الأنفال', englishName: 'Al-Anfal', verses: 75, revelation: 'Medinan' },
  'surah-9': { number: 9, name: 'التوبة', englishName: 'At-Tawbah', verses: 129, revelation: 'Medinan' },
  'surah-10': { number: 10, name: 'يونس', englishName: 'Yunus', verses: 109, revelation: 'Meccan' },
};

export default function SurahPage({ params }) {
  const { slug } = params;
  const surah = surahs[slug];

  if (!surah) {
    return (
      <main className="min-h-screen bg-white">
        <Header activeTab="القرآن" />
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800">السورة غير موجودة</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="القرآن" />

      {/* Back Button */}
      <div className="bg-[#0a4240] text-white py-6 px-6 md:px-12">
        <Link href="/quran" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          العودة لصفحة القرآن
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-50 to-teal-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">{surah.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-2">
            {surah.englishName} - السورة رقم {surah.number}
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <span>{surah.verses} آية</span>
            <span>•</span>
            <span>{surah.revelation}</span>
          </div>
        </div>
      </section>

      {/* Placeholder for Surah Content */}
      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0a4240] mb-4">نص السورة قيد الإضافة</h2>
          <p className="text-gray-600 mb-6">سيتم إضافة نص سورة {surah.name} قريباً. يمكنك المساهمة في إضافة المحتوى عبر دليل المساهمة.</p>
          <Link href="/contribute" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-all">
            اقرأ دليل المساهمة
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
