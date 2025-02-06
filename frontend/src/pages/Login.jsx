import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

export default function Login() {
	const navigate = useNavigate();

	const handleSubmitLogin = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		// navigate('/chats/', { state: { user: { username: data.get('username'), pass: data.get('pass') } } });
	};

	return (
		<MDBContainer fluid className='d-flex justify-content-center' style={{ backgroundColor: '#eeeeee', minHeight: '100vh', height: '100%' }}>
			<MDBCard className='m-5' style={{ height: '100%' }}>
				<form onSubmit={handleSubmitLogin}>
					<MDBCardBody className='px-4'>
						<h1 className='text-uppercase text-center mb-3'>Авторизация</h1>
						<MDBInput style={{ width: '300px' }} wrapperClass='mb-3' label='Username' name='username' type='text' />
						<MDBInput style={{ width: '300px' }} wrapperClass='mb-3' label='Password' name='pass' type='password' />

						<MDBBtn style={{ width: '300px', backgroundColor: '#007bff', fontSize: '18px' }} className='w-100 mb-3 gradient-custom-4'>
							Войти
						</MDBBtn>
					</MDBCardBody>
				</form>
			</MDBCard>
		</MDBContainer>
	);
}
