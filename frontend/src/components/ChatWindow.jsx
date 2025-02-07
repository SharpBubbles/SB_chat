import React from 'react';

import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBInputGroup, MDBInput, MDBIcon, MDBBtn, MDBNavbarLink } from 'mdb-react-ui-kit';

export default function ChatWindow() {
	return (
		<>
			<div className='chat-window'>
				<div className='top'></div>
				<div className='bottom'>
					<MDBInputGroup style={{ height: '100%' }} tag='form' className='d-flex w-auto '>
						<textarea style={{ height: '100%', width: '100%', resize: 'none', outline: 'none', backgroundColor: '#332d2d', border: '1px solid #1e1e1e', color: '#ffffff' }} />
						<MDBBtn style={{ backgroundColor: '#59b3e2', borderBottomRightRadius: '15px', padding: '15px' }} color='light' rippleColor='dark'>
							<MDBIcon style={{ margin: 0, padding: 0 }} fas icon='paper-plane' size='2xl' />
						</MDBBtn>
					</MDBInputGroup>
				</div>
			</div>
		</>
	);
}
