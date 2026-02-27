# UniGlyph | Unicode Presentation Swap

UniGlyph is a high-precision utility designed to convert colorful emojis into their clean, monochrome text-presentation variants using standard Unicode Variation Selectors.

## 🚀 Features

- **Instant Conversion**: Automatically applies Variation Selector-15 (U+FE0E) to compatible emojis.
- **Copy-to-Clipboard**: One-click functionality to grab your transformed text.
- **Modern UI**: Built with React, Tailwind CSS, and ShadCN components for a professional, responsive experience.
- **Static & Fast**: Optimized for high performance and static hosting.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages (Static Export)

## 📦 Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd uniglyph
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment to GitHub Pages

This project is configured for automated deployment via GitHub Actions.

1. **Push to GitHub**: Push your code to the `main` branch of your repository.
2. **Configure Repository Settings**:
   - Go to **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
3. **Wait for Workflow**: The "Deploy to GitHub Pages" workflow will trigger automatically.
4. **Sub-path Hosting**: If you are not deploying to a custom domain (e.g., your URL is `username.github.io/reponame`), update `next.config.ts` to include `basePath: '/reponame'`.

## 📄 License

This project is open-source and available under the MIT License.
