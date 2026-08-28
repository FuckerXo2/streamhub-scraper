# TMDB Embed API - Glitch Deployment

## What this does:
Scrapes streaming links from 4KHDHub for movies and TV shows.

## How to deploy to Glitch:

1. Go to https://glitch.com
2. Click "New Project" → "Import from GitHub"
3. OR click "New Project" → "glitch-hello-node" and replace files

## After deployment:

1. Click "Tools" → "Terminal" and run:
   ```
   refresh
   ```

2. Get your Glitch URL (e.g., `https://your-project-name.glitch.me`)

3. Update Workers files with this URL:
   - `cloudflare-workers/src/routes/movies.js` (line 8)
   - `cloudflare-workers/src/routes/tv.js` (line 8)
   - `cloudflare-workers/src/routes/embed.js` (line 8)

4. Deploy Workers:
   ```
   cd cloudflare-workers
   npx wrangler deploy
   ```

## Keep project awake (Important!):

In Glitch editor, look for the "Boost" button or add this to your project:
- The free tier sleeps after 5 mins of inactivity
- Click "Make This Project Awake" if available
- Or use a free uptime monitor like UptimeRobot to ping it every 5 mins

## Environment Variables (Optional):

If you need to set env vars, use Glitch's `.env` file editor.

## Test it:

Visit: `https://your-project-name.glitch.me/api/health`

Should return: `{"ok":true}`
