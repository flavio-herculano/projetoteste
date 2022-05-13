import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
	return (
		<>
			<Title>Página Principal</Title>
			<Link href="/sobre">
				<button>Página Sobre</button>
			</Link>
		</>
	);
}
