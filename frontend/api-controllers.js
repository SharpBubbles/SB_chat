const apiGateway = 'http://localhost:8761';

export const loginPage = `${apiGateway}/oauth2/authorization/keycloak`;

export const apiGetUser = 'http://localhost:8761/apiEureka/user/get';
export const apiGetMsgs = chatId => {
	return ``;
};
export const apiGetUserChats = username => `${username}`;
