# 🚀 دليل النشر على Netlify - خطوة بخطوة

## ✅ تم إعداد المشروع للنشر على Netlify

### الملفات المضافة:
- ✅ `netlify.toml` - ملف إعداد Netlify
- ✅ إعدادات البناء محسنة
- ✅ دعم SPA (Single Page Application)

## 📋 خطوات النشر:

### 1. رفع المشروع إلى GitHub
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### 2. النشر على Netlify
1. **اذهب إلى [netlify.com](https://netlify.com)**
2. **اضغط "Sign up" وسجل دخولك بحساب GitHub**
3. **اضغط "New site from Git"**
4. **اختر "GitHub" واختر مستودعك**

### 3. إعدادات البناء
- **Repository**: اختر مستودعك
- **Branch to deploy**: `main`
- **Build command**: `npm run build` (سيتم ملؤه تلقائياً)
- **Publish directory**: `dist` (سيتم ملؤه تلقائياً)

### 4. إضافة متغيرات البيئة
1. **في صفحة المشروع، اذهب إلى "Site settings"**
2. **اختر "Environment variables"**
3. **اضغط "Add variable"**
4. **أضف:**
   - **Key**: `GEMINI_API_KEY`
   - **Value**: مفتاح API الخاص بك

### 5. النشر
1. **اضغط "Deploy site"**
2. **انتظر حتى يكتمل البناء (2-3 دقائق)**
3. **ستحصل على رابط مثل `your-site.netlify.app`**

## 🔑 الحصول على مفتاح Gemini API:
1. اذهب إلى [Google AI Studio](https://makersuite.google.com/app/apikey)
2. سجل دخولك بحساب Google
3. اضغط "Create API Key"
4. انسخ المفتاح

## 🎯 المميزات:
- ✅ نشر مجاني
- ✅ تحديث تلقائي عند push
- ✅ SSL مجاني
- ✅ CDN عالمي
- ✅ دعم SPA
- ✅ إعادة التوجيه التلقائي

## 📱 بعد النشر:
- يمكنك ربط نطاق خاص بك
- يمكنك إعداد النماذج
- يمكنك إضافة Functions
- يمكنك إعداد Analytics

## 🆘 إذا واجهت مشاكل:
1. تأكد من أن مفتاح API صحيح
2. تحقق من أن جميع الملفات تم رفعها
3. تأكد من إضافة متغير البيئة
4. جرب إعادة النشر
