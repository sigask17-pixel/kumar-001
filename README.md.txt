# Kumar 001 — AI Friend

A beginner-friendly starter project for the Kumar 001 chat interface.

## Project files

- `public/index.html` — chat page
- `public/css/style.css` — styling
- `public/js/app.js` — local demo chat replies
- `server/index.js` — minimal Node.js backend starter
- `package.json` — start script
- `.env.example` — example environment variable placeholder

## Try the chat

Open `public/index.html` in a browser. The starter responds with local demo messages and does not need an API key.

## Run the backend (in an environment with Node.js)

```bash
npm start
```

Then visit `http://localhost:3000/health` to check the server.

## Important

This is not yet connected to a real AI model. To add one, connect a provider through the backend and store any API key in an environment variable. Never place secret keys in browser code or upload them to GitHub.
