# 🎨 النشر على Render

## المميزات:
- ✅ مجاني مع حدود سخية
- ✅ نشر سريع
- ✅ SSL مجاني
- ✅ دعم ممتاز لـ React
- ✅ واجهة سهلة

## خطوات النشر:

### 1. رفع المشروع إلى GitHub
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### 2. النشر على Render
1. اذهب إلى [render.com](https://render.com)
2. اضغط "Sign up" وسجل دخولك بحساب GitHub
3. اضغط "New +" > "Static Site"
4. **إعدادات المشروع:**
   - **Name**: اسم مشروعك
   - **Repository**: اختر مستودعك
   - **Branch**: `main`
   - **Root Directory**: (اتركه فارغ)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

### 3. إضافة متغيرات البيئة
1. في صفحة المشروع، اذهب إلى "Environment"
2. اضغط "Add Environment Variable"
3. أضف:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: مفتاح API الخاص بك

### 4. النشر
1. اضغط "Create Static Site"
2. انتظر حتى يكتمل البناء
3. ستحصل على رابط مثل `your-site.onrender.com`

## إعدادات إضافية:
- **Custom domain**: يمكنك ربط نطاق خاص بك
- **Auto-deploy**: تحديث تلقائي عند push
- **Preview deployments**: معاينة قبل النشر
