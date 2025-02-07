import React from 'react';

import ChatsMenu from './ChatsMenu';
import ChatWindow from './ChatWindow';

import { MDBContainer } from 'mdb-react-ui-kit';

export default function Chat({ chat }) {
	return (
		<div className='d-flex align-items-center chat'>
			<img src='/img/chat.png' alt='' style={{ padding: '0px', width: '50px', height: '50px' }} className='rounded-circle-' />
			<div className='ms-3'>
				<p className='fw-bold mb-0'>{chat.name}</p>
				<p className='text-muted mb-0'>...</p>
			</div>
		</div>
	);
}
