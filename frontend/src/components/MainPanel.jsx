import React, { useState } from 'react';

import ChatsMenu from './ChatsMenu';
import ChatWindow from './ChatWindow';

import { MDBContainer } from 'mdb-react-ui-kit';

export default function MainPanel({ user, userChats }) {
	const [chatId, setChatId] = useState(null);
	console.log(chatId);

	return (
		<div className='pos-center'>
			<MDBContainer className='main-panel'>
				<ChatsMenu userChats={userChats} setChatId={setChatId} />
				<ChatWindow username={user.name} chatId={chatId} />
			</MDBContainer>
		</div>
	);
}
