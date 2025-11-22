# TOON Converter - Deployment Checklist

## Before Deploying to Production

### 1. Update Domain References
Replace `toon-converter.com` with your actual domain in:
- [ ] `/public/robots.txt` - Update sitemap URL
- [ ] `/public/sitemap.xml` - Update all `<loc>` URLs  
- [ ] `/index.html` - Update canonical URL, og:url, twitter:url
- [ ] All Open Graph meta tags

### 2. Create Social Media Images
Create and add these images to `/public/`:
- [ ] `og-image.png` (1200x630px) - For Open Graph/Facebook
- [ ] `twitter-image.png` (1200x600px) - For Twitter Cards
- [ ] Update image URLs in `index.html`

### 3. Update Favicon
- [ ] Replace `/public/vite.svg` with your custom favicon
- [ ] Consider creating multiple sizes (16x16, 32x32, 180x180 for Apple)
- [ ] Add `apple-touch-icon.png` for iOS devices

### 4. Configure Web Server

#### For Apache (.htaccess):
```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Handle React Router (redirect all to index.html)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

#### For Nginx (nginx.conf):
```nginx
# GZIP compression
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

# Browser caching
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# Handle React Router
location / {
  try_files $uri $uri/ /index.html;
}
```

### 5. SEO Submission

After deployment, submit to:
- [ ] [Google Search Console](https://search.google.com/search-console)
  - Submit sitemap.xml
  - Request indexing for main pages
  - Monitor search performance
  
- [ ] [Bing Webmaster Tools](https://www.bing.com/webmasters)
  - Submit sitemap.xml
  - Verify site ownership
  
- [ ] [Google Analytics](https://analytics.google.com) (Optional, but recommended)
  - Only if you want usage analytics
  - Update Privacy Policy if you add GA

### 6. Verify SEO Elements

Test these tools after deployment:
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) - Verify Schema.org markup
- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - Verify Open Graph tags
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Verify Twitter Cards
- [ ] [GTmetrix](https://gtmetrix.com) or [PageSpeed Insights](https://pagespeed.web.dev/) - Check performance

### 7. Build and Deploy

```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build

# Preview production build locally (optional)
npm run preview

# Deploy the 'dist' folder to your hosting provider
```

### 8. Post-Deployment Checks

- [ ] Verify all pages load correctly
- [ ] Test all internal links
- [ ] Verify footer navigation highlighting works
- [ ] Test JSON and YAML conversion functionality
- [ ] Check mobile responsiveness
- [ ] Verify robots.txt is accessible: `https://yourdomain.com/robots.txt`
- [ ] Verify sitemap.xml is accessible: `https://yourdomain.com/sitemap.xml`
- [ ] Test social media sharing (Facebook, Twitter, LinkedIn)

### 9. Security Headers (Recommended)

Add these HTTP headers via your web server:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer-when-downgrade
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### 10. SSL/HTTPS

- [ ] Ensure SSL certificate is installed and valid
- [ ] Force HTTPS redirects (HTTP → HTTPS)
- [ ] Update all URLs in meta tags to use `https://`

### 11. Monitoring Setup (Optional)

Consider setting up:
- [ ] Uptime monitoring (e.g., UptimeRobot, Pingdom)
- [ ] Error tracking (e.g., Sentry)
- [ ] Performance monitoring
- [ ] Search Console alerts

### 12. Social Media Presence (Future)

When ready, create:
- [ ] GitHub repository stars campaign
- [ ] Product Hunt launch
- [ ] Reddit posts in relevant communities (r/webdev, r/reactjs, r/MachineLearning)
- [ ] Twitter account for announcements
- [ ] LinkedIn posts about TOON format

### 13. Content Updates

Keep content fresh:
- [ ] Update "Last updated" dates when you modify legal pages
- [ ] Update sitemap.xml lastmod dates when content changes
- [ ] Add blog posts or case studies (future enhancement)
- [ ] Update documentation with new features

## Quick Command Reference

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment Platforms

This app works great with:
- **Netlify** - Automatic React Router support
- **Vercel** - Zero config deployment
- **GitHub Pages** - Free hosting (needs routing config)
- **AWS S3 + CloudFront** - Scalable option
- **DigitalOcean App Platform** - Easy deployment
- **Cloudflare Pages** - Fast global CDN

## Environment-Specific Notes

### Netlify
Create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel
Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Final Notes

✅ All content is SEO-optimized and ready for indexing
✅ robots.txt and sitemap.xml are configured
✅ Meta tags are comprehensive
✅ Structured data is implemented
✅ Legal pages are complete

Remember to:
- Keep the Privacy Policy, Terms, and legal pages up-to-date
- Monitor search performance in Google Search Console
- Respond to user feedback and bug reports
- Keep dependencies updated for security

Good luck with your deployment! 🚀
