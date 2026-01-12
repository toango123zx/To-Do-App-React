import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './index.css';

function getRootElement(): HTMLElement {
	const root = document.getElementById('root');
	if (!root) throw new Error('Root element missing in index.html');
	return root;
}

createRoot(getRootElement()).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
