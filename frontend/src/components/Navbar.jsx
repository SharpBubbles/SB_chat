import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function Navbar() {
	return (
		<>
			<MDBNavbar style={{ backgroundColor: '#332d2d' }}>
				<MDBContainer>
					<MDBNavbarBrand href='#'>
						<img src='/img/SB_chat.png' height='45' style={{ marginTop: 2, marginBottom: 2 }} alt='' />
					</MDBNavbarBrand>
					<MDBInputGroup tag='form' className='d-flex w-auto '>
						<MDBInput style={{ backgroundColor: '#ffffff' }} label='Найти пользователя' />
						<MDBBtn style={{ backgroundColor: '#59b3e2' }} rippleColor='dark'>
							<MDBIcon icon='search' />
						</MDBBtn>
					</MDBInputGroup>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
}
