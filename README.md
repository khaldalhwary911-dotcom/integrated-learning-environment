# Integrated Learning Environment

A comprehensive learning platform built with React, TypeScript, and Vite.

## Features

- 🎓 Course Management
- 👥 User Management (Students, Teachers, Admins)
- 💰 Wallet System
- 🧠 AI Chat Assistant
- 📱 Responsive Design
- 🌙 Dark/Light Theme
- 🌍 Multi-language Support (English/Arabic)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment on Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable: `GEMINI_API_KEY`
   - Deploy!

## Environment Variables

- `GEMINI_API_KEY`: Your Google Gemini API key (required for AI features)

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Google Gemini AI

## License

This project is private and proprietary.
