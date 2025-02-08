import React, { useEffect, useState, useRef } from 'react';

import { MDBInputGroup, MDBInput, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBCollapse } from 'mdb-react-ui-kit';

export default function ChatWindow({ username, chatId }) {
	const ws = useRef(null);
	const [status, setStatus] = useState('');
	let classNameMsg = '';

	const [messages, setMessages] = useState([
		{ sender: username, text: 'Привет!', chat_id: chatId },
		{ sender: 'yunya', text: 'Привет, бро', chat_id: chatId },
		{ sender: username, text: 'Че как дела?', chat_id: chatId },
		{ sender: 'yunya', text: 'Да нормально', chat_id: chatId },
	]);
	const [messageInput, setMessageInput] = useState('');

	useEffect(() => {
		ws.current = new WebSocket(`ws://localhost:3210?username=${username}`);

		ws.current.onopen = () => {
			setStatus('Connected');
		};

		ws.current.onmessage = event => {
			console.log('Received:', event.data);
			const msg = JSON.parse(event.data);
			setMessages(prevMessages => [...prevMessages, msg]);
		};

		ws.current.onerror = error => {
			console.error('WebSocket error:', error);
			setStatus('Error');
		};

		return () => {
			if (ws.current) {
				ws.current.close();
				setStatus('Disconnected');
			}
		};
	}, []);

	const sendMessage = () => {
		if (ws.current && messageInput) {
			const message = {
				sender: username,
				text: messageInput,
				chat_id: chatId,
			};
			ws.current.send(JSON.stringify(message));
			setMessages(prevMessages => [...prevMessages, message]);
			setMessageInput('');
		}
	};

	return (
		<>
			<div className='chat-window'>
				<div className='top' style={{ color: 'black' }}>
					{messages.map((msg, index) => {
						msg.sender === username ? (classNameMsg = 'd-flex flex-row justify-content-end me-3 mb-4 msg') : (classNameMsg = 'd-flex flex-row justify-content-start ms-3 mb-4 msg');
						return (
							<div className={classNameMsg} key={index}>
								<div className='rounded-3' style={{ backgroundColor: '#f5f6f7' }}>
									<p className='fw-bold small p-2 mb-0 pb-0'>{msg.sender}</p>
									<hr style={{ margin: 0 }} />
									<p className='small p-2 mb-0' style={{ fontSize: '17.5px' }}>
										{msg.text}
									</p>
								</div>
							</div>
						);
					})}

					{/* <div className='d-flex flex-row justify-content-end mb-4 msg'>
						<div>
							<p className='small p-2 me-3 mb-1 rounded-3' style={{ backgroundColor: '#f5f6f7' }}>
								Do you have pictures of Matley Marriage?
							</p>
						</div>
					</div>

					<div className='d-flex flex-row justify-content-start mb-4 msg'>
						<div>
							<p className='small p-2 ms-3 mb-1 rounded-3' style={{ backgroundColor: '#f5f6f7' }}>
								Sorry I don't have. i changed my phone.
							</p>
						</div>
					</div> */}
				</div>

				<div className='bottom'>
					<MDBInputGroup style={{ height: '100%' }} tag='form' className='d-flex w-auto '>
						<textarea
							tag='input'
							value={messageInput}
							onChange={e => setMessageInput(e.target.value)}
							style={{ height: '100%', width: '100%', resize: 'none', outline: 'none', backgroundColor: '#332d2d', border: '1px solid #1e1e1e', color: '#ffffff' }}
						/>
						<MDBBtn onClick={sendMessage} style={{ backgroundColor: '#59b3e2', borderBottomRightRadius: '15px', padding: '15px' }} color='light' rippleColor='dark'>
							<MDBIcon style={{ margin: 0, padding: 0 }} fas icon='paper-plane' size='2xl' />
						</MDBBtn>
					</MDBInputGroup>
				</div>
			</div>
		</>
	);
}
