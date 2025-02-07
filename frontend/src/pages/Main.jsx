import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { loginPage, regPage, apiGetUser, apiGetUserChats } from '../../api-controllers';

import Navbar from '../components/Navbar';
import MainPanel from '../components/MainPanel';

import { MDBContainer } from 'mdb-react-ui-kit';

export default function Main() {
	const testUser = { name: 'Коля Халимендик', username: 'kolya_kha', pass: 'user' };
	const testUserChats = {
		chats: [
			{ id: 1, name: 'Острые пузырьки' },
			{ id: 2, name: 'Крутые парни' },
			{ id: 1, name: 'Острые пузырьки' },
			{ id: 2, name: 'Крутые парни' },
			{ id: 1, name: 'Острые пузырьки' },
			{ id: 2, name: 'Крутые парни' },
			{ id: 1, name: 'Острые пузырьки' },
			{ id: 2, name: 'Крутые парни' },
		],
	};

	const [user, setUser] = useState(testUser);
	const [userChats, setUserChats] = useState(testUserChats);

	const [updateUserTrigger, setUpdateUserTrigger] = useState(false);

	const getUser = async () => {
		try {
			const response = await axios.get(apiGetUser, { withCredentials: true });
			setUser(response.data);
			getUserChats(response.data.name);
		} catch (error) {
			console.error('Ошибка загрузки:', error);
		}
	};

	const getUserChats = async username => {
		try {
			const response = await axios.get(apiGetUserChats(username), { withCredentials: true });
			setUserChats(response.data);
		} catch (error) {
			console.error('Ошибка загрузки:', error);
		}
	};

	useEffect(() => {
		if (updateUserTrigger) {
			setUpdateUserTrigger(false);
			// TODO
		}

		// getUser();
	}, []);

	if (user == null || Object.keys(user).length == 0) {
		return (
			<section style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#eeeeee' }}>
				<Navbar />
				<div className='pos-center'>
					<MDBContainer className='main-panel' style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
						<h2>Войдите в профиль или зарегистрируйтесь!</h2>
						<div style={{ flexDirection: 'row' }}>
							<a href={loginPage}>Войти</a> / <a href={regPage}>Зарегистрироваться</a>
						</div>
					</MDBContainer>
				</div>
			</section>
		);
	}

	if (user !== null && Object.keys(user).length > 0) {
		return (
			<section style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#eeeeee' }}>
				<Navbar />
				<MainPanel user={user} userChats={userChats} />
			</section>
		);
	}
}
