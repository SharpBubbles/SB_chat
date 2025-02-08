import React from 'react';

import Chat from './Chat';

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function ChatsMenu({ userChats, setChatId }) {
	return (
		<>
			<div className='chats-menu'>
				<MDBBtn tag='a' color='none' rippleColor='dark' style={{ color: '#44ad57' }}>
					<MDBIcon fas icon='plus' size='lg' />
				</MDBBtn>
				{userChats.chats.map((chat, index) => (
					<div className='chat' onClick={() => setChatId(chat.id)} key={index}>
						<Chat chat={chat} />
					</div>
				))}
			</div>
		</>
	);
}
