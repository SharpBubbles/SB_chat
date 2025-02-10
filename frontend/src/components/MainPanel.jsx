import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChatsMenu from './ChatsMenu';
import ChatWindow from './ChatWindow';

import { apiGetMsgs } from '../../api-controllers';

import { MDBContainer } from 'mdb-react-ui-kit';

export default function MainPanel({ user, userChats }) {
	const [chatId, setChatId] = useState(null);
	const [msgs, setMsgs] = useState([]);

	const getMsgByChatId = async () => {
		try {
			const response = await axios.get(apiGetMsgs(chatId), { withCredentials: true });
			setMsgs(response.data);
			console.log(response.data);
		} catch (error) {
			console.error('Ошибка загрузки:', error);
		}
	};

	useEffect(() => {
		getMsgByChatId();
	}, [chatId]);

	return (
		<div className='pos-center'>
			<MDBContainer className='main-panel'>
				<ChatsMenu userChats={userChats} setChatId={setChatId} />
				<ChatWindow username={user.name} chatId={chatId} msgs={msgs} />
			</MDBContainer>
		</div>
	);
}
