# HACKLIDO Deployment Guide

## Prerequisites

1. A Vercel account (free at [vercel.com](https://vercel.com))
2. Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Deploy from Git Repository (Recommended)

1. Push your HACKLIDO project to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel account
3. Click "New Project"
4. Import your HACKLIDO repository
5. Vercel will automatically detect the project settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/`
6. Click "Deploy" and wait for the build to complete
7. Your HACKLIDO site will be live!

### Method 2: Deploy Using Vercel CLI

1. Install Vercel CLI globally:

   ```bash
   npm install -g vercel
   ```

2. Navigate to your project directory:

   ```bash
   cd /path/to/hacklido
   ```

3. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

## Project Configuration

This project is configured with:

- **Build Tool**: Vite (Multi-Page Application)
- **Framework**: Static HTML/CSS/JS
- **Entry Points**: All HTML files in the root directory
- **Assets**: CSS and JS files in `/css` and `/js` directories
- **Output**: Static files in `/dist` directory

## Vercel Configuration

The project includes a `vercel.json` file with:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/",
      "dest": "/index.html"
    },
    {
      "src": "^/([^.]+)$",
      "dest": "/$1.html",
      "headers": {
        "Cache-Control": "public, max-age=0, must-revalidate"
      }
    },
    {
      "src": "^/(.*)$",
      "dest": "/$1"
    }
  ]
}
```

## Troubleshooting

### Common Issues

1. **404 Errors on Pages**:

   - Ensure all HTML files are in the root directory
   - Check that the routing configuration in `vercel.json` is correct

2. **CSS/JS Not Loading**:

   - Verify that all assets are in the correct directories
   - Check browser console for 404 errors

3. **Build Failures**:
   - Ensure all dependencies are listed in `package.json`
   - Check that Node.js version is compatible

### Local Testing

Before deploying, test locally:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000` in your browser

## Support

For issues with deployment, visit:

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
