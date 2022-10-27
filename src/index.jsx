import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import '../public/css/Calendar.css';
import App from './components/App.jsx';

const root = createRoot(document.getElementById("root"));


root.render(<App />);