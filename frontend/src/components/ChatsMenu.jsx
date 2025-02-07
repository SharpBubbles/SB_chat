import React from 'react';

import Chat from './Chat';

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function ChatsMenu({ userChats }) {
	return (
		<>
			<div className='chats-menu'>
				<MDBBtn tag='a' color='none' rippleColor='dark' style={{ color: '#44ad57' }}>
					<MDBIcon fas icon='plus' size='lg' />
				</MDBBtn>
				{userChats.chats.map(chat => (
					<Chat chat={chat} />
				))}
			</div>
		</>
	);
}
