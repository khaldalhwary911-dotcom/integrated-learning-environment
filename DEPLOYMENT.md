# دليل النشر على Vercel

## متطلبات النشر

### 1. إعداد متغيرات البيئة
تحتاج إلى إعداد مفتاح Gemini API:

1. اذهب إلى [Google AI Studio](https://makersuite.google.com/app/apikey)
2. سجل دخولك بحساب Google
3. أنشئ مفتاح API جديد
4. انسخ المفتاح

### 2. النشر على Vercel

#### الطريقة الأولى: من خلال GitHub
1. ارفع المشروع إلى GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. سجل دخولك بحساب GitHub
4. اضغط "New Project"
5. اختر المستودع الخاص بك
6. في إعدادات البيئة، أضف:
   - `GEMINI_API_KEY` = مفتاح API الخاص بك
7. اضغط "Deploy"

#### الطريقة الثانية: من خلال Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 3. إعدادات المشروع
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. متغيرات البيئة المطلوبة
- `GEMINI_API_KEY`: مفتاح Google Gemini API

## ملاحظات مهمة
- تأكد من أن مفتاح API صحيح
- لا تشارك مفتاح API مع أحد
- ستحصل على رابط مجاني مثل `your-site.vercel.app`
- يمكنك ربط نطاق خاص بك لاحقاً
