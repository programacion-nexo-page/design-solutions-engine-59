# Deployment Instructions for Design Solutions Products Website

## Project Overview
This is a modern React SPA (Single Page Application) built with Vite. It requires a build process to generate production files.

## For the Hosting Provider

### Step 1: Build Process Required
This project needs to be built before deployment. The source code must be processed to create optimized production files.

**Required Tools:**
- Node.js (version 18 or higher)
- npm or bun package manager

**Build Commands:**
```bash
# Install dependencies
npm install

# Create production build
npm run build
```

This creates a `dist` folder containing:
- `index.html` (main HTML file)
- Optimized JavaScript bundles
- CSS files
- Image assets
- All static files

### Step 2: Deploy the `dist` Folder Contents
Upload the **contents** of the `dist` folder (not the folder itself) to your web server's root directory.

### Step 3: Server Configuration (CRITICAL)
Since this is a Single Page Application with client-side routing, configure your server for SPA fallback:

**For Apache (.htaccess):**
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

**For Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**For Other Servers:**
All routes should fallback to `index.html` for 404s to enable client-side routing.

## Contact Form Status
The contact form currently shows success messages but doesn't send emails. This will be configured separately later.

## Final Structure After Deployment
Your website will be accessible at your root domain with these routes:
- `/` - Main homepage
- All other routes handled by React Router

## Support
If you encounter any issues during deployment, the most common problems are:
1. Not configuring SPA fallback (causes 404s on page refresh)
2. Missing build step (trying to upload source code instead of built files)
3. Incorrect file permissions on the server