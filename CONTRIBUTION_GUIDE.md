# دليل المساهمة - Yaqeen Platform

شكراً لاهتمامك بالمساهمة في منصة Yaqeen! نرحب بمساهمتك في إثراء المحتوى الإسلامي على المنصة.

## جدول المحتويات
- [البدء](#البدء)
- [مبادئ المساهمة](#مبادئ-المساهمة)
- [كيفية المساهمة](#كيفية-المساهمة)
- [معايير الجودة](#معايير-الجودة)
- [البنية التقنية](#البنية-التقنية)

## البدء

### المتطلبات الأساسية
- معرفة أساسية بـ Git و GitHub
- Node.js 16+ و npm 7+
- محرر نصوص (VS Code موصى به)

### إعداد بيئة التطوير

```bash
# استنساخ المستودع
git clone https://github.com/yourusername/yaqeen.git
cd yaqeen

# تثبيت المتطلبات
npm install

# تشغيل خادم التطوير
npm run dev
```

الآن يمكنك الوصول للتطبيق على `http://localhost:3000`

## مبادئ المساهمة

### 1. جودة المحتوى الإسلامي
- استخدم فقط مصادر موثوقة وموثقة
- تأكد من صحة النصوص والأحاديث
- أضف الإسناد والمراجع عند الحاجة
- اتبع معايير التوثيق الإسلامية المعروفة

### 2. الأداء والسرعة (Performance)
- استخدم الصور المُحسّنة والمضغوطة
- تجنب الحمل على DOM غير الضروري
- استخدم React.lazy() للتحميل الكسول عند الحاجة
- تأكد من أن الصفحات تحمل في أقل من 3 ثوان

### 3. تجربة المستخدم (UX)
- اتبع نظام التصميم الموجود
- اجعل الواجهة بديهية وسهلة الاستخدام
- اختبر على الأجهزة المحمولة وأجهزة سطح المكتب
- استخدم اللغة العربية بشكل صحيح وسلس

### 4. الوصول (Accessibility)
- استخدم semantic HTML
- أضف alt text للصور
- تأكد من تضاد الألوان الكافي
- اختبر مع screen readers

## كيفية المساهمة

### إضافة محتوى جديد

#### 1. إضافة حديث (Hadith)
قم بإضافة الحديث في الملف المناسب في `data/hadith/`:

```json
{
  "id": 1,
  "number": "1",
  "text": "نص الحديث",
  "narrator": "اسم الراوي",
  "chain": "سند الحديث",
  "reliability": "صحيح",
  "source": "صحيح البخاري",
  "explanation": "شرح الحديث",
  "fiqhi_ruling": "الحكم الفقهي"
}
```

#### 2. إضافة تفسير (Tafsir)
قم بإضافة التفسير في الملف المناسب في `data/tafsir/`:

```json
{
  "surah_number": 1,
  "verse_number": 1,
  "text": "نص التفسير",
  "scholar": "اسم العالم",
  "linguistic_meaning": "المعنى اللغوي",
  "jurisprudential_rulings": "الأحكام الفقهية",
  "related_verses": [...]
}
```

#### 3. إضافة ذكر/دعاء (Adhkar/Dua)
قم بإضافة الذكر في الملف المناسب في `data/adhkar/`:

```json
{
  "id": 1,
  "arabic_text": "نص الذكر بالعربية",
  "transliteration": "نطق اللاتيني",
  "english_meaning": "المعنى بالإنجليزية",
  "number_of_times": "عدد المرات",
  "benefits": "فوائد الذكر",
  "source": "المصدر",
  "hadith_reference": "الحديث المرجع"
}
```

#### 4. إضافة سورة (Surah)
قم بإضافة السورة في `data/quran/surahs.json`:

```json
{
  "number": 1,
  "name": "الفاتحة",
  "englishName": "Al-Fatiha",
  "verses": [
    {
      "verse_number": 1,
      "text": "الآية",
      "transliteration": "النطق",
      "translation": "الترجمة"
    }
  ]
}
```

### العملية المقترحة

1. **Fork المستودع** على GitHub
2. **أنشئ فرع جديد**:
   ```bash
   git checkout -b feature/add-hadith-collection
   ```
3. **قم بالتعديلات** والمضافات
4. **اختبر التعديلات** محلياً:
   ```bash
   npm run dev
   npm run lint
   ```
5. **قم بـ Commit**:
   ```bash
   git commit -m "feat: add Hadith collection from Sahih Bukhari"
   ```
6. **Push للفرع**:
   ```bash
   git push origin feature/add-hadith-collection
   ```
7. **أنشئ Pull Request** مع وصف واضح

## معايير الجودة

### معايير المحتوى
- ✅ جميع المصادر موثقة بشكل صحيح
- ✅ لا توجد أخطاء إملائية أو نحوية
- ✅ النصوص تتبع معايير التشكيل الإسلامية
- ✅ الأسانيد كاملة ودقيقة

### معايير الكود
- ✅ اتبع [ESLint config](./eslint.config.mjs)
- ✅ استخدم Prettier للتنسيق
- ✅ اختبر على أنواع مختلفة من الأجهزة
- ✅ أضف comments توضيحية بالعربية والإنجليزية

### معايير الأداء
- ✅ حجم الصفحة < 500KB (gzipped)
- ✅ First Contentful Paint < 2s
- ✅ Largest Contentful Paint < 3s
- ✅ Cumulative Layout Shift < 0.1

### معايير الوصول
- ✅ WCAG 2.1 Level AA
- ✅ جميع الروابط لها alt text
- ✅ التنقل بلوحة المفاتيح يعمل بشكل صحيح
- ✅ توازن اللون كافي

## البنية التقنية

### هيكل المشروع
```
yaqeen/
├── app/
│   ├── components/        # React components
│   ├── hadith/           # Hadith pages & routes
│   ├── tafsir/           # Tafsir pages & routes
│   ├── adhkar/           # Adhkar pages & routes
│   ├── quran/            # Quran pages & routes
│   └── layout.js
├── data/
│   ├── hadith/           # Hadith data (JSON)
│   ├── tafsir/           # Tafsir data (JSON)
│   ├── adhkar/           # Adhkar data (JSON)
│   └── quran/            # Quran data (JSON)
├── public/               # Static files
├── package.json
└── next.config.mjs
```

### نظام التصميم
استخدم الألوان والمكونات المعرفة:
- اللون الأساسي: `#0a4240` (داكن)
- اللون الثانوي: `#169b8b` (أخضر)
- استخدم Tailwind CSS للنمذجة

### أفضل الممارسات
1. استخدم الـ Dynamic Routes لتقليل الـ repetition
2. استخدم JSON files بدلاً من قاعدة بيانات في المراحل المبكرة
3. استخدم lazy loading للصور والمحتويات
4. استخدم caching headers المناسبة

## الاختبار

### اختبار محلي
```bash
npm run dev
# ثم زيارة الصفحات واختبار الوظائف
```

### Linting
```bash
npm run lint
```

### الأداء
استخدم Google Lighthouse:
1. افتح أي صفحة
2. اضغط F12 لفتح Developer Tools
3. انتقل إلى Lighthouse tab
4. اضغط "Analyze page load"

## الأسئلة الشائعة

**س: ما هي صيغة البيانات المفضلة؟**
ج: JSON - سهلة للتعامل وسريعة الوصول

**س: كيف أختبر الأداء؟**
ج: استخدم Google Lighthouse أو WebPageTest

**س: هل يمكني إضافة صور؟**
ج: نعم، لكن استخدم أدوات ضغط الصور أولاً

**س: كم من الوقت يستغرق مراجعة PR؟**
ج: عادة 1-3 أيام عمل

## التواصل

- 📧 البريد: contact@yaqeen.com
- 💬 Discord: [رابط Discord]
- 📱 Twitter: [@YaqeenPlatform]

شكراً لمساهمتك! 🙏
