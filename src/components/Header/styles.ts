import styled from 'styled-components';

export const HeaderContainer = styled.header`
	background: ${(props) => props.theme['blue']};
	padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NewTransactionButton = styled.button`
	height: 3rem;
	border: 0;
	background: ${(props) => props.theme['blue-light']};
	color: ${(props) => props.theme['shape']};
	font-weight: bold;
	padding: 0 1.25rem;
	border-radius: 6px;
	cursor: pointer;
	transition: filter 0.3s;

	&:hover {
		filter:brightness(0.9);
	}
`;
