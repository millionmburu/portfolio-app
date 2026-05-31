# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Personal Project Showcase

## Overview

This project is a Single Page Application (SPA) built with React. It serves as a personal portfolio platform where users can view projects, search through projects, and add new projects dynamically.

The application was developed as part of a React summative lab to demonstrate understanding of React fundamentals including components, props, state management, event handling, and routing.

---

## Features

- Display a list of projects
- Search and filter projects dynamically
- Add new projects using a form
- View project information
- Responsive layout
- Built using reusable React components

---

## Technologies Used

- React
- JavaScript
- Vite
- React Router DOM
- CSS

---

## Project Structure

```text
src/
│
├── components/
│   ├── searchBar.jsx
│   ├── projectList.jsx
│   └── addProjectForm.jsx
│
├── pages/
│   ├── HomePage.jsx
│   └── ProjectDetails.jsx
│
├── App.jsx
├── main.jsx
└── data/
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/millionmburu/portfolio-app.git
```

Navigate into the project folder:

```bash
cd portfolio-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in a browser using the URL provided by Vite.

---

## Usage

### View Projects
The home page displays a list of available projects.

### Search Projects
Use the search bar to filter projects by title.

### Add a Project
Fill in the form and submit to add a new project to the project list.

---

## Known Limitations

- Project data is stored in local state and is not saved permanently.
- Images may require valid URLs to display correctly.
- No backend database is currently connected.

---

## Learning Outcomes Demonstrated

- React Components
- Props
- State Management with useState
- Event Handling
- Conditional Rendering
- List Rendering with map()
- React Router Navigation
- Responsive User Interface Design

---

## Author

Million Mburu

React Portfolio Project – Summative Lab
