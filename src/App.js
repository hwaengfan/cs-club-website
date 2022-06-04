import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Bulletin from './pages/Bulletin';
import Resources from './pages/Resources';
import NavigationBar from './components/NavigationBar/';

const App = () => {
	return (
		<BrowserRouter>
			<NavigationBar />
			<Routes>
				<Route path='/homepage' element={<Homepage />} />
				<Route path='/bulletin' element={<Bulletin />} />
				<Route path='/resources' element={<Resources />} />
				<Route path='*' element={<Navigate to='/homepage' replace />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
