# Deploy Frontend to Vercel

## Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Your code pushed to GitHub

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Your Repository**
   - Select "Import Git Repository"
   - Choose your GitHub repository: `finxtapps/RAYA`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add the following:
     ```
     Name: VITE_API_URL
     Value: https://your-backend-url.com
     ```
   - Replace `your-backend-url.com` with your actual backend URL

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)
   - Your app will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Frontend Directory**
   ```bash
   cd frontend
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name? (press enter for default)
   - In which directory is your code located? `./`

5. **Add Environment Variables**
   ```bash
   vercel env add VITE_API_URL
   ```
   Enter your backend URL when prompted

6. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

You need to set the following environment variable in Vercel:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-backend.com` |

## Post-Deployment

### Update Backend CORS

Make sure your backend allows requests from your Vercel domain. Update `backend/server.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://your-project.vercel.app'
  ]
}))
```

### Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Automatic Deployments

Vercel automatically deploys:
- **Production:** When you push to `main` branch
- **Preview:** When you create a pull request

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `vite.config.js` is correct

### API Calls Fail
- Verify `VITE_API_URL` environment variable is set
- Check backend CORS settings
- Ensure backend is accessible from internet

### 404 on Refresh
- The `vercel.json` file handles this with SPA routing
- All routes redirect to `index.html`

## Useful Commands

```bash
# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel rm [deployment-url]

# Open project in browser
vercel open
```

## Production Checklist

- [ ] Environment variables configured
- [ ] Backend CORS updated
- [ ] MongoDB connection string is secure
- [ ] API endpoints tested
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled (optional)

## Support

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- GitHub Repository: https://github.com/finxtapps/RAYA
