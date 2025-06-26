# Ntale Portfolio - Next.js 14 Edition

A cutting-edge portfolio website showcasing skills, projects, and achievements in software engineering, photography, and videography. Built with modern web technologies to deliver superior performance, accessibility, and user experience.

## ✨ Features

- **🎨 Modern Design**: Clean, minimalist interface with a custom design system
- **🌓 Dark/Light Mode**: Seamless theme switching with next-themes
- **📱 Responsive Design**: Optimized for all screen sizes and devices
- **🎭 Advanced Animations**: Smooth transitions and micro-interactions with Framer Motion
- **🌐 3D Elements**: Interactive 3D components using React Three Fiber
- **📝 Dynamic Content**: Markdown-based project management with frontmatter
- **🔗 GitHub Integration**: Real-time repository data via GitHub API
- **⚡ Performance Optimized**: Image optimization, lazy loading, and SSG
- **♿ Accessible**: WCAG compliant with semantic HTML and proper ARIA labels
- **📊 SEO Optimized**: Meta tags, structured data, and optimized content
- **🎯 TypeScript**: Full type safety and better developer experience

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14**: React framework with App Router and Server Components
- **TypeScript**: Type-safe JavaScript with enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens

### UI & Animations
- **Framer Motion**: Advanced animations and transitions
- **React Three Fiber**: 3D graphics and interactive elements
- **next-themes**: Theme management with system preference detection
- **Lucide React**: Beautiful, customizable SVG icons

### Content & Data
- **gray-matter**: Frontmatter parsing for Markdown content
- **marked**: Markdown to HTML conversion
- **GitHub API**: Dynamic repository and contribution data

### Development Tools
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **PostCSS**: CSS processing and optimization

## 📁 Project Structure

```
Ntale-Portfolio/
├── public/                 # Static assets
│   ├── images/            # Optimized images
│   └── icons/             # Icon assets
├── src/
│   ├── app/               # Next.js 14 App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout
│   │   ├── page.jsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── portfolio/     # Portfolio gallery
│   │   ├── projects/      # Dynamic project pages
│   │   └── contact/       # Contact page
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── sections/     # Page sections
│   │   ├── 3d/           # 3D components
│   │   └── *.jsx         # Core components
│   ├── lib/              # Utility functions
│   │   ├── data.ts       # Static data
│   │   ├── utils.ts      # Helper functions
│   │   ├── github.ts     # GitHub API integration
│   │   └── content.ts    # Content management
│   └── types/            # TypeScript definitions
├── content/              # Markdown content
│   └── projects/         # Project documentation
├── tailwind.config.js    # Tailwind configuration
├── next.config.mjs       # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## � Getting Started

### Prerequisites

- **Node.js**: Version 18+ required
- **npm/yarn/pnpm**: Package manager for installing dependencies
- **Git**: For version control

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JuliusNtale/Ntale-Portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Ntale-Portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# GitHub API (Optional - for dynamic repository data)
GITHUB_TOKEN=your_github_personal_access_token

# Contact Form (Optional - for EmailJS integration)
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📝 Content Management

### Adding Projects

1. Create a new Markdown file in `content/projects/`:

   ```markdown
   ---
   title: "Project Name"
   description: "Brief description"
   tech: ["React", "TypeScript", "Tailwind"]
   github: "https://github.com/username/repo"
   demo: "https://demo-url.com"
   image: "/project-image.jpg"
   featured: true
   ---

   # Project Name

   Detailed project description here...
   ```

2. Add project images to `public/images/projects/`

### Customizing Content

- **Personal Info**: Update `src/lib/data.ts`
- **Skills & Experience**: Modify the skills and experiences arrays in `src/lib/data.ts`
- **Theme Colors**: Customize in `tailwind.config.js`

## 🎨 Customization

### Theme Configuration

The portfolio uses a custom design system defined in `tailwind.config.js`:

```javascript
// Custom color palette
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add to the appropriate page in `src/app/`
3. Update navigation if needed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on each push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify
3. Set environment variables in Netlify dashboard

### Other Platforms

The portfolio supports static export and can be deployed to any static hosting service.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add amazing feature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/amazing-feature
   ```

5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Vercel**: For deployment platform
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For beautiful animations
- **React Three Fiber**: For 3D capabilities
- **Open Source Community**: For the incredible tools and inspiration

## 📞 Contact

- **Portfolio**: [Your Live Site](https://your-portfolio.com)
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

⭐ If you found this portfolio helpful, please consider giving it a star!

Built with ❤️ using Next.js 14

