import Link from 'next/link';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

const bookData = {
  'sahih-al-bukhari': { name: 'صحيح البخاري', count: '7,275', reliability: 'صحيح' },
  'sahih-muslim': { name: 'صحيح مسلم', count: '5,033', reliability: 'صحيح' },
  'sunan-al-tirmidhi': { name: 'سنن الترمذي', count: '3,956', reliability: 'متنوع' },
  'sunan-ibn-majah': { name: 'سنن ابن ماجة', count: '4,341', reliability: 'متنوع' },
  'sunan-al-nasai': { name: 'سنن النسائي', count: '5,270', reliability: 'صحيح' },
  'sunan-abi-dawood': { name: 'سنن أبي داود', count: '5,274', reliability: 'متنوع' },
};

export default function HadithBookPage({ params }) {
  const { slug } = params;
  const book = bookData[slug];

  if (!book) {
    return (
      <main className="min-h-screen bg-white">
        <Header activeTab="الحديث" />
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800">الكتاب غير موجود</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="الحديث" />

      {/* Back Button */}
      <div className="bg-[#0a4240] text-white py-6 px-6 md:px-12">
        <Link href="/hadith" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          العودة لصفحة الحديث
        </Link>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a4240] mb-4">{book.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {book.count} حديث • {book.reliability}
          </p>
        </div>
      </section>

      {/* Placeholder for Hadiths */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0a4240] mb-4">الأحاديث قيد الإضافة</h2>
          <p className="text-gray-600">سيتم إضافة الأحاديث لهذا الكتاب قريباً.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}