import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

function Sobre() {
	return (
		<>
			<Title>Página Sobre</Title>
			<Link href="/">
				<button>Página Principal</button>
			</Link>
			<Link href="/perfil/1/1">
				<button>Página Perfil</button>
			</Link>
		</>
	);
}

export default Sobre;
