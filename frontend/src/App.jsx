import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import AppRouters from './AppRouters';

function App() {
	return (
		<BrowserRouter>
			<AppRouters />
		</BrowserRouter>
	);
}

export default App;
