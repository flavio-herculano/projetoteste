import { useRouter } from "next/router";
import Link from "next/link";

const Info = () => {
	const Router = useRouter();
	const { id, pessoa } = Router.query;

	return (
		<>
			<h1>O id é: {id}</h1>
			<h1>A pessoa: {pessoa}</h1>
			<Link href="/">
				<button>Página principal</button>
			</Link>
			<Link href="/sobre">
				<button>Página sobre</button>
			</Link>
		</>
	);
};

export default Info;
