# Deploy Backend to Render

## Quick Deployment Steps

1. **Sign up at Render.com**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub: `finxtapps/RAYA`

3. **Configure**
   - Name: `raya-backend`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Add Environment Variables**
   ```
   JWT_SECRET=random#secret
   MONGO_URL=your-mongodb-url
   STRIPE_SECRET_KEY=your-stripe-key
   PORT=4000
   ```

5. **Deploy** - Click "Create Web Service"

6. **Update Vercel**
   - Copy your Render URL (e.g., `https://raya-backend.onrender.com`)
   - Go to Vercel → Settings → Environment Variables
   - Add: `VITE_API_URL` = your Render URL
   - Redeploy frontend

## Alternative: Railway.app

1. Go to https://railway.app
2. Connect GitHub repo
3. Select `backend` folder
4. Add environment variables
5. Deploy
