Splitr 💸

Splitr is a modern bill-splitting and expense-sharing app built with Next.js 14, Convex, Clerk, and Inngest. Easily split group expenses, track balances in real-time, and handle settlements securely.

✨ Features

🔥 Create & manage groups (trips, events, daily use)

🧾 Add and split expenses seamlessly

👤 Secure authentication powered by Clerk

📊 Real-time balances with Convex

⚡ Background tasks & workflows via Inngest

🌐 Built with Next.js App Router

📱 Fully responsive UI

🚀 Tech Stack

Frontend: Next.js 14
, React, TailwindCSS

Auth: Clerk

Backend / DB: Convex

Jobs & Workflows: Inngest

Other Tools: ESLint, PostCSS, Vercel (deployment)

📦 Installation
# Clone the repo
git clone https://github.com/hvchaturvedi/splitr.git
cd splitr

# Install dependencies
npm install

# Start development server
npm run dev


Your app will be available at 👉 http://localhost:3000

🔑 Environment Variables

Create a .env.local file and add the required keys:

NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
INNGEST_API_KEY=your_inngest_key

🛠️ Project Structure
splitr/
├── app/                # Next.js App Router pages
├── convex/             # Convex backend functions
├── inngest/            # Inngest event handlers & jobs
├── components/         # UI components
├── public/             # Static assets
├── package.json        # Dependencies & scripts
└── README.md           # Project documentation

📤 Deployment

Deployed easily on Vercel
 with Convex, Clerk, and Inngest integrations.

# Production build
npm run build
npm start

🤝 Contributing

Fork the repo

Create a new branch (feature/my-feature)

Commit your changes (git commit -m 'Add new feature')

Push to your branch (git push origin feature/my-feature)

Open a Pull Request 🚀

⚡ Built with ❤️ using Next.js, Convex, Clerk, and Inngest
