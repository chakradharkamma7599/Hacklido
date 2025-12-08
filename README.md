# HACKLIDO - Cybersecurity Community & Learning Platform

A full-featured cybersecurity learning platform built with HTML, CSS, and JavaScript, featuring a cyberpunk-inspired design.

## Features

- Landing page with hero section and features
- Authentication system (login/register)
- Dashboard with user statistics
- Challenges section with CTF-style problems
- News and blog sections
- Community forums
- Tutorials and guides
- Monetization programs
- User profiles and notifications

## Deployment to Vercel

### Prerequisites

1. A Vercel account (free at [vercel.com](https://vercel.com))
2. Node.js installed locally (for development)

### Deploy Steps

1. Push this repository to GitHub/GitLab/Bitbucket
2. Log in to your Vercel account
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect the static site and deploy it
6. Configure the project settings if needed:
   - Build Command: (leave empty for static sites)
   - Output Directory: (leave empty for static sites)
   - Install Command: (leave empty for static sites)

### Manual Deployment Using Vercel CLI

1. Install Vercel CLI globally:

   ```
   npm install -g vercel
   ```

2. Navigate to the project directory:

   ```
   cd /path/to/hacklido
   ```

3. Deploy to Vercel:
   ```
   vercel --prod
   ```

## Local Development

To run locally with Vite:

1. Install dependencies:

   ```
   npm install
   ```

2. Start development server:

   ```
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Project Structure

```
hacklido/
├── index.html          # Landing page
├── about.html          # About page
├── auth.html           # Authentication page
├── blog.html           # Blog listing
├── challenges.html     # Challenges listing
├── community.html      # Community forums
├── contact.html        # Contact page
├── dashboard.html      # User dashboard
├── monetization.html   # Monetization programs
├── news.html           # News listing
├── notifications.html  # User notifications
├── profile.html        # User profile
├── search.html         # Search page
├── sponsors.html       # Sponsors page
├── tutorials.html      # Tutorials listing
├── write.html          # Content creation
├── css/
│   ├── cyberpunk.css   # Main stylesheet
│   └── style.css       # Additional styles
├── js/
│   └── main.js         # Main JavaScript
└── ...
```

## Technologies Used

- HTML5
- CSS3 with custom properties
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome Icons
- Google Fonts (Inter, JetBrains Mono)

## License

MIT License
