import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { createRoot } from 'react-dom/client';

//ReactDOM.render(<App />, document.getElementById('app'));

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);