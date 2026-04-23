# User Authentication & Authorization

Authentication and authorization starter project built with **Next.js 16**, **React 19**, **better-auth**, and **MongoDB**.

## Stack

- Next.js `16.2.4`
- React `19.2.4`
- better-auth `1.6.7`
- MongoDB + `@better-auth/mongo-adapter`
- HeroUI

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js
│   ├── components/
│   │   ├── SignOutBtn.jsx
│   │   ├── Signin.jsx
│   │   └── Signup.jsx
│   ├── dashboard/
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── lib/
    ├── auth-client.js
    └── auth.js
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` in the project root and add required auth/database values.

Use `src/lib/auth.js` as the source of truth for exact variable names.

Typical values are similar to:

```env
MONGODB_URI=your-mongodb-connection-string
BETTER_AUTH_SECRET=your-strong-secret
BETTER_AUTH_URL=http://localhost:3000
```

### 3) Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – run production server
- `npm run lint` – run ESLint

## Auth Routes

Auth handler is located at:

- `src/app/api/auth/[...all]/route.js`

App pages include:

- `/` (home)
- `/dashboard` (protected area, based on your auth logic)

## Notes

- Keep secrets in `.env` (never commit env files).
- Confirm MongoDB and auth config before running in production.

## License

MIT (or update to your preferred license).
