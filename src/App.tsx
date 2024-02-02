import './App.css';
import Landing from './pages/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

const router = createBrowserRouter([
	{ path: '/', element: <Landing /> },
	{ path: '/profile', element: <Profile /> },
	{ path: '/contact', element: <Contact /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
