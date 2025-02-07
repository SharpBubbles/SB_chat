import React from 'react';
import axios from 'axios';

import { apiGetUser } from '../../api-controllers';

import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit';

export default function Navbar() {
	const getUser = async () => {
		try {
			const response = await axios.get(apiGetUser, { withCredentials: true });
			console.log(response.data);
		} catch (error) {
			console.error('Ошибка загрузки:', error);
		}
	};

	return (
		<MDBNavbar style={{ backgroundColor: '#332d2d' }}>
			<MDBContainer>
				<MDBNavbarBrand className='d-flex' href='#'>
					<img src='/img/SB_chat.png' height='45' style={{ marginTop: 2, marginBottom: 2 }} alt='' />
				</MDBNavbarBrand>
				<MDBNavbarLink className='d-flex me-auto' style={{ marginLeft: '10px' }} href='https://github.com/orgs/SharpBubbles/repositories'>
					<MDBIcon fab icon='github' color='white' size='2x' />
				</MDBNavbarLink>

				{/* <MDBBtn onClick={getUser}>getUser</MDBBtn> */}

				<MDBInputGroup tag='form' className='d-flex w-auto '>
					<MDBInput style={{ backgroundColor: '#ffffff' }} label='Найти пользователя' />
					<MDBBtn style={{ backgroundColor: '#59b3e2' }} rippleColor='dark'>
						<MDBIcon icon='search' />
					</MDBBtn>
				</MDBInputGroup>
			</MDBContainer>
		</MDBNavbar>
	);
}
