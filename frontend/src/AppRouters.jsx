import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import ChatsDev from './pages/ChatsDev';

const AppRouters = () => {
	return (
		<Routes>
			<Route path='/' element={''} />
			<Route path='/auth/login/' element={<Login />} />
			<Route path='/chats-dev/' element={<ChatsDev />} />
			<Route path='/chats/' element={<Main />} />
		</Routes>
	);
};

export default AppRouters;
