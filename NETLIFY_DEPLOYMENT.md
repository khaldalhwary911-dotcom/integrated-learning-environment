# 🚀 النشر على Netlify

## المميزات:
- ✅ نشر مجاني
- ✅ تحديث تلقائي من GitHub
- ✅ دعم ممتاز لـ React و Vite
- ✅ CDN عالمي
- ✅ SSL مجاني

## خطوات النشر:

### 1. رفع المشروع إلى GitHub
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### 2. النشر على Netlify
1. اذهب إلى [netlify.com](https://netlify.com)
2. اضغط "Sign up" وسجل دخولك بحساب GitHub
3. اضغط "New site from Git"
4. اختر "GitHub" واختر مستودعك
5. **إعدادات البناء:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: (اتركه فارغ)

### 3. إضافة متغيرات البيئة
1. اذهب إلى "Site settings"
2. اختر "Environment variables"
3. اضغط "Add variable"
4. أضف:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: مفتاح API الخاص بك

### 4. النشر
1. اضغط "Deploy site"
2. انتظر حتى يكتمل البناء
3. ستحصل على رابط مثل `your-site.netlify.app`

## إعدادات إضافية:
- **Custom domain**: يمكنك ربط نطاق خاص بك
- **Form handling**: دعم النماذج
- **Functions**: دعم serverless functions
