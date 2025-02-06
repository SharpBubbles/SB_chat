import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

/*
const sendRequest = (username, pass) => {
	try {
		const response = axios.post(
			'https://example.com/api/data',
			{ username: username, pass: pass },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer your_token',
				},
			}
		);

		console.log('Response:', response.data);
	} catch (error) {
		console.error('Error:', error.response?.data || error.message);
	}
};
*/

export default function ChatsDev() {
	/*
	const location = useLocation();
	let { state } = location;
	*/

	let params = new URLSearchParams(document.location.search);
	let username = params.get('username');
	let pass = params.get('pass');

	const ws = useRef(null);
	const [status, setStatus] = useState('');

	const [messages, setMessages] = useState([]);
	const [messageInput, setMessageInput] = useState('');

	useEffect(() => {
		ws.current = new WebSocket(`ws://localhost:3210?username=${username}&pass=${pass}`);

		ws.current.onopen = () => {
			setStatus('Connected');
		};

		ws.current.onmessage = event => {
			console.log('Received:', event.data);
			const mess = JSON.parse(event.data);
			setMessages(prevMessages => [...prevMessages, mess.text]);
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
				reciver: username,
				recipient: 'yunya',
				text: messageInput,
				chat_id: 1,
			};
			ws.current.send(JSON.stringify(message));
			setMessageInput('');
		}
	};

	return (
		<>
			<div>
				<h1>User Login</h1>
				<p>Username: {username}</p>
				<p>Pass: {pass}</p>
			</div>
			<hr />
			<div>
				<h1>SB Chat</h1>
				<p>Status: {status}</p>
				<div>
					<h2>Полученные сообщения:</h2>
					<ul>
						{messages.map((msg, index) => (
							<li key={index}>{msg}</li>
						))}
					</ul>
				</div>
				<div>
					<input type='text' value={messageInput} onChange={e => setMessageInput(e.target.value)} placeholder='Введите сообщение' />
					<button onClick={sendMessage}>Отправить</button>
				</div>
			</div>
		</>
	);
}
