# إعداد متغيرات البيئة

## متطلبات البيئة

### 1. مفتاح Gemini API
تحتاج إلى الحصول على مفتاح Google Gemini API:

1. اذهب إلى [Google AI Studio](https://makersuite.google.com/app/apikey)
2. سجل دخولك بحساب Google
3. اضغط "Create API Key"
4. انسخ المفتاح الذي تم إنشاؤه

### 2. إعداد متغيرات البيئة

#### للتطوير المحلي:
أنشئ ملف `.env.local` في مجلد المشروع:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

#### للنشر على Vercel:
1. اذهب إلى إعدادات المشروع في Vercel
2. اختر "Environment Variables"
3. أضف متغير جديد:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: مفتاح API الخاص بك
   - **Environment**: Production, Preview, Development

### 3. اختبار الإعداد
```bash
npm run dev
```

تأكد من أن الموقع يعمل بشكل صحيح وأن ميزات الذكاء الاصطناعي تعمل.

## ملاحظات الأمان
- لا تشارك مفتاح API مع أحد
- لا ترفع ملف `.env.local` إلى GitHub
- استخدم متغيرات البيئة في Vercel بدلاً من كتابة المفتاح في الكود
