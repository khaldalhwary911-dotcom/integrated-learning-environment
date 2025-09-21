# 📄 النشر على GitHub Pages

## المميزات:
- ✅ مجاني تماماً
- ✅ مدمج مع GitHub
- ✅ نطاق فرعي من GitHub
- ✅ SSL مجاني

## خطوات النشر:

### 1. إنشاء GitHub Actions Workflow
أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      env:
        GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 2. إضافة Secrets
1. اذهب إلى مستودع GitHub
2. اختر "Settings" > "Secrets and variables" > "Actions"
3. اضغط "New repository secret"
4. أضف:
   - **Name**: `GEMINI_API_KEY`
   - **Secret**: مفتاح API الخاص بك

### 3. تفعيل GitHub Pages
1. اذهب إلى "Settings" > "Pages"
2. اختر "Source": "GitHub Actions"
3. احفظ الإعدادات

### 4. النشر
1. ارفع الكود إلى GitHub
2. سيعمل النشر تلقائياً
3. ستحصل على رابط مثل `username.github.io/repository-name`

## ملاحظات:
- النشر يستغرق 5-10 دقائق
- يتم النشر تلقائياً عند كل push
- يمكنك ربط نطاق خاص بك
