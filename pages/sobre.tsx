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
				<button>Página principal</button>
			</Link>
			<Link href="/1/Carlos">
				<button>Página Perfil</button>
			</Link>
		</>
	);
}

export default Sobre;
