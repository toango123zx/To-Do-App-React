import './lib/i18n/i18n';

import { StrictMode } from 'react';
import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client';

import { router } from './routes';

import './index.css';

function getRootElement(): HTMLElement {
	const root = document.getElementById('root');
	if (!root) throw new Error('Root element missing in index.html');
	return root;
}

createRoot(getRootElement()).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
