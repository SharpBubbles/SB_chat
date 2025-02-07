export const loginPage =
	'https://keycloak.sharpbubbles.online/realms/SharpBubbles/protocol/openid-connect/auth?response_type=code&client_id=SB_chat&scope=openid%20microprofile-jwt&state=4fAoKF0X3AplYI51w92S0fVjRnJCOXTNuXvoBfer2M4%3D&redirect_uri=http://localhost:8761/login/oauth2/code/keycloak&nonce=pps6R6D3NmDNzWaBMzG7kPff-RaBB_AUpDUV6vSCBBo';

export const regPage = 'https://keycloak.sharpbubbles.online/realms/SharpBubbles/login-actions/registration?client_id=SB_chat&tab_id=heCSEBBYiVU';

export const apiGetUser = 'http://localhost:8761/apiEureka/user/get';
export const apiGetUserChats = username => `${username}`;
