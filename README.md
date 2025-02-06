# 📚 Seminar Management Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Overview

The Seminar Management Application is a React-based web application designed for managing and organizing seminars
efficiently. It incorporates reusable components and hooks, as well as a centralized state management system using Redux
Toolkit. The application is built using modern web development tools and practices, ensuring optimal performance and
maintainability.

## ✨ Features

🧩 Reusable Components: Modular components such as Textarea, modals like UpdateSeminarModal, and context providers (ModalProvider) make the application extensible and scalable.\
🎛️ State Management: Centralized application state using Redux Toolkit with RTK Query for state synchronization with backend APIs.\
🖊️ Form Enhancements: Custom hooks such as useModalContext and utility services streamline processes and interactions.\
⚙️ Codebase Organization: A clean folder structure with organized types, utilities, and API layers.

## 🛠️ Technology Stack

React , TypeScript , Redux Toolkit , Sass , React Router , Prettier , React Toastify


## 📂 Project Structure

````
src/
├── assets/
│   ├── styles/
│   ├── svg/
│   ├── utils/    
├── components/               # Reusable UI components
│   ├── atoms/                # Small building blocks
│   ├── molecules/            # Combination of atoms
│   └── organisms/            # Complex UI sections
│       └── seminar/
│           └── modals/       # Seminar modals (e.g., UpdateSeminarModal)
├── hooks/                    # Custom React hooks
├── layouts/                  # Layout utilities and providers
│   └── provider/             # Context providers (e.g., ModalProvider)
├── pages/                    # Page-level components
│   └── seminar/
│   └── seminars/  
├── routes/ 
├── store/                    # Redux Toolkit store
│   └── seminars/             # API and state logic for seminars
├── utils/                    # Utility methods and helpers
│   └── messages/          
│   └── enums/
│   └── helpers/
│   └── mocks/      
├── styles/                   # SCSS stylesheets
````

## 📦 Installation

To get the project up and running locally, follow these steps:\
 1.Clone the Repository:
```bash
    git clone https://github.com/Artur199523/Seminars.git
    cd  Seminar
```

2.Install Dependencies: Make sure Node.js is installed. Then, run:
```bash
    npm install
```

3.Running the Development Server and JSON Server:
```bash
    npm run dev
```
