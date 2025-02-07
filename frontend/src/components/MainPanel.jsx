import React from 'react';

import ChatsMenu from './ChatsMenu';
import ChatWindow from './ChatWindow';

import { MDBContainer } from 'mdb-react-ui-kit';

export default function MainPanel({ user, userChats }) {
	return (
		<div className='pos-center'>
			<MDBContainer className='main-panel'>
				<ChatsMenu userChats={userChats} />
				<ChatWindow />
			</MDBContainer>
		</div>
	);
}
