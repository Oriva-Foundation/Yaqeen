# أداء وتجربة المستخدم - Performance & UX Guide

## نظرة عامة
هذا الدليل يضمن أن منصة Yaqeen تحقق أعلى معايير الأداء (High Performance) وأفضل تجربة مستخدم (Best UX).

---

## معايير الأداء (Web Vitals)

### Core Web Vitals Targets

| المقياس | الهدف | الوضع الحالي |
|---------|-------|------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ مقبول |
| **FID** (First Input Delay) | < 100ms | ✅ مقبول |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ مقبول |
| **FCP** (First Contentful Paint) | < 1.8s | ✅ مقبول |
| **TTFB** (Time to First Byte) | < 600ms | 🔄 قيد المراقبة |

### قياس الأداء
```bash
# استخدم Lighthouse
npm run build
npm run start
# ثم اضغط F12 > Lighthouse > Analyze page load
```

---

## تحسينات الأداء المطبقة

### 1. Image Optimization
```jsx
// ✅ استخدام Next.js Image
import Image from 'next/image';

<Image 
  src="/img.webp" 
  alt="وصف" 
  width={800} 
  height={600}
  priority={false}
/>

// ❌ تجنب
<img src="/img.jpg" alt="" />
```

**التأثير**: تقليل حجم الصور بنسبة 60-80%

### 2. Code Splitting & Lazy Loading
```jsx
// ✅ Lazy load components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./heavy'), {
  loading: () => <div>جاري التحميل...</div>,
});

// ✅ Lazy load routes
const TafsirPage = dynamic(() => import('./tafsir/[slug]'));
```

**التأثير**: تقليل حجم الـ JavaScript الأولي بنسبة 30-40%

### 3. Static Generation (SSG)
```jsx
// ✅ في الملفات الثابتة
export async function getStaticParams() {
  return {
    paths: surahs.map(s => ({ params: { slug: s.slug } })),
    revalidate: 86400 // revalidate يومياً
  };
}

export async function getStaticProps({ params }) {
  return { props: { surah: getSurah(params.slug) } };
}
```

**التأثير**: تسريع التحميل 10x للصفحات الثابتة

### 4. Caching Strategy
```javascript
// next.config.mjs
export default {
  headers: async () => [
    {
      source: '/data/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=86400' },
      ],
    },
    {
      source: '/static/:path*',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
  ],
};
```

### 5. Bundle Optimization
```javascript
// ESLint + Prettier
// تأكد من:
// - لا توجد dependencies غير مستخدمة
// - لا توجد console.log في الإنتاج
// - استخدم tree-shaking
```

---

## أفضل ممارسات UX

### 1. التصميم المستجيب (Responsive Design)
```css
/* Tailwind Responsive Classes */
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-4
">
```

### 2. سهولة القراءة
- ✅ حجم خط مناسب: 16px للجسم، 24px+ للعناوين
- ✅ تباعد أسطر: 1.5 على الأقل
- ✅ ألوان متباينة: نسبة تباين 4.5:1 على الأقل

### 3. التوجيه البديهي
```jsx
// ✅ روابط واضحة
<Link href="/hadith" className="bg-blue-600 hover:bg-blue-700 text-white">
  اذهب للأحاديث
</Link>

// ❌ تجنب
<button onClick={() => window.location = '/hadith'}>?</button>
```

### 4. الملاحة (Navigation)
- ✅ قائمة ملاحة واضحة
- ✅ breadcrumb عند الحاجة
- ✅ زر "رجوع" على جميع الصفحات الفرعية

### 5. التحميل والانتظار
```jsx
// ✅ مؤشر تحميل
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded"></div>
</div>

// ✅ skeleton loading
<SkeletonLoader count={10} />
```

---

## معايير الوصول (Accessibility)

### WCAG 2.1 Level AA

#### 1.1 النصوص البديلة
```jsx
// ✅ جميع الصور لها alt text
<img src="surah.jpg" alt="صورة من سورة الفاتحة" />

// ✅ SVGs لها عنوان
<svg role="img" aria-labelledby="title">
  <title id="title">أيقونة البحث</title>
  <path d="..." />
</svg>
```

#### 1.3 التركيب والمعنى
```jsx
// ✅ استخدام semantic HTML
<header>
  <nav>
    <a href="/">الرئيسية</a>
  </nav>
</header>

<main>
  <article>
    <h1>العنوان</h1>
    <section>...</section>
  </article>
</main>

<footer>المعلومات</footer>
```

#### 1.4 التمييز البصري
```css
/* ✅ تباين كافي */
color: #0a4240; /* أسود */
background-color: #ffffff; /* أبيض */
/* النسبة: 18:1 - ممتازة */

/* ❌ تجنب */
color: #888888;
background-color: #999999;
/* النسبة: 1.1:1 - غير كافي */
```

#### 2.1 التوافق مع لوحة المفاتيح
```jsx
// ✅ جميع العناصر التفاعلية قابلة للوصول بلوحة المفاتيح
<button onClick={handleClick} onKeyDown={(e) => e.key === 'Enter' && handleClick()}>
  اضغط هنا
</button>

// ✅ استخدم tabindex بحكمة
<div tabIndex={0} role="button" onKeyDown={handleKeyDown}>
  عنصر تفاعلي مخصص
</div>
```

#### 2.4 التركيز المرئي
```css
/* ✅ تركيز مرئي واضح */
a:focus {
  outline: 2px solid #169b8b;
  outline-offset: 2px;
}

/* ❌ تجنب إزالة التركيز */
*:focus {
  outline: none; /* خطر! */
}
```

---

## أفضل الممارسات للأداء

### 1. تقليل الطلبات (Request Optimization)
```javascript
// ✅ استخدم Single JSON file بدلاً من multiple requests
// data/hadith/all.json - واحد ملف بدلاً من 7,000 ملف

// ✅ Gzip Compression
// next.config.mjs يفعلها افتراضياً
```

### 2. تجنب الرسم الزائد (Avoid Repaints)
```jsx
// ✅ استخدم keys في lists
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}

// ✅ استخدم React.memo للمكونات الثقيلة
const HeavyComponent = React.memo(({ data }) => (
  <div>{data}</div>
));
```

### 3. التحسينات على الجهاز المحمول
```javascript
// ✅ Touch-friendly buttons
min-height: 44px;
min-width: 44px;
padding: 12px 16px;

// ✅ Avoid hover-only interactions
// استخدم click/focus بدلاً من hover فقط
```

### 4. الخطوط والموارد
```javascript
// ✅ استخدم system fonts أولاً
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;

// ✅ if using custom fonts, optimize
<link 
  rel="preload" 
  href="/fonts/font.woff2" 
  as="font" 
  type="font/woff2" 
  crossOrigin
/>
```

---

## قائمة الفحص قبل النشر

### Performance
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 200KB (gzipped)

### SEO
- [ ] Meta tags صحيحة
- [ ] Open Graph tags موجودة
- [ ] robots.txt و sitemap.xml موجودة
- [ ] Canonical URLs
- [ ] Mobile-friendly

### Accessibility
- [ ] WCAG 2.1 Level AA
- [ ] Screen reader compatible
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] No ARIA violations

### Security
- [ ] HTTPS enabled
- [ ] CSP headers configured
- [ ] No XSS vulnerabilities
- [ ] No SQL injection risks
- [ ] Dependencies updated

### UX
- [ ] Mobile tested
- [ ] Touch targets 44px+
- [ ] Loading states visible
- [ ] Error messages clear
- [ ] Responsive design works

---

## أدوات المراقبة

### Tools للقياس
1. **Google Lighthouse**
   ```bash
   npm install -g lighthouse
   lighthouse https://yaqeen.com --chrome-flags="--headless"
   ```

2. **WebPageTest**
   - رابط: https://www.webpagetest.org

3. **GTmetrix**
   - رابط: https://gtmetrix.com

4. **Axe DevTools**
   - متصفح Extension للوصول

### في التطوير
```bash
npm run dev
# F12 > Lighthouse > Analyze
# أو
npm run build && npm run start
```

---

## استراتيجية التحسين المستمرة

### Weekly
- [ ] مراجعة Lighthouse scores
- [ ] فحص الأخطاء في console
- [ ] اختبار على أجهزة حقيقية

### Monthly
- [ ] تحديث Dependencies
- [ ] مراجعة Web Vitals
- [ ] اختبار الوصول الشامل

### Quarterly
- [ ] تحديث الحزم الكبيرة
- [ ] تقييم معمارية الكود
- [ ] التخطيط للتحسينات الكبيرة

---

## الموارد والمراجع

- [Web.dev Performance Guide](https://web.dev/performance/)
- [Next.js Optimization](https://nextjs.org/docs/advanced-features/measuring-performance)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [React Performance](https://react.dev/learn/render-and-commit)

---

**آخر تحديث**: 21 أبريل 2026
**المسؤول**: فريق الأداء والجودة

