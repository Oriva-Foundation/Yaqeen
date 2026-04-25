import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header activeTab="عن المنصة" />

      <section className="bg-[#0a4240] text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">عن منصة يقين</h1>
          <p className="text-lg text-gray-100 leading-relaxed">
            تهدف منصة يقين إلى تقديم محتوى إسلامي موثوق وسهل الوصول إليه، يشمل القرآن الكريم، التفسير، الحديث، الأذكار، والمقالات العلمية.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0a4240] mb-4">مهمتنا</h2>
            <p className="text-gray-700 leading-relaxed">
              نشر العلم الشرعي المصاغ بأسلوب واضح، وجعل الوصول إلى الفقه، التفسير، والسنة أمراً بسيطاً للمستخدمين في أي وقت.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0a4240] mb-4">رؤيتنا</h2>
            <p className="text-gray-700 leading-relaxed">
              أن تصبح يقين مرجعاً موثوقاً للمستخدم العربي في رحلته اليومية مع القرآن والحديث والأذكار.</p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0a4240] mb-4">لماذا يقين؟</h2>
          <p className="text-gray-700 leading-relaxed">
            نركز على الموثوقية، سهولة الاستخدام، والتجربة البصرية النظيفة حتى يتمكن الجميع من التعلم والذكر بثقة.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
