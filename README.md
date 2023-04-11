<p align="center">
  <img src="" height="300"/>
</p>
<p align="center">
  <em>🤖 Assemble, configure, and deploy autonomous AI Agents in your browser. 🤖 </em>
</p>
<p align="center">
    <img alt="Node version" src="./Newlogo.png" />
</p>

<p align="center">
<a href="">🔗 Short link</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-getting-started">🤝 Contribute</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://twitter.com/asimdotshrestha/status/1644883727707959296">🐦 Twitter</a>
</p>

---

$AGENT allows you to configure and deploy Autonomous AI agents.
Name your own custom AI and have it embark on any goal imaginable.
It will attempt to reach the goal by thinking of tasks to do, executing them, and learning from the results 🚀.

## 🎉 Features

This platform is currently in beta, we are currently working on:

- Long term memory 🧠
- Web browsing 🌐
- Interaction with websites and people 👨‍👩‍👦

More Coming soon...

## 🚀 Tech Stack

- ✅ **Bootstrapping**: [create-t3-app](https://create.t3.gg).
- ✅ **Framework**: [Nextjs 13 + Typescript](https://nextjs.org/).
- ✅ **Auth**: [Next-Auth.js](https://next-auth.js.org)
- ✅ **ORM**: [Prisma](https://prisma.io).
- ✅ **Database**: [Supabase](https://supabase.com/).
- ✅ **Styling**: [TailwindCSS + HeadlessUI](https://tailwindcss.com).
- ✅ **Typescript Schema Validation**: [Zod](https://github.com/colinhacks/zod).
- ✅ **End-to-end typesafe API**: [tRPC](https://trpc.io/).

## 👨‍🚀 Getting Started

> 🚧 You will need [Nodejs +16 (LTS recommended)](https://nodejs.org/en/) installed.

1. Fork this project:

- [Click here](https://github.com/reworkd/$AGENT/fork).

2. Clone the repository:

```bash
git clone git@github.com:YOU_USER/$AGENT.git
```

3. Install dependencies:

```bash
npm install
```

4. Create a **.env** file with the following content:

> 🚧 The environment variables must match the following [schema](https://github.com/reworkd/$AGENT/blob/main/src/env/schema.mjs).

```bash
# Deployment Environment:
NODE_ENV=development

# Next Auth config:
# Generate a secret with `openssl rand -base64 32`
NEXTAUTH_SECRET=changeme
NEXTAUTH_URL=http://localhost:3000

# Prisma
DATABASE_URL=file:./db.sqlite

# External APIs:
OPENAI_API_KEY=changeme
```

5. Ready 🥳, now run:

```bash
# Create database migrations
npx prisma db push

# Run the project:
npm run dev
```
