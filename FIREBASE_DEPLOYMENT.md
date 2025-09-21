# 🔥 النشر على Firebase Hosting

## المميزات:
- ✅ مجاني مع حدود سخية
- ✅ CDN عالمي
- ✅ SSL مجاني
- ✅ دعم ممتاز لـ React
- ✅ من Google

## خطوات النشر:

### 1. تثبيت Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. تسجيل الدخول
```bash
firebase login
```

### 3. تهيئة المشروع
```bash
firebase init hosting
```

### 4. إعدادات Firebase
- **What do you want to use as your public directory?** `dist`
- **Configure as a single-page app?** `Yes`
- **Set up automatic builds and deploys with GitHub?** `Yes`

### 5. إضافة متغيرات البيئة
أنشئ ملف `.env.production`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 6. النشر
```bash
npm run build
firebase deploy
```

### 7. إعدادات Firebase Console
1. اذهب إلى [Firebase Console](https://console.firebase.google.com)
2. اختر مشروعك
3. اذهب إلى "Hosting"
4. أضف متغيرات البيئة في "Environment variables"

## النتيجة:
- ستحصل على رابط مثل `your-project.web.app`
- يمكنك ربط نطاق خاص بك
- النشر سريع وموثوق
