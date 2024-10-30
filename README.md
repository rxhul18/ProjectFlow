# ClientProjectFlow

ClientProjectFlow is a project management application built with Vite, React, and Tailwind CSS on the frontend, using MongoDB as the database. It leverages GraphQL for efficient data fetching with Apollo Client on the frontend and Express on the backend. This app allows users to manage clients and projects seamlessly, providing CRUD operations with a modern UI.

## Links

- GitHub Repository: http://github.com/rxhul18/ProjectFlow
- Live Project: https://project-client-flow.vercel.app

## Screenshots

*(Add screenshots here to showcase different parts of the application, such as the dashboard, client details page, and project management page.)*

---

## Features

- Create, update, and delete clients and projects.
- Seamless integration with MongoDB and GraphQL for optimized data fetching.
- Interactive UI built with React, styled with Tailwind CSS.
- Real-time updates and smooth navigation using Apollo Client.
- Server-side handling using Express and Apollo Server.

---

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** and **npm**: [Download here](https://nodejs.org/)
- **MongoDB**: Make sure MongoDB is running locally or remotely.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YourGitHubUsername/ClientProjectFlow.git
   cd ClientProjectFlow
   ```
2. **Install Dependencies:**

   ```bash
   cd client && npm install
   cd server && npm install
   ```

3. **Environment Configuration:**

   Create a `.env` file in the root directory and add your configuration:

   ```env
   NODE_ENV=development
   PORT=3050
   MONOGO_URL=<provide yours>
   ```

### Start Project

1. **Start the Project Server:**

   ```bash
   npm run server
   ```
   
1. **Start the Project Client:**

   ```bash
   npm run client
   ```

## Project Structure

```plaintext
ClientProjectFlow/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── mutations/
│   │   ├── pages/
│   │   ├── queries/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── config/
│   ├── models/
│   ├── schema/
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── sampleData.js
├── .gitignore
├── README.md
└── package.json
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request to suggest improvements or add new features.
