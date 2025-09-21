# 🔧 إصلاح مشكلة إصدار Node.js

## ❌ المشكلة:
```
Version mismatch - packages expect Node version >=20.0.0 and ^20.19.0 || >=22.12.0, 
while the current Node version is v18.20.8
```

## ✅ الحل المطبق:

### 1. تحديث netlify.toml
```toml
[build.environment]
  NODE_VERSION = "20"
  NPM_VERSION = "10"
```

### 2. تحديث package.json
```json
{
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=10.0.0"
  }
}
```

### 3. تحديث @types/node
```json
"@types/node": "^20.0.0"
```

## 🚀 خطوات إعادة النشر:

### 1. رفع التغييرات
```bash
git add .
git commit -m "Fix Node.js version compatibility"
git push origin main
```

### 2. إعادة النشر على Netlify
1. اذهب إلى [netlify.com](https://netlify.com)
2. اختر مشروعك
3. اضغط "Trigger deploy" > "Deploy site"

## 📋 التحقق من النجاح:

### ✅ Build Logs يجب أن تظهر:
- Node version: v20.x.x
- NPM version: 10.x.x
- Build successful

### ✅ الموقع يجب أن يعمل:
- جميع الصفحات تعمل
- AI features تعمل
- لا توجد أخطاء في console

## 🔍 إذا استمرت المشكلة:

### 1. تحقق من Build Logs
- اذهب إلى "Deploys" في Netlify
- اضغط على آخر deploy
- تأكد من أن Node version هو 20.x.x

### 2. جرب إعدادات مختلفة
إذا لم يعمل Node 20، جرب:
```toml
NODE_VERSION = "22"
```

### 3. تحقق من Environment Variables
- تأكد من إضافة `GEMINI_API_KEY`
- تأكد من أنه صحيح

## 📞 الدعم:
إذا استمرت المشكلة، شارك Build logs معي وسأساعدك في حلها.
