# PeakPulse Solutions - SaaS Boilerplate 1

A modern, production-ready full-stack SaaS boilerplate built with Next.js 13+, Express, and TypeScript. This template provides everything you need to start building scalable SaaS applications with best practices and modern tooling.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### Frontend
- 🚀 **Next.js 13+** with App Router
- 💅 **Tailwind CSS** with beautiful shadcn/ui components
- 🌓 Dark mode support
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🎨 Modern, clean UI with professional animations
- 📊 React Query for efficient data fetching
- 🔐 Type-safe development with TypeScript

### Backend
- 🛠️ Express.js with TypeScript
- 🔒 JWT Authentication
- 🛡️ Security features (Helmet, CORS, Rate Limiting)
- 📝 Request validation with Zod
- 🗃️ Prisma ORM for database operations
- 🚦 Middleware support
- ⚡ API rate limiting
- 🔍 Error tracking and handling

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/peakpulse-saas-boilerplate.git
cd peakpulse-saas-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Set up the database:
```bash
npx prisma db push
```

5. Start the development server:
```bash
npm run dev:full
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3001`

## 📁 Project Structure

```
├── app/                   # Next.js app directory
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/              # UI components
│   └── ...              # Feature components
├── lib/                 # Utility functions
├── server/              # Backend Express.js server
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Express middleware
│   ├── routes/          # API routes
│   └── utils/           # Backend utilities
└── prisma/              # Database schema and migrations
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [Express.js](https://expressjs.com/) - Backend framework
- [Prisma](https://www.prisma.io/) - Database ORM
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [React Query](https://tanstack.com/query/latest) - Data fetching
- [Zod](https://zod.dev/) - Schema validation
- [JWT](https://jwt.io/) - Authentication
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 🔒 Security Features

- JWT authentication
- Password hashing
- Rate limiting
- CORS protection
- Security headers with Helmet
- Input validation
- Error handling
- Type safety

## 📦 Additional Features

- 🎨 Theme customization
- 📱 Responsive navigation
- 🔔 Toast notifications
- 🎭 Authentication flow
- 📝 Form validation
- 🚦 API rate limiting
- 🛡️ Protected routes
- 🔍 SEO optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Support

For support, email client@peakpulsesol.com and follow us on social media

---

Built with ❤️ by PeakPulse Solutions
