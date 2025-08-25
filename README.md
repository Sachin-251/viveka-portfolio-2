# Viveka Massey - Content Writer Portfolio

A modern, responsive portfolio website for content writer and copywriter Viveka Massey, built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS. Features a blog, contact form, and SEO optimization.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling
- **Shadcn UI** components for consistent design
- **Sanity CMS** for content management
- **SEO Optimized** with metadata, sitemap, and robots.txt
- **Responsive Design** that works on all devices
- **Dark Mode** support
- **Blog System** with categories and search
- **Contact Form** with API integration
- **Performance Optimized** with Next.js best practices

## 📁 Project Structure

```
viveka-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with navbar/footer
│   ├── page.tsx           # Landing page
│   ├── blog/              # Blog pages
│   ├── category/          # Category pages
│   ├── search/            # Search page
│   ├── about/             # About page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── api/               # API routes
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── sections/         # Landing page sections
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   └── blog-card.tsx     # Blog card component
├── lib/                  # Utility functions
│   ├── sanity.ts         # Sanity client
│   ├── sanityImage.ts    # Image URL builder
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
├── sanity/               # Sanity CMS schemas
│   └── schemas/          # Content schemas
└── public/               # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **CMS**: Sanity.io
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/viveka-portfolio.git
   cd viveka-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://viveka.dev
   
   # Google Search Console Verification
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
   ```

4. **Set up Sanity CMS**
   - Create a new Sanity project at [sanity.io](https://sanity.io)
   - Copy your project ID to the environment variables
   - Import the schemas from `sanity/schemas/` into your Sanity studio
   - Add some sample content

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors and Styling
- Modify colors in `tailwind.config.js`
- Update CSS variables in `app/globals.css`
- Customize Shadcn UI theme in `components.json`

### Content
- Update personal information in Sanity CMS
- Modify placeholder content in component files
- Add your own images and assets

### SEO
- Update metadata in `app/layout.tsx`
- Modify sitemap priorities in `app/sitemap.ts`
- Update robots.txt rules in `app/robots.ts`

## 📝 Content Management

### Sanity Schemas
The project includes the following content types:
- **Portfolio**: Hero, services, education, experience, sample works
- **Post**: Blog posts with rich text content
- **Category**: Blog post categories
- **Author**: Blog post authors
- **Work**: Portfolio project samples

### Adding Content
1. Access your Sanity Studio
2. Create content using the provided schemas
3. Content will automatically appear on your website

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 SEO Features

- **Meta Tags**: Comprehensive metadata for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD schema markup (can be added)
- **Performance**: Optimized for Core Web Vitals

## 🔧 API Routes

- `/api/contact` - Contact form submission handler
- `/api/search` - Blog post search functionality

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

The website supports dark mode with:
- System preference detection
- Manual toggle (can be added)
- Consistent theming across all components

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Caching**: Optimized caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help:
- Create an issue on GitHub
- Email: hello@viveka.dev
- Documentation: [Next.js Docs](https://nextjs.org/docs)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Sanity](https://sanity.io/) - Headless CMS
- [Vercel](https://vercel.com/) - Deployment platform

---

Made with ❤️ by Viveka
