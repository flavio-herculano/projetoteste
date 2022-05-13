import { useRouter } from "next/router";
import Link from "next/link";

const info = () => {
	const router = useRouter();
	const { id, pessoa } = router.query;

	return (
		<>
			<h1>O id é: {id}</h1>
			<h1>A pessoa é: {pessoa}</h1>
			<Link href="/">
				<button>Página principal</button>
			</Link>
			<Link href="/sobre">
				<button>Página sobre</button>
			</Link>
		</>
	);
};

export default info;
