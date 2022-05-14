export const getStaticProps = async () => {
	const url = "https://jsonplaceholder.typicode.com/users";

	const res = await fetch(url);
	const data = await res.json();

	return {
		props: { data },
	};
};

const Index = ({ data }) => {
	return (
		<>
			<h1>Olá!</h1>
			{data.map((ninja) => (
				<div key={ninja.id}>
					<a>
						<h3>Nome é:{ninja.name}</h3>
						<h3>Usuário é: {ninja.username}</h3>
						<h3>Email é: {ninja.email}</h3>
					</a>
				</div>
			))}
		</>
	);
};
export default Index;
