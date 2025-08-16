# The Therapeutic Teacher Website - Local Development Guide

This guide will help you set up and run the Therapeutic Teacher website locally on your machine for development purposes.

## 🚀 Getting Started

Follow these steps to get your development environment set up:

### 1. Clone the Repository (if applicable)

If you received this project as a Git repository, clone it to your local machine:

```bash
git clone <repository-url>
cd therapeutic-teacher-multipage
```

If you received a zip file, simply unzip it and navigate into the `therapeutic-teacher-multipage` directory:

```bash
unzip therapeutic-teacher-multipage-source.zip
cd therapeutic-teacher-multipage
```

### 2. Install Dependencies

This project uses `pnpm` as its package manager. If you don't have `pnpm` installed, you can install it via npm:

```bash
npm install -g pnpm
```

Once `pnpm` is installed, install the project dependencies:

```bash
pnpm install
```

### 3. Run the Development Server

To start the local development server, run:

```bash
pnpm run dev
```

This will typically start the server at `http://localhost:5173`. You can open this URL in your web browser to see the website.

### 4. Build for Production

To create a production-ready build of the website (static files for deployment), run:

```bash
pnpm run build
```

This will generate a `dist` folder in the project root, containing the optimized HTML, CSS, and JavaScript files. These are the files you would upload to a static hosting service like GitHub Pages.

## 📂 Project Structure

- `src/`: Contains the main source code for the React application.
  - `src/App.jsx`: The main application component and routing setup.
  - `src/App.css`: Global styles for the application.
  - `src/components/`: Reusable React components (e.g., Navigation, Footer).
  - `src/pages/`: Individual page components (e.g., HomePage, AboutPage).
  - `src/assets/`: Static assets like images.
- `public/`: Static assets that are served directly (e.g., favicon).
- `vite.config.js`: Vite configuration file.
- `package.json`: Project dependencies and scripts.

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Lucide React**: A collection of beautiful open-source icons.
- **React Router DOM**: For handling client-side routing in React applications.

## 🤝 Contributing

Feel free to modify and extend this project as needed. If you encounter any issues or have questions, please refer to the documentation for the respective technologies or reach out for support.

Happy coding!

